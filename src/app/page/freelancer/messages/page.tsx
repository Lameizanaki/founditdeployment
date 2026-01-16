"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ConversationsSidebar, {
  Conversation,
  Message as SidebarMessage,
} from "@/app/components/styles/freelancer_styles/messages/ConversationsSidebar";
import ChatPanel from "@/app/components/styles/freelancer_styles/messages/ChatPanel";
import ws from "@/app/lib/ws";
import ModalShell from "@/app/components/styles/freelancer_styles/messages/ModalShell";
import ConfirmDeleteModal from "@/app/components/styles/freelancer_styles/messages/ConfirmDeleteModal";
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";
import ClientFooter from "@/app/components/styles/global_styles/client/footer";

function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function MessagesPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Store both userId and username for each conversation
  type ConversationWithId = Conversation & {
    otherUserId: string;
    otherUserName: string;
  };
  const [conversations, setConversations] = useState<ConversationWithId[]>([]);
  const [activeId, setActiveId] = useState<string>(""); // this will be userId
  const [active, setActive] = useState<ConversationWithId | undefined>(
    undefined
  );
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);

  // Fetch conversations from backend
  useEffect(() => {
    const fetchConversations = async () => {
      setLoadingConversations(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8085/chat/conversations", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch conversations");
        const data = await res.json();
        // Map backend messages to Conversation[]
        // Group by other user (client/freelancer)
        // Group by other userId, store both userId and username
        const grouped: { [key: string]: ConversationWithId } = {};
        data.forEach((msg: any) => {
          const myUsername = localStorage.getItem("username");
          const myUserId = user?.id ? String(user.id) : null;
          const isSender = msg.senderName === myUsername;
          const otherUserId = isSender
            ? typeof msg.recipientId === "object" &&
              msg.recipientId !== null &&
              "id" in msg.recipientId
              ? String(msg.recipientId.id)
              : String(msg.recipientId)
            : typeof msg.senderId === "object" &&
              msg.senderId !== null &&
              "id" in msg.senderId
            ? String(msg.senderId.id)
            : String(msg.senderId);
          // Skip self-conversations
          if (myUserId && otherUserId === myUserId) return;
          const otherUserName = isSender ? msg.recipientName : msg.senderName;
          // Try to infer the other user's role from backend data if available
          let otherRole: "Client" | "Freelancer" = "Client";
          if (isSender && msg.recipientRole) {
            otherRole =
              msg.recipientRole === "CLIENT" ? "Client" : "Freelancer";
          } else if (msg.senderRole) {
            otherRole = msg.senderRole === "CLIENT" ? "Client" : "Freelancer";
          }
          if (!grouped[otherUserId]) {
            grouped[otherUserId] = {
              ...msg,
              id: otherUserId,
              name: otherUserName,
              otherUserId,
              otherUserName,
              roleTag: otherRole,
              timeLabel: "",
              preview: msg.contents,
              online: false,
              projectLabel: "",
              muted: false,
              messages: [],
            };
          }
          grouped[otherUserId].roleTag = otherRole;
          grouped[otherUserId].messages.push({
            id: msg.id,
            from: isSender ? "me" : "them",
            text: msg.contents,
            time: msg.time,
            messageType: msg.messageType,
          });
        });
        const convArr = Object.values(grouped);
        setConversations(convArr);
        if (convArr.length > 0 && !activeId) {
          // Try to restore last selected chat from localStorage
          const lastActiveId = localStorage.getItem("lastActiveChatId");
          const found =
            lastActiveId && convArr.find((c) => c.otherUserId === lastActiveId);
          if (found) {
            setActiveId(lastActiveId);
          } else {
            setActiveId(String(convArr[0].otherUserId));
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingConversations(false);
      }
    };
    fetchConversations();
    // eslint-disable-next-line
  }, []);

  // Fetch messages for active conversation
  useEffect(() => {
    if (!activeId) return;
    // Ensure activeId is a string or number, not an object
    let safeActiveId = activeId;
    if (typeof activeId === "object" && activeId !== null) {
      safeActiveId = activeId.id || activeId._id || JSON.stringify(activeId);
    }
    safeActiveId = String(safeActiveId);
    if (typeof safeActiveId !== "string" && typeof safeActiveId !== "number") {
      console.warn("[WARN] activeId is not a string or number:", activeId);
      return;
    }
    setLoadingMessages(true);
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `http://localhost:8085/chat/messages?otherUserId=${encodeURIComponent(
            safeActiveId
          )}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch messages");
        const data = await res.json();
        setActive((prev) => {
          if (!prev) return undefined;
          return {
            ...prev,
            messages: data.map((msg: any) => ({
              id: msg.id,
              from:
                msg.senderName === localStorage.getItem("username")
                  ? "me"
                  : "them",
              text: msg.contents,
              time: msg.time,
              messageType: msg.messageType,
            })),
          };
        });
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingMessages(false);
      }
    };
    // Find the conversation object
    const conv = conversations.find((c) => c.otherUserId === activeId);
    setActive(conv);
    fetchMessages();
    // eslint-disable-next-line
  }, [activeId, conversations]);

  // responsive: mobile list/chat
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  // left search (simple filter)
  const [searchLeft, setSearchLeft] = useState("");

  // chat input
  const [chatText, setChatText] = useState("");

  // 3-dots dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // modals
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [blockOpen, setBlockOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  // report form
  const [reportReason, setReportReason] = useState("Spam or unwanted messages");
  const [reportDetails, setReportDetails] = useState("");

  // close dropdown on click outside
  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      if (!menuOpen) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [menuOpen]);

  // ESC closes menu + modals
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setDeleteOpen(false);
      setBlockOpen(false);
      setReportOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filteredConversations = useMemo(() => {
    const q = searchLeft.trim().toLowerCase();
    if (!q) return conversations;
    return conversations.filter((c) => c.name.toLowerCase().includes(q));
  }, [conversations, searchLeft]);

  const showList = mobileView === "list";
  const showChat = mobileView === "chat";

  function openConversation(id: string) {
    setActiveId(String(id)); // id is otherUserId
    localStorage.setItem("lastActiveChatId", String(id));
    setMenuOpen(false);
    setMobileView("chat");
  }

  function toggleMuteActive() {
    if (!active) return;
    setConversations((prev) =>
      prev.map((c) => (c.id === active.id ? { ...c, muted: !c.muted } : c))
    );
  }

  function deleteActiveConversation() {
    if (!active) return;

    const idToDelete = active.id;
    setConversations((prev) => prev.filter((c) => c.id !== idToDelete));
    setDeleteOpen(false);

    // pick next active
    setTimeout(() => {
      setConversations((curr) => {
        const next = curr[0];
        setActiveId(next ? String(next.otherUserId) : "");
        setMobileView("list");
        return curr;
      });
    }, 0);
  }

  function sendMessage() {
    const text = chatText.trim();
    if (!text || !active || !user) return;

    // Optimistically update UI
    setConversations((prev) =>
      prev.map((c) =>
        c.otherUserId === active.otherUserId
          ? {
              ...c,
              messages: [
                ...c.messages,
                { id: `me-${Date.now()}`, from: "me", text, time: "Just now" },
              ],
              preview: text,
              timeLabel: "Just now",
            }
          : c
      )
    );
    setChatText("");

    // Send via WebSocket, use userId
    ws.send({
      type: "MESSAGE",
      payload: JSON.stringify({
        recipientId:
          typeof active.otherUserId === "object" && active.otherUserId !== null
            ? active.otherUserId.id ||
              active.otherUserId._id ||
              JSON.stringify(active.otherUserId)
            : String(active.otherUserId),
        recipientName: active.otherUserName,
        senderId:
          typeof user.id === "object" && user.id !== null
            ? user.id.id || user.id._id || JSON.stringify(user.id)
            : String(user.id),
        senderName: user.username,
        contents: text,
        messageType: "text",
        gigId: active.gigId || null,
      }),
    });
  }

  return (
    <>
      <ClientNavHeader />
      <main className="bg-gray-50 min-h-screen px-4 py-6">
        <div className="mx-auto max-w-6xl">
          {/* Back row */}
          <div className="mb-3">
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                console.log("Back clicked (placeholder)");
                void router;
              }}
              onKeyDown={(e) =>
                handleKeyboardActivate(e, () => {
                  console.log("Back clicked (placeholder)");
                  void router;
                })
              }
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer select-none"
            >
              <span className="text-base">←</span> Back
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Messages
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4">
            <ConversationsSidebar
              conversations={filteredConversations}
              activeId={activeId}
              searchText={searchLeft}
              setSearchText={setSearchLeft}
              onOpenConversation={openConversation}
              visible={showList}
            />

            <ChatPanel
              conversation={active}
              visible={showChat || true /* keep visible on desktop via CSS */}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              onMute={() => {
                setMenuOpen(false);
                toggleMuteActive();
              }}
              onDelete={() => {
                setMenuOpen(false);
                setDeleteOpen(true);
              }}
              onBlock={() => {
                setMenuOpen(false);
                setBlockOpen(true);
              }}
              onReport={() => {
                setMenuOpen(false);
                setReportOpen(true);
              }}
              mobileBackToList={() => setMobileView("list")}
              chatText={chatText}
              setChatText={setChatText}
              onSend={sendMessage}
              menuRef={menuRef}
              user={user}
            />
          </div>
        </div>

        {/* Delete modal */}
        <ConfirmDeleteModal
          open={deleteOpen}
          name={active?.name ?? "this user"}
          onClose={() => setDeleteOpen(false)}
          onConfirm={deleteActiveConversation}
        />

        {/* Block modal */}
        <ModalShell
          open={blockOpen}
          title={`Block ${active?.name ?? "user"}?`}
          onClose={() => setBlockOpen(false)}
        >
          <div className="text-sm text-gray-600">
            Blocking {active?.name ?? "this user"} will prevent them from
            sending you messages. You can unblock them later from your settings.
          </div>

          <div className="mt-5 flex items-center justify-end gap-2">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setBlockOpen(false)}
              onKeyDown={(e) =>
                handleKeyboardActivate(e, () => setBlockOpen(false))
              }
              className="h-9 px-4 rounded-md flex items-center border bg-white hover:bg-gray-50 text-sm cursor-pointer select-none"
            >
              Cancel
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => console.log("Block user (static)")}
              onKeyDown={(e) =>
                handleKeyboardActivate(e, () =>
                  console.log("Block user (static)")
                )
              }
              className="h-9 px-4 rounded-md flex items-center bg-red-500 hover:bg-red-600 text-white text-sm cursor-pointer select-none"
            >
              Block User
            </div>
          </div>
        </ModalShell>

        {/* Report modal */}
        <ModalShell
          open={reportOpen}
          title={`Report ${active?.name ?? "user"}`}
          onClose={() => setReportOpen(false)}
        >
          <div className="text-xs text-gray-500">
            Help us understand what’s wrong. Your report will be reviewed by our
            team.
          </div>

          <div className="mt-4">
            <div className="text-xs font-medium text-gray-800 mb-2">
              Reason for reporting
            </div>

            <div className="space-y-2">
              {[
                "Spam or unwanted messages",
                "Harassment or bullying",
                "Inappropriate content",
                "Scam or fraud",
                "Other",
              ].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="report-reason"
                    value={r}
                    checked={reportReason === r}
                    onChange={() => setReportReason(r)}
                    className="accent-red-500"
                    aria-label={r}
                  />
                  <div className="text-sm text-gray-700">{r}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs font-medium text-gray-800 mb-2">
              Additional details{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </div>

            <textarea
              aria-label="Additional details"
              value={reportDetails}
              onChange={(e) => setReportDetails(e.target.value)}
              placeholder="Please provide any additional information that might help us..."
              className={[
                "w-full min-h-[90px] rounded-md border bg-gray-50 px-3 py-2 text-sm",
                "hover:border-gray-300",
                "focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400",
              ].join(" ")}
            />

            <div className="mt-5 flex items-center justify-end gap-2">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setReportOpen(false)}
                onKeyDown={(e) =>
                  handleKeyboardActivate(e, () => setReportOpen(false))
                }
                className="h-9 px-4 flex items-center rounded-md border bg-white hover:bg-gray-50 text-sm cursor-pointer select-none"
              >
                Cancel
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  console.log("Submit report (static)", {
                    reportReason,
                    reportDetails,
                  })
                }
                onKeyDown={(e) =>
                  handleKeyboardActivate(e, () =>
                    console.log("Submit report (static)", {
                      reportReason,
                      reportDetails,
                    })
                  )
                }
                className="h-9 px-4 rounded-md flex items-center bg-red-500 hover:bg-red-600 text-white text-sm cursor-pointer select-none"
              >
                Submit Report
              </div>
            </div>
          </div>
        </ModalShell>
      </main>
      <ClientFooter />
    </>
  );
}
