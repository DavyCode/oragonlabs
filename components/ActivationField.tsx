"use client";

import { useEffect, useRef } from "react";

type Unit = { x: number; y: number; layer: number; idx: number; bias: number };
type Pulse = { pos: number; speed: number; seed: number };

/**
 * Hero backdrop: a layered lattice with activation waves travelling left to
 * right — a forward pass, rendered. Replaces the generic node-constellation:
 * this reads specifically as a model computing, not as abstract "connectivity".
 */
export default function ActivationField({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ink = tone === "dark" ? "255,255,255" : "23,23,23";

    let w = 0;
    let h = 0;
    let units: Unit[] = [];
    let layers = 0;
    let pulses: Pulse[] = [];
    let raf = 0;
    let t0 = 0;

    const build = () => {
      // Layer count scales with width so the lattice stays legible.
      layers = Math.max(6, Math.min(14, Math.round(w / 130)));
      const perLayer = Math.max(5, Math.min(11, Math.round(h / 95)));
      const padX = w * 0.06;
      const spanX = w - padX * 2;
      const padY = h * 0.12;
      const spanY = h - padY * 2;

      units = [];
      for (let l = 0; l < layers; l++) {
        // Layers vary in width, like a real architecture rather than a grid.
        const n = perLayer - (l % 3 === 1 ? 2 : 0);
        for (let i = 0; i < n; i++) {
          units.push({
            x: padX + (spanX * l) / (layers - 1),
            y: padY + (spanY * (i + 0.5)) / n,
            layer: l,
            idx: i,
            bias: Math.sin(l * 1.7 + i * 2.3) * 0.5 + 0.5,
          });
        }
      }

      pulses = [
        { pos: 0, speed: 0.00042, seed: 0.2 },
        { pos: -0.45, speed: 0.00031, seed: 1.9 },
        { pos: -0.8, speed: 0.00052, seed: 3.4 },
      ];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    /** How lit a given layer is, given all in-flight pulses. */
    const heat = (layer: number) => {
      const at = layer / (layers - 1);
      let m = 0;
      for (const p of pulses) {
        const d = Math.abs(at - p.pos);
        if (d < 0.22) m = Math.max(m, 1 - d / 0.22);
      }
      return m;
    };

    const draw = (t: number) => {
      if (!t0) t0 = t;
      const el = t - t0;
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        for (const p of pulses) {
          p.pos += p.speed * 16;
          if (p.pos > 1.5) p.pos = -0.5;
        }
      }

      // Connections between consecutive layers.
      for (let l = 0; l < layers - 1; l++) {
        const a = units.filter((u) => u.layer === l);
        const b = units.filter((u) => u.layer === l + 1);
        const lit = heat(l);
        for (const ua of a) {
          for (const ub of b) {
            // Sparse, deterministic wiring — not every pair.
            const keep = (ua.idx * 7 + ub.idx * 13 + l * 5) % 4;
            if (keep !== 0) continue;
            const base = 0.055;
            ctx.strokeStyle = `rgba(${ink},${base + lit * 0.42})`;
            ctx.lineWidth = lit > 0.55 ? 1.15 : 0.8;
            ctx.beginPath();
            ctx.moveTo(ua.x, ua.y);
            ctx.lineTo(ub.x, ub.y);
            ctx.stroke();
          }
        }
      }

      // Units.
      for (const u of units) {
        const lit = heat(u.layer);
        const shimmer = reduced
          ? 0
          : Math.sin(el / 1100 + u.bias * 6.28) * 0.12;
        const alpha = 0.16 + u.bias * 0.1 + lit * 0.75 + shimmer;
        const r = 1.7 + lit * 2.3;

        if (lit > 0.35) {
          ctx.fillStyle = `rgba(${ink},${lit * 0.1})`;
          ctx.beginPath();
          ctx.arc(u.x, u.y, r * 4.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${ink},${Math.max(0, Math.min(1, alpha))})`;
        ctx.beginPath();
        ctx.arc(u.x, u.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [tone]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
