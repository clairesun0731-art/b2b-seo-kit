"use client";

import { useState } from "react";

type CopyResultButtonProps = {
  text: string;
};

export default function CopyResultButton({ text }: CopyResultButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const didCopy = document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopied(didCopy);
      if (didCopy) {
        window.setTimeout(() => setCopied(false), 1800);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={copyResult}
      className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
    >
      {copied ? "Copied" : "Copy Result"}
    </button>
  );
}
