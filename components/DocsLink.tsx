"use client";

import type { MouseEvent, ReactNode } from "react";
import { DOCS_URL } from "@/lib/site";

/** Adds `?from=<this page>` to a docs link as it is followed, so the docs'
 *  "← Back" links return to the exact page the reader left (the console keeps
 *  it for the tab). Set at click time, not render time, so the server and
 *  client render the same href. */
export function addFrom(e: MouseEvent<HTMLAnchorElement>) {
  const a = e.currentTarget;
  const url = new URL(a.href);
  url.searchParams.set("from", window.location.href);
  a.href = url.toString();
}

export default function DocsLink({
  path = "",
  className,
  children,
}: {
  path?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`${DOCS_URL}${path}`}
      className={className}
      onClick={addFrom}
      onAuxClick={addFrom}
    >
      {children}
    </a>
  );
}
