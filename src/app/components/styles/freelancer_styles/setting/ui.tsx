"use client";

import React from "react";

export function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export function useOutside<T extends HTMLElement>(
  onOutside: () => void,
  enabled: boolean
) {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    if (!enabled) return;

    function onDown(ev: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      if (ev.target instanceof Node && !el.contains(ev.target)) onOutside();
    }

    function onKey(ev: KeyboardEvent) {
      if (ev.key === "Escape") onOutside();
    }

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [enabled, onOutside]);

  return ref;
}

export function Toggle({
  on,
  setOn,
}: {
  on: boolean;
  setOn: (v: boolean) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOn(!on)}
      onKeyDown={(e) => handleKeyboardActivate(e, () => setOn(!on))}
      className={[
        "w-11 h-6 rounded-full border transition flex items-center px-1",
        on ? "bg-[#4F39F6] border-[#4F39F6]" : "bg-gray-200 border-gray-200",
      ].join(" ")}
      aria-label="Toggle"
    >
      <div
        className={[
          "w-4 h-4 rounded-full bg-white transition",
          on ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </div>
  );
}

export function Dropdown({
  label,
  value,
  options,
  onChange,
  placeholder = "Select",
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const wrapRef = useOutside<HTMLDivElement>(() => setOpen(false), open);

  return (
    <div className="w-full">
      <div className="text-xs font-medium text-gray-700">{label}</div>

      <div ref={wrapRef} className="relative mt-2">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen((s) => !s)}
          onKeyDown={(e) => handleKeyboardActivate(e, () => setOpen((s) => !s))}
          className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 flex items-center justify-between"
          aria-label={`Open ${label}`}
        >
          <div className={value ? "text-gray-900" : "text-gray-400"}>
            {value || placeholder}
          </div>

          <div
            className={[
              "text-gray-500 transition-transform",
              open ? "rotate-180" : "rotate-0",
            ].join(" ")}
          >
            {/* SVG: dropdown chevron icon - right side */}
            <IconChevronDown />
          </div>
        </div>

        {open && (
          <div className="absolute z-20 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
            {options.map((opt) => (
              <div
                key={opt}
                role="button"
                tabIndex={0}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                onKeyDown={(e) =>
                  handleKeyboardActivate(e, () => {
                    onChange(opt);
                    setOpen(false);
                  })
                }
                className="px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Modal({
  open,
  title,
  children,
  onClose,
  widthClass = "max-w-lg",
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  widthClass?: string;
}) {
  const panelRef = useOutside<HTMLDivElement>(onClose, open);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          ref={panelRef}
          className={[
            "w-full",
            widthClass,
            "rounded-xl bg-white border border-gray-200 shadow-sm",
          ].join(" ")}
        >
          <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="text-sm font-semibold text-gray-900">{title}</div>

            <div
              role="button"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
              className="w-8 h-8 rounded-md hover:bg-gray-50 flex items-center justify-center text-gray-600"
              aria-label="Close modal"
            >
              {/* SVG: modal close icon - top right */}
              <IconX />
            </div>
          </div>

          <div className="max-h-[78vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

// -------------------- Placeholder icons (currentColor) --------------------
// You will replace SVG later. I left clear comments on usage locations.
export function IconChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Sidebar icon placeholders:
export function IconGrid() {
  // SVG: sidebar tab icon - Overview
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V7.33333C2 7.70152 2.29848 8 2.66667 8H6C6.36819 8 6.66667 7.70152 6.66667 7.33333V2.66667C6.66667 2.29848 6.36819 2 6 2Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3359 2H10.0026C9.63441 2 9.33594 2.29848 9.33594 2.66667V4.66667C9.33594 5.03486 9.63441 5.33333 10.0026 5.33333H13.3359C13.7041 5.33333 14.0026 5.03486 14.0026 4.66667V2.66667C14.0026 2.29848 13.7041 2 13.3359 2Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3359 8H10.0026C9.63441 8 9.33594 8.29848 9.33594 8.66667V13.3333C9.33594 13.7015 9.63441 14 10.0026 14H13.3359C13.7041 14 14.0026 13.7015 14.0026 13.3333V8.66667C14.0026 8.29848 13.7041 8 13.3359 8Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10.6665H2.66667C2.29848 10.6665 2 10.965 2 11.3332V13.3332C2 13.7014 2.29848 13.9998 2.66667 13.9998H6C6.36819 13.9998 6.66667 13.7014 6.66667 13.3332V11.3332C6.66667 10.965 6.36819 10.6665 6 10.6665Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}

export function IconUser() {
  // SVG: sidebar tab icon - Profile & Rates / Account
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6693 14V12.6667C12.6693 11.9594 12.3883 11.2811 11.8882 10.781C11.3881 10.281 10.7098 10 10.0026 10H6.0026C5.29536 10 4.61708 10.281 4.11699 10.781C3.61689 11.2811 3.33594 11.9594 3.33594 12.6667V14" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.0026 7.33333C9.47536 7.33333 10.6693 6.13943 10.6693 4.66667C10.6693 3.19391 9.47536 2 8.0026 2C6.52984 2 5.33594 3.19391 5.33594 4.66667C5.33594 6.13943 6.52984 7.33333 8.0026 7.33333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}

export function IconFile() {
  // SVG: sidebar tab icon - Proposals
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2912_14020)">
<path d="M9.9974 1.33301H3.9974C3.64377 1.33301 3.30464 1.47348 3.05459 1.72353C2.80454 1.97358 2.66406 2.31272 2.66406 2.66634V13.333C2.66406 13.6866 2.80454 14.0258 3.05459 14.2758C3.30464 14.5259 3.64377 14.6663 3.9974 14.6663H11.9974C12.351 14.6663 12.6902 14.5259 12.9402 14.2758C13.1903 14.0258 13.3307 13.6866 13.3307 13.333V4.66634L9.9974 1.33301Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33594 1.33301V3.99967C9.33594 4.3533 9.47641 4.69244 9.72646 4.94248C9.97651 5.19253 10.3156 5.33301 10.6693 5.33301H13.3359" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66927 6H5.33594" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6693 8.66699H5.33594" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6693 11.333H5.33594" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2912_14020">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}

export function IconDollar() {
  // SVG: sidebar tab icon - Earnings & Payouts
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.3335V14.6668" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3333 3.3335H6.33333C5.71449 3.3335 5.121 3.57933 4.68342 4.01691C4.24583 4.4545 4 5.04799 4 5.66683C4 6.28567 4.24583 6.87916 4.68342 7.31674C5.121 7.75433 5.71449 8.00016 6.33333 8.00016H9.66667C10.2855 8.00016 10.879 8.246 11.3166 8.68358C11.7542 9.12116 12 9.71466 12 10.3335C12 10.9523 11.7542 11.5458 11.3166 11.9834C10.879 12.421 10.2855 12.6668 9.66667 12.6668H4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}

export function IconClock() {
  // SVG: sidebar tab icon - Work Diary
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7v6l4 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBadge() {
  // SVG: sidebar tab icon - Verification & Badges
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBell() {
  // SVG: sidebar tab icon - Notifications
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M13.7 21a2 2 0 0 1-3.4 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconCard() {
  // SVG: sidebar tab icon - Billing & Payments
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2912_13695)">
<path d="M13.3359 3.33301H2.66927C1.93289 3.33301 1.33594 3.92996 1.33594 4.66634V11.333C1.33594 12.0694 1.93289 12.6663 2.66927 12.6663H13.3359C14.0723 12.6663 14.6693 12.0694 14.6693 11.333V4.66634C14.6693 3.92996 14.0723 3.33301 13.3359 3.33301Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.33594 6.66699H14.6693" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2912_13695">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}

export function IconLock() {
  // SVG: sidebar tab icon - Security
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 7.33301H3.33333C2.59695 7.33301 2 7.92996 2 8.66634V13.333C2 14.0694 2.59695 14.6663 3.33333 14.6663H12.6667C13.403 14.6663 14 14.0694 14 13.333V8.66634C14 7.92996 13.403 7.33301 12.6667 7.33301Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66406 7.33301V4.66634C4.66406 3.78229 5.01525 2.93444 5.64037 2.30932C6.26549 1.6842 7.11334 1.33301 7.9974 1.33301C8.88145 1.33301 9.7293 1.6842 10.3544 2.30932C10.9795 2.93444 11.3307 3.78229 11.3307 4.66634V7.33301" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
}

export function IconEye() {
  // SVG: sidebar tab icon - Privacy
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function IconLink() {
  // SVG: sidebar tab icon - Connected Apps
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2912_13720)">
<path d="M10.2632 2.9264C10.347 3.01029 10.4516 3.0703 10.5664 3.10027C10.6811 3.13023 10.8017 3.12905 10.9158 3.09685C11.03 3.06465 11.1334 3.0026 11.2156 2.91709C11.2977 2.83159 11.3556 2.72572 11.3832 2.6104C11.4524 2.32233 11.5971 2.05792 11.8025 1.84438C12.0078 1.63085 12.2664 1.47592 12.5516 1.39555C12.8367 1.31517 13.1381 1.31226 13.4248 1.38711C13.7115 1.46196 13.973 1.61187 14.1824 1.8214C14.3919 2.03092 14.5417 2.29249 14.6165 2.57917C14.6912 2.86585 14.6882 3.16727 14.6077 3.45239C14.5273 3.73752 14.3723 3.99604 14.1587 4.20134C13.9451 4.40664 13.6806 4.55129 13.3925 4.6204C13.2772 4.648 13.1713 4.70585 13.0858 4.788C13.0003 4.87015 12.9382 4.97361 12.906 5.08773C12.8738 5.20185 12.8727 5.32249 12.9026 5.43721C12.9326 5.55194 12.9926 5.6566 13.0765 5.7404L14.1985 6.86173C14.3479 7.01118 14.4665 7.18859 14.5474 7.38385C14.6283 7.57911 14.6699 7.78839 14.6699 7.99973C14.6699 8.21108 14.6283 8.42036 14.5474 8.61562C14.4665 8.81088 14.3479 8.98829 14.1985 9.13773L13.0765 10.2597C12.9927 10.3436 12.888 10.4036 12.7733 10.4336C12.6586 10.4636 12.5379 10.4624 12.4238 10.4302C12.3097 10.398 12.2062 10.3359 12.1241 10.2504C12.0419 10.1649 11.9841 10.0591 11.9565 9.94373C11.8873 9.65567 11.7426 9.39125 11.5372 9.17772C11.3318 8.96419 11.0732 8.80926 10.7881 8.72888C10.5029 8.64851 10.2015 8.6456 9.91486 8.72045C9.62821 8.7953 9.36669 8.9452 9.15723 9.15473C8.94778 9.36425 8.79796 9.62582 8.7232 9.9125C8.64845 10.1992 8.65146 10.5006 8.73193 10.7857C8.81239 11.0709 8.96741 11.3294 9.18101 11.5347C9.39461 11.74 9.65907 11.8846 9.94716 11.9537C10.0625 11.9813 10.1684 12.0392 10.2539 12.1213C10.3394 12.2035 10.4014 12.3069 10.4336 12.4211C10.4658 12.5352 10.467 12.6558 10.437 12.7705C10.4071 12.8853 10.3471 12.9899 10.2632 13.0737L9.14116 14.1951C8.99172 14.3445 8.81431 14.4631 8.61905 14.5439C8.42379 14.6248 8.21451 14.6665 8.00316 14.6665C7.79182 14.6665 7.58254 14.6248 7.38728 14.5439C7.19202 14.4631 7.01461 14.3445 6.86516 14.1951L5.74316 13.0731C5.65936 12.9892 5.5547 12.9292 5.43998 12.8992C5.32525 12.8692 5.20461 12.8704 5.09049 12.9026C4.97638 12.9348 4.87291 12.9969 4.79076 13.0824C4.70862 13.1679 4.65076 13.2737 4.62316 13.3891C4.55396 13.6771 4.40922 13.9415 4.20385 14.1551C3.99848 14.3686 3.73991 14.5235 3.45476 14.6039C3.1696 14.6843 2.86818 14.6872 2.58153 14.6124C2.29487 14.5375 2.03335 14.3876 1.8239 14.1781C1.61444 13.9685 1.46462 13.707 1.38987 13.4203C1.31511 13.1336 1.31812 12.8322 1.39859 12.5471C1.47906 12.2619 1.63408 12.0034 1.84768 11.7981C2.06128 11.5928 2.32574 11.4482 2.61383 11.3791C2.72915 11.3515 2.83502 11.2936 2.92053 11.2115C3.00603 11.1293 3.06808 11.0259 3.10028 10.9117C3.13248 10.7976 3.13366 10.677 3.1037 10.5623C3.07374 10.4475 3.01372 10.3429 2.92983 10.2591L1.80783 9.13773C1.65838 8.98829 1.53983 8.81088 1.45895 8.61562C1.37807 8.42036 1.33644 8.21108 1.33644 7.99973C1.33644 7.78839 1.37807 7.57911 1.45895 7.38385C1.53983 7.18859 1.65838 7.01118 1.80783 6.86173L2.92983 5.73973C3.01363 5.65585 3.11829 5.59583 3.23302 5.56587C3.34774 5.53591 3.46838 5.53709 3.5825 5.56928C3.69662 5.60148 3.80008 5.66353 3.88223 5.74904C3.96438 5.83455 4.02223 5.94042 4.04983 6.05573C4.11903 6.3438 4.26377 6.60822 4.46914 6.82175C4.67451 7.03528 4.93309 7.19021 5.21824 7.27059C5.50339 7.35096 5.80482 7.35387 6.09147 7.27902C6.37812 7.20417 6.63964 7.05426 6.8491 6.84474C7.05855 6.63521 7.20837 6.37364 7.28313 6.08697C7.35788 5.80029 7.35487 5.49887 7.2744 5.21374C7.19394 4.92861 7.03892 4.67009 6.82532 4.46479C6.61172 4.25949 6.34726 4.11484 6.05916 4.04573C5.94385 4.01814 5.83798 3.96028 5.75247 3.87813C5.66696 3.79599 5.60491 3.69252 5.57271 3.5784C5.54052 3.46429 5.53934 3.34364 5.5693 3.22892C5.59926 3.11419 5.65928 3.00954 5.74316 2.92573L6.86516 1.8044C7.01461 1.65495 7.19202 1.5364 7.38728 1.45552C7.58254 1.37464 7.79182 1.33301 8.00316 1.33301C8.21451 1.33301 8.42379 1.37464 8.61905 1.45552C8.81431 1.5364 8.99172 1.65495 9.14116 1.8044L10.2632 2.9264Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2912_13720">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>


  );
}
