import React, { useEffect, useRef } from "react";

/**
 * The atmospheric scene is decorative. All interactions stay available
 * when reduced motion is enabled or JavaScript/browser observers are absent.
 */
const starCoordinates = [
  [7,12],[15,61],[22,35],[31,77],[40,15],[46,48],[54,7],[62,69],
  [71,32],[78,84],[87,19],[94,56],[11,89],[27,8],[36,56],[57,92],
  [69,9],[84,49],[96,89],[4,45],[19,21],[48,83],[73,59],[91,7],
];

export function MotionSystem() {
  const progress = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    let observer;
    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.09, rootMargin: "0px 0px 20px 0px" });
      elements.forEach((element) => observer.observe(element));
      root.classList.add("motion-enabled");
    }

    let frame = 0;
    const paint = () => {
      frame = 0;
      const length = Math.max(1, root.scrollHeight - window.innerHeight);
      const amount = Math.min(1, Math.max(0, window.scrollY / length));
      if (progress.current) progress.current.style.transform = "scaleX(" + amount + ")";
    };
    const schedulePaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint);
    schedulePaint();

    let cursorFrame = 0;
    const handlePointer = (event) => {
      if (reduced || event.pointerType === "touch" || cursorFrame) return;
      cursorFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", event.clientX + "px");
        root.style.setProperty("--cursor-y", event.clientY + "px");
        cursorFrame = 0;
      });
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      observer?.disconnect();
      root.classList.remove("motion-enabled");
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      window.removeEventListener("pointermove", handlePointer);
      if (frame) window.cancelAnimationFrame(frame);
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true"><span ref={progress} /></div>;
}

export function TechAtmosphere() {
  return (
    <div className="tech-atmosphere" aria-hidden="true">
      <div className="tech-grid" />
      <div className="tech-scan" />
      <div className="tech-aura tech-aura-a" />
      <div className="tech-aura tech-aura-b" />
      <div className="tech-cursor-glow" />
      <div className="tech-stars">
        {starCoordinates.map(([x, y], index) => (
          <i key={index} style={{ left: x + "%", top: y + "%", "--twinkle-delay": (index % 9) * -.43 + "s" }} />
        ))}
      </div>
    </div>
  );
}

const topics = ["INTERACTIVE EXPERIENCES","FRONTEND ENGINEERING","API INTEGRATIONS","DATA + AUTOMATION","REACT / PYTHON","DESIGN SYSTEMS"];

export function SignalStrip() {
  return (
    <div className="signal-strip" aria-label="Areas of work">
      <div className="signal-strip-heading"><span className="live-indicator" /> CURRENT FOCUS <span className="signal-arrow">↗</span></div>
      <div className="signal-window">
        <div className="signal-track">
          {[...topics, ...topics].map((topic,index) =>
            <span className="signal-item" key={index}><i aria-hidden="true" />{topic}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function SignalDiagram() {
  return (
    <div className="signal-diagram" aria-hidden="true">
      <svg viewBox="0 0 400 200" role="presentation" focusable="false">
        <defs>
          <linearGradient id="signal-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#535dff" stopOpacity=".28" />
            <stop offset=".55" stopColor="#55dfff" stopOpacity=".9" />
            <stop offset="1" stopColor="#535dff" stopOpacity=".35" />
          </linearGradient>
        </defs>
        <path className="signal-path" d="M16 155 L90 104 L159 136 L225 49 L305 98 L382 25" fill="none" stroke="url(#signal-line)" strokeWidth="2" />
        <path className="signal-path signal-path-secondary" d="M16 120 L105 151 L200 86 L274 136 L382 96" fill="none" stroke="#708aff" strokeOpacity=".42" strokeWidth="1" />
        {[ [16,155],[90,104],[159,136],[225,49],[305,98],[382,25] ].map(([x,y],i) =>
          <g key={i}><circle cx={x} cy={y} r="11" fill="#50dfff" opacity=".09" />
            <circle cx={x} cy={y} r="3.5" fill="#70e7ff" /></g>
        )}
      </svg>
      <span className="diagram-label diagram-label-a">01 / IDEATE</span>
      <span className="diagram-label diagram-label-b">02 / DEVELOP</span>
      <span className="diagram-label diagram-label-c">03 / SHIP</span>
    </div>
  );
}
