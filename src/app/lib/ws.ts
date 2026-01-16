// Simple WebSocket utility for chat
// Usage: import ws from './ws'; ws.connect(userId, onMessage)

let socket = null;
let currentUserId = null;
let onMessageCallback = null;

const ws = {
  connect: (userId, onMessage) => {
    let safeUserId = userId;
    if (typeof userId === "object" && userId !== null) {
      safeUserId = userId.id || userId._id || JSON.stringify(userId);
    }
    safeUserId = String(safeUserId);
    if (typeof safeUserId !== "string" && typeof safeUserId !== "number") {
      console.warn("[WARN] userId is not a string or number:", userId);
      return;
    }
    if (socket && currentUserId === safeUserId) return;
    if (socket) ws.disconnect();
    currentUserId = safeUserId;
    onMessageCallback = onMessage;
    const url = `ws://localhost:8085/chat?userId=${encodeURIComponent(
      safeUserId
    )}`;
    socket = new WebSocket(url);
    socket.onopen = () => {
      // Optionally notify connection
    };
    socket.onmessage = (event) => {
      if (onMessageCallback) onMessageCallback(JSON.parse(event.data));
    };
    socket.onclose = () => {
      socket = null;
      currentUserId = null;
    };
    socket.onerror = (e) => {
      // Optionally handle error
    };
  },
  send: (data) => {
    if (socket && socket.readyState === 1) {
      socket.send(JSON.stringify(data));
    }
  },
  disconnect: () => {
    if (socket) {
      socket.close();
      socket = null;
      currentUserId = null;
    }
  },
};

export default ws;
