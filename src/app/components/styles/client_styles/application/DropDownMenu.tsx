"use client";

import React, { useEffect, useRef } from "react";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

type DropdownMenuProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  trigger: React.ReactNode;
  align?: "left" | "right";
  children: React.ReactNode;
};

type DropdownItemProps = {
  icon?: React.ReactNode;
  label: string;
  tone?: "normal" | "danger";
  onClick: () => void;
};

type DropdownComponent = React.FC<DropdownMenuProps> & {
  Item: React.FC<DropdownItemProps>;
  Divider: React.FC;
};

const DropDownMenu = (({
  open,
  onOpenChange,
  trigger,
  align = "left",
  children,
}: DropdownMenuProps) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    function onMouseDown(e: MouseEvent) {
      const t = e.target as Node;
      if (wrapRef.current && !wrapRef.current.contains(t)) onOpenChange(false);
    }
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("mousedown", onMouseDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [open, onOpenChange]);

  return (
    <div className="relative" ref={wrapRef}>
      {trigger}

      {open ? (
        <div
          className={cx(
            "absolute mt-2 w-52 rounded-xl border bg-white shadow-md ring-1 ring-black/5 overflow-hidden z-20",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}) as DropdownComponent;

const Item: React.FC<DropdownItemProps> = ({
  icon,
  label,
  tone = "normal",
  onClick,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => handleKeyboardActivate(e, onClick)}
      className={cx(
        "px-3 py-2 text-sm flex items-center gap-2 cursor-pointer select-none transition hover:bg-gray-50",
        tone === "danger" ? "text-red-600" : "text-gray-700"
      )}
      aria-label={label}
    >
      {icon ? (
        <span
          className={cx(
            "shrink-0",
            tone === "danger" ? "text-red-600" : "text-gray-500"
          )}
        >
          {icon}
        </span>
      ) : null}
      <span className="min-w-0">{label}</span>
    </div>
  );
};

const Divider: React.FC = () => <div className="border-t" />;

DropDownMenu.Item = Item;
DropDownMenu.Divider = Divider;

export default DropDownMenu;
