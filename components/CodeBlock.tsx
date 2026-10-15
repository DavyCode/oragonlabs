"use client";

import { useState, type ReactNode } from "react";

/* A dark code panel with a copy button. Highlighting is a deliberately small
   tokenizer (comments, strings, keywords, numbers, flags): enough to make the
   README snippets scannable without shipping a syntax-highlighting library. */

const PY_KEYWORDS =
  "from|import|def|return|if|else|elif|for|in|await|async|is|not|None|True|False|and|or|with|as|class|print";

const PATTERNS = {
  python: new RegExp(
    `(#[^\\n]*)|("""[\\s\\S]*?"""|"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')|\\b(${PY_KEYWORDS})\\b|\\b(\\d+(?:\\.\\d+)?)\\b`,
    "g",
  ),
  shell: /((?:^|(?<=\s))#[^\n]*)|("(?:[^"\\\n]|\\.)*"|'[^'\n]*')|(?<=^|\s)(--?[a-z][\w-]*)/gm,
};

function highlight(code: string, lang: keyof typeof PATTERNS): ReactNode[] {
  const out: ReactNode[] = [];
  const re = new RegExp(PATTERNS[lang]);
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const [text, comment, string, keyword, number] = m;
    const cls = comment
      ? "text-white/40"
      : string
        ? "text-[#a9a7ff]"
        : keyword
          ? lang === "shell"
            ? "text-white/55"
            : "font-semibold text-white"
          : number
            ? "text-[#a9a7ff]"
            : "";
    out.push(
      <span key={i++} className={cls}>
        {text}
      </span>,
    );
    last = m.index + text.length;
    if (text.length === 0) re.lastIndex++;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

export default function CodeBlock({
  code,
  lang = "python",
  label,
  output,
  className = "",
}: {
  code: string;
  lang?: "python" | "shell";
  label?: string;
  /** What running the code prints, shown under it and left out of the copy. */
  output?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard blocked (insecure origin, permissions): leave the text
         selectable rather than pretending it copied. */
    }
  };

  return (
    <div
      className={`min-w-0 border border-white/15 bg-near-black text-white ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/15 py-2 pl-5 pr-2">
        <span className="font-mono text-[11px] uppercase tracking-[1px] text-white/40">
          {label ?? (lang === "shell" ? "Terminal" : "Python")}
        </span>
        <button
          type="button"
          onClick={copy}
          className="min-h-9 px-3 font-mono text-[11px] uppercase tracking-[1px] text-white/55 transition-colors hover:text-white"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-[1.7] text-white/80">
        <code>{highlight(code, lang)}</code>
      </pre>
      {output && (
        <div className="border-t border-white/15">
          <p className="px-5 pt-4 font-mono text-[11px] uppercase tracking-[1px] text-white/40">
            Output
          </p>
          <pre className="overflow-x-auto px-5 pb-5 pt-2 font-mono text-[13px] leading-[1.7] text-[#a9a7ff]">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}

/** One-line install command, sized to sit beside a CTA. */
export function InstallLine({
  command,
  tone = "light",
}: {
  command: string;
  tone?: "light" | "dark";
}) {
  const [copied, setCopied] = useState(false);
  const dark = tone === "dark";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* see CodeBlock */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`group inline-flex min-h-[48px] max-w-full items-center gap-4 border px-5 font-mono text-[14px] transition-colors ${
        dark
          ? "border-white/25 text-white hover:border-white"
          : "border-ink bg-white text-ink hover:bg-plate"
      }`}
      aria-label={`Copy install command: ${command}`}
    >
      <span className={dark ? "text-white/40" : "text-grey"}>$</span>
      <span className="truncate">{command}</span>
      <span
        className={`ml-auto pl-2 text-[11px] uppercase tracking-[1px] ${
          dark ? "text-white/45" : "text-grey"
        }`}
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
