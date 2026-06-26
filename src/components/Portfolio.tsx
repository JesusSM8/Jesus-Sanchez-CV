import {
  createElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import {
  accents,
  education,
  projects,
  timelineOrder,
  timelineShort,
  timelineYear,
  tools,
  uiPrototypes,
  type Accent,
  type GalleryItem,
  type Outcome,
  type Project,
} from "../data/content";

const MONO = "'JetBrains Mono', monospace";
const SANS = "'Space Grotesk', sans-serif";
const RAINBOW = "linear-gradient(90deg,#ff66a8,#ffd24d,#5be7a0,#4cb8ff,#b173ff)";

type ViewState = number | "about" | null;

/* ---- small hover helper: inline-style base + hover merge ---- */
type HoverBoxProps = HTMLAttributes<HTMLElement> & {
  base: CSSProperties;
  hover?: CSSProperties;
  as?: "div" | "a" | "span";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  children?: ReactNode;
};
function HoverBox({ base, hover, as = "div", children, ...rest }: HoverBoxProps) {
  const [h, setH] = useState(false);
  return createElement(
    as,
    {
      ...rest,
      style: { ...base, ...(h && hover ? hover : {}) },
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
    },
    children,
  );
}

/* ---- image slot: real image when src given, styled placeholder otherwise ---- */
function ImageSlot({
  src,
  alt,
  radius = 6,
  A,
}: {
  src?: string;
  alt: string;
  radius?: number;
  A: Accent;
}) {
  if (src) {
    return (
      <div style={{ width: "100%", height: "100%", borderRadius: radius, overflow: "hidden" }}>
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }
  const stripe =
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 8px, rgba(255,255,255,0) 8px 18px)";
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 12,
        boxSizing: "border-box",
        backgroundColor: A.soft,
        backgroundImage: stripe,
        border: `1px solid ${A.line}`,
        borderRadius: radius,
        color: "rgba(255,255,255,0.5)",
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {alt}
    </div>
  );
}

function SectionLabel({ text, color = RAINBOW }: { text: string; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, margin: "46px 0 16px" }}>
      <span style={{ width: 22, height: 3, borderRadius: 2, background: color }} />
      <span
        style={{
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        {text}
      </span>
    </div>
  );
}

const CARD: CSSProperties = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 13,
};

function Hero({ src, alt, A }: { src: string; alt: string; A: Accent }) {
  return (
    <div
      style={{
        height: 300,
        borderRadius: 12,
        overflow: "hidden",
        border: `1px solid ${A.line}`,
        background: "rgba(255,255,255,0.03)",
        marginBottom: 8,
      }}
    >
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
}

function WhatIDid({ items, A, label = "What I did" }: { items: string[]; A: Accent; label?: string }) {
  if (!items.length) return null;
  return (
    <>
      <SectionLabel text={label} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 30px" }}>
        {items.map((t) => (
          <div key={t} style={{ display: "flex", gap: 11, fontSize: 13.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>
            <span style={{ color: A.accent, flexShrink: 0 }}>→</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* masonry gallery — keeps full screenshots uncropped across mixed aspect ratios */
function Gallery({ items, A, label = "Featured work" }: { items: GalleryItem[]; A: Accent; label?: string }) {
  if (!items.length) return null;
  return (
    <>
      <SectionLabel text={label} />
      <div style={{ columnWidth: 230, columnGap: 14 }}>
        {items.map((it) => (
          <figure key={it.src} style={{ margin: "0 0 14px", breakInside: "avoid", display: "inline-block", width: "100%" }}>
            <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${A.line}`, background: "rgba(255,255,255,0.03)" }}>
              <img src={it.src} alt={it.caption} loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <figcaption style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.45)", margin: "9px 0 0" }}>
              {it.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

function Outcomes({ items, A, label = "Outcomes" }: { items: Outcome[]; A: Accent; label?: string }) {
  if (!items.length) return null;
  return (
    <>
      <SectionLabel text={label} color={A.accent} />
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 14 }}>
        {items.map((o) => (
          <div key={o.t} style={{ ...CARD, borderRadius: 12, padding: 18 }}>
            <p style={{ fontWeight: 600, color: "#fff", fontSize: 15, margin: "0 0 7px" }}>{o.t}</p>
            <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.55, margin: 0 }}>{o.d}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<ViewState>(null);
  const [entered, setEntered] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  const isProj = typeof active === "number";
  const isOverview = active === null;
  const isAbout = active === "about";
  const activeProject: Project | null = isProj ? projects[active as number] : null;

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const goAbout = () => setActive("about");

  /* re-trigger the enter animation + reset scroll on every view change */
  useEffect(() => {
    setEntered(false);
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setEntered(true));
    });
    const t = setTimeout(() => setEntered(true), 90);
    if (mainRef.current) mainRef.current.scrollTop = 0;
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t);
    };
  }, [active]);

  /* keyboard: Esc closes, arrows cycle projects */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((s) => (typeof s === "number" ? (s + 1) % projects.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((s) =>
          typeof s === "number"
            ? (s + projects.length - 1) % projects.length
            : projects.length - 1,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* starfield — seeded so it never shifts between renders */
  const { starA, starB } = useMemo(() => {
    let seed = 1337;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const mk = (n: number, minA: number, maxA: number) => {
      const a: string[] = [];
      for (let k = 0; k < n; k++) {
        a.push(
          `${Math.round(rnd() * 1920)}px ${Math.round(rnd() * 1080)}px 0 0 rgba(255,255,255,${(
            minA +
            rnd() * (maxA - minA)
          ).toFixed(2)})`,
        );
      }
      return a.join(", ");
    };
    return { starA: mk(80, 0.07, 0.28), starB: mk(22, 0.4, 0.7) };
  }, []);

  const ov: Accent = {
    accent: "oklch(0.86 0.04 75)",
    line: "oklch(0.86 0.04 75 / 0.4)",
    soft: "oklch(0.86 0.04 75 / 0.12)",
    themeBg: "transparent",
  };
  const A: Accent = activeProject ? accents(activeProject.hue) : ov;

  const timeline = timelineOrder.map((id) => ({
    id,
    short: timelineShort[id],
    year: timelineYear[id],
    index: projects.findIndex((p) => p.id === id),
  }));
  const workIdx = activeProject ? timelineOrder.indexOf(activeProject.id) : 0;

  /* ----- derived styles ----- */
  const themeLayerStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    background: A.themeBg,
    opacity: isProj ? 1 : 0,
    transition: "opacity .65s ease",
  };
  const stageWrapStyle: CSSProperties = {
    padding: "40px 64px 70px",
    boxSizing: "border-box",
    minHeight: "100%",
    opacity: entered ? 1 : 0,
    transform: entered ? "translate(0,0)" : isProj ? "translateX(36px)" : "translateY(16px)",
    transition: "opacity .5s ease, transform .55s cubic-bezier(.5,0,.2,1)",
  };
  const workPillStyle: CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 50,
    transform: `translateY(${workIdx * 50}px)`,
    background: isProj ? A.soft : "transparent",
    borderLeft: `2px solid ${isProj ? A.accent : "transparent"}`,
    borderRadius: 9,
    opacity: isProj ? 1 : 0,
    transition:
      "transform .3s cubic-bezier(.5,0,.2,1), opacity .25s ease, background .3s, border-color .3s",
    zIndex: 0,
    pointerEvents: "none",
  };
  const navItem: CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 11,
    cursor: "pointer",
    padding: "11px 12px",
    borderRadius: 9,
  };
  const tagStyle: CSSProperties = {
    fontFamily: MONO,
    fontSize: 11,
    padding: "6px 11px",
    borderRadius: 2,
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.6)",
  };
  const kickerStyle: CSSProperties = {
    fontFamily: MONO,
    fontSize: 12,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: A.accent,
    textAlign: "center",
  };
  const ruleStyle: CSSProperties = {
    width: 56,
    height: 3,
    borderRadius: 2,
    background: A.accent,
    margin: "22px auto 24px",
  };
  const stickyStyle: CSSProperties = {
    background: A.soft,
    border: `1px solid ${A.line}`,
    borderRadius: 3,
    padding: 18,
    minWidth: 160,
  };
  const watermarkStyle: CSSProperties = {
    position: "absolute",
    top: -26,
    right: 0,
    fontFamily: SANS,
    fontSize: 120,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.045em",
    color: A.accent,
    opacity: 0.08,
    pointerEvents: "none",
    whiteSpace: "nowrap",
    zIndex: 0,
    textTransform: "uppercase",
  };
  const card: CSSProperties = {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 13,
  };

  const pillBase: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: MONO,
    fontSize: 12,
    textDecoration: "none",
    color: "#fff",
    padding: "12px 20px",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 999,
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        background:
          "radial-gradient(135% 110% at 20% 0%, #11131b 0%, #0a0b10 48%, #06070a 100%)",
        color: "#ECECEE",
        fontFamily: SANS,
      }}
    >
      <div style={themeLayerStyle} />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
          boxShadow: starA,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 2,
          height: 2,
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
          boxShadow: starB,
          animation: "twinkle 5s ease-in-out infinite",
        }}
      />

      {/* drifting orbs */}
      <div
        style={{
          position: "absolute",
          top: "-12%",
          left: "-8%",
          width: "46vw",
          height: "46vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.55 0.20 300 / 0.30), transparent 65%)",
          filter: "blur(62px)",
          zIndex: 0,
          pointerEvents: "none",
          animation: "drift1 19s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-16%",
          right: "-10%",
          width: "52vw",
          height: "52vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.62 0.18 35 / 0.26), transparent 66%)",
          filter: "blur(72px)",
          zIndex: 0,
          pointerEvents: "none",
          animation: "drift2 24s ease-in-out infinite",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          width: "100%",
          maxWidth: 1200,
          height: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ============ LEFT RAIL ============ */}
        <aside
          className="zoom108"
          style={{
            order: 1,
            flex: "0 0 196px",
            minWidth: 0,
            height: "100%",
            overflow: "hidden",
            position: "relative",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            onClick={close}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              padding: "30px 24px 22px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "#15161c url('/images/jesus.webp') no-repeat",
                backgroundSize: "218%",
                backgroundPosition: "60% 24%",
              }}
            />
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Jesús Sánchez
              </p>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: 9.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  margin: "3px 0 0",
                }}
              >
                Product Designer · BCN
              </p>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              width: "100%",
              padding: "14px 0 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <HoverBox
              onClick={close}
              base={navItem}
              hover={{ background: "rgba(255,255,255,0.04)" }}
            >
              {isOverview && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.06)",
                    borderLeft: "2px solid oklch(0.86 0.10 60)",
                    borderRadius: 9,
                    zIndex: 0,
                  }}
                />
              )}
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.45)",
                  flexShrink: 0,
                  marginLeft: 4,
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: SANS,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Home
              </span>
            </HoverBox>

            <HoverBox
              onClick={goAbout}
              base={{ ...navItem, marginTop: 4 }}
              hover={{ background: "rgba(255,255,255,0.04)" }}
            >
              {isAbout && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.06)",
                    borderLeft: "2px solid oklch(0.86 0.10 60)",
                    borderRadius: 9,
                    zIndex: 0,
                  }}
                />
              )}
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  flexShrink: 0,
                  marginLeft: 4,
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: SANS,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                About me
              </span>
            </HoverBox>

            <p
              style={{
                fontFamily: MONO,
                fontSize: 9.5,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.38)",
                margin: "20px 0 8px",
                padding: "0 12px",
              }}
            >
              Where I've worked
            </p>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: 18,
                  top: 12,
                  bottom: 12,
                  width: 1.5,
                  background: "rgba(255,255,255,0.1)",
                }}
              />
              <div style={workPillStyle} />
              {timeline.map((n) => (
                <HoverBox
                  key={n.id}
                  onClick={() => open(n.index)}
                  base={{
                    position: "relative",
                    zIndex: 1,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                    cursor: "pointer",
                    padding: "0 12px",
                  }}
                  hover={{ background: "rgba(255,255,255,0.03)", borderRadius: 9 }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      flexShrink: 0,
                      marginLeft: 2,
                      background: "rgba(255,255,255,0.4)",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: SANS,
                        fontWeight: 600,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.85)",
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {n.short}
                    </p>
                    <p
                      style={{
                        fontFamily: MONO,
                        fontSize: 9,
                        color: "rgba(255,255,255,0.4)",
                        margin: "1px 0 0",
                      }}
                    >
                      {n.year}
                    </p>
                  </div>
                </HoverBox>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 22, padding: "0 16px" }}>
              <HoverBox
                as="a"
                href="https://linkedin.com/in/jes8"
                target="_blank"
                rel="noopener"
                base={{ ...pillBase, fontSize: 11, padding: "10px 18px" }}
                hover={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                Connect on LinkedIn
              </HoverBox>
            </div>
          </div>
        </aside>

        {/* ============ STAGE ============ */}
        <main
          ref={mainRef}
          style={{
            order: 2,
            flex: "1 1 0",
            minWidth: 0,
            maxWidth: 880,
            height: "100%",
            overflowY: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="zoom108" style={stageWrapStyle}>
            {/* ---------- OVERVIEW ---------- */}
            {isOverview && (
              <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
                <div style={{ textAlign: "center", position: "relative", padding: "6px 0 0" }}>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "oklch(0.86 0.10 60)",
                      marginBottom: 12,
                    }}
                  >
                    Product Designer · Barcelona
                  </div>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 20,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.66)",
                      margin: "0 0 2px",
                    }}
                  >
                    Hi, I'm 👋
                  </p>
                  <h1
                    style={{
                      fontFamily: SANS,
                      fontSize: 74,
                      fontWeight: 700,
                      letterSpacing: "-0.035em",
                      lineHeight: 0.98,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    Jesús Sánchez
                  </h1>
                  <p
                    style={{
                      fontSize: 17,
                      color: "rgba(255,255,255,0.66)",
                      margin: "16px auto 0",
                      lineHeight: 1.55,
                      maxWidth: 600,
                    }}
                  >
                    I turn complex problems into simple products — from illustration to mobile games
                    played by <span style={{ color: "#fff", fontWeight: 600 }}>100M+ players</span>,
                    based in Barcelona.
                  </p>

                  <div style={{ position: "relative", width: "min(640px,100%)", height: 470, margin: "6px auto 0" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "52%",
                        width: 420,
                        height: 420,
                        transform: "translate(-50%,-50%)",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, oklch(0.62 0.19 300 / 0.55), oklch(0.65 0.20 35 / 0.20) 46%, transparent 70%)",
                        filter: "blur(34px)",
                        animation: "pulseGlow 7s ease-in-out infinite",
                      }}
                    />
                    <img
                      src="/images/jesus.webp"
                      alt="Jesús Sánchez"
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "54%",
                        transform: "translate(-50%,-50%)",
                        width: 330,
                        height: "auto",
                        zIndex: 2,
                        filter: "drop-shadow(0 26px 52px rgba(0,0,0,0.45))",
                        WebkitMaskImage:
                          "radial-gradient(circle closest-side at 50% 47%, #000 60%, rgba(0,0,0,0.45) 85%, transparent 100%)",
                        maskImage:
                          "radial-gradient(circle closest-side at 50% 47%, #000 60%, rgba(0,0,0,0.45) 85%, transparent 100%)",
                      }}
                    />
                    {[
                      { label: "Product Strategy", hue: 300, style: { left: 18, top: 58 }, delay: "0s", dur: "5.2s" },
                      { label: "User Research", hue: 35, style: { right: 6, top: 36 }, delay: ".5s", dur: "6s" },
                      { label: "Design Systems", hue: 200, style: { left: -4, top: 222 }, delay: "1s", dur: "5.6s" },
                      { label: "Prototyping & Testing", hue: 150, style: { right: -8, top: 202 }, delay: ".3s", dur: "6.4s" },
                      { label: "Data & A/B Testing", hue: 85, style: { left: 50, bottom: 42 }, delay: ".8s", dur: "5s" },
                      { label: "UI & Illustration", hue: 330, style: { right: 44, bottom: 18 }, delay: "1.3s", dur: "5.8s" },
                    ].map((pill) => (
                      <div
                        key={pill.label}
                        style={{
                          position: "absolute",
                          ...pill.style,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "9px 14px",
                          borderRadius: 999,
                          background: "rgba(18,16,26,0.74)",
                          backdropFilter: "blur(6px)",
                          border: "1px solid rgba(255,255,255,0.16)",
                          boxShadow: `0 0 24px oklch(0.7 0.2 ${pill.hue} / 0.5)`,
                          fontFamily: MONO,
                          fontSize: 11,
                          color: "#fff",
                          whiteSpace: "nowrap",
                          zIndex: 4,
                          animation: `floaty ${pill.dur} ease-in-out infinite`,
                          animationDelay: pill.delay,
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: `oklch(0.74 0.2 ${pill.hue})`,
                            boxShadow: `0 0 10px oklch(0.74 0.2 ${pill.hue})`,
                          }}
                        />
                        {pill.label}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 560, margin: "4px auto 0" }}>
                    {[
                      { big: "10", suffix: "+", label: "Years designing" },
                      { big: "100M", suffix: "+", label: "Players reached" },
                      { big: "Rovio", suffix: "", label: "Currently at" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        style={{
                          flex: 1,
                          border: "1px solid rgba(255,255,255,0.1)",
                          background: "rgba(255,255,255,0.025)",
                          borderRadius: 12,
                          padding: "14px 14px",
                        }}
                      >
                        <p style={{ fontFamily: SANS, fontSize: 24, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
                          {s.big}
                          {s.suffix && <span style={{ color: "oklch(0.86 0.10 60)" }}>{s.suffix}</span>}
                        </p>
                        <p style={{ fontFamily: MONO, fontSize: 9.5, color: "rgba(255,255,255,0.5)", margin: "5px 0 0" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 11, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <HoverBox
                      as="a"
                      href="https://linkedin.com/in/jes8"
                      target="_blank"
                      rel="noopener"
                      base={pillBase}
                      hover={{ borderColor: "rgba(255,255,255,0.5)" }}
                    >
                      Connect on LinkedIn
                    </HoverBox>
                    <div
                      onClick={() => open(0)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer",
                        fontFamily: MONO,
                        fontSize: 12,
                        color: "#06070a",
                        background: "#fff",
                        padding: "12px 22px",
                        borderRadius: 999,
                        fontWeight: 600,
                      }}
                    >
                      View latest work →
                    </div>
                    <HoverBox
                      as="a"
                      href="/Jesus_Sanchez_CV.pdf"
                      target="_blank"
                      rel="noopener"
                      base={{ fontFamily: MONO, fontSize: 12, textDecoration: "none", color: "rgba(255,255,255,0.5)", marginLeft: 2 }}
                      hover={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      Resume ↓
                    </HoverBox>
                  </div>
                </div>
              </div>
            )}

            {/* ---------- ABOUT ---------- */}
            {isAbout && (
              <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "oklch(0.86 0.10 60)",
                      marginBottom: 12,
                    }}
                  >
                    About me
                  </div>
                  <h2 style={{ fontFamily: SANS, fontSize: 42, fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: 0 }}>
                    A bit more about me
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.68)", maxWidth: 640, margin: "18px auto 0" }}>
                    A Product Designer who turns complex problems into simple, enjoyable experiences.
                    My background runs from analysis to development — I love getting my hands dirty to
                    build products people genuinely want to use. My work on games like Angry Birds 2
                    taught me to ship features that aren't just fun, they drive results.
                  </p>
                  <div style={{ display: "flex", gap: 12, justifyContent: "center", margin: "24px 0 0" }}>
                    {[
                      { href: "https://www.linkedin.com/in/jes8/", label: "in", size: 12, weight: 400 },
                      { href: "https://www.behance.net/jes8", label: "Bē", size: 12, weight: 600 },
                      { href: "mailto:hi@jesus-sanchez.com", label: "✉", size: 15, weight: 400 },
                    ].map((s) => (
                      <HoverBox
                        key={s.href}
                        as="a"
                        href={s.href}
                        target={s.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener"
                        base={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: MONO,
                          fontSize: s.size,
                          fontWeight: s.weight,
                        }}
                        hover={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
                      >
                        {s.label}
                      </HoverBox>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "46px 0 16px" }}>
                  <span style={{ width: 24, height: 3, borderRadius: 2, background: RAINBOW }} />
                  <span style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                    How I work
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 13 }}>
                  {[
                    { n: "01", t: "Understand", d: "Dig into the data, talk to users, learn the real constraints." },
                    { n: "02", t: "Define", d: "Frame the actual problem worth solving." },
                    { n: "03", t: "Design", d: "Prototype, test and iterate — fast." },
                    { n: "04", t: "Ship & learn", d: "Measure, A/B test and refine in the wild." },
                  ].map((step) => (
                    <div key={step.n} style={{ ...card, borderRadius: 13, padding: "16px 17px" }}>
                      <span style={{ fontFamily: MONO, fontSize: 10.5, color: "oklch(0.86 0.10 60)", letterSpacing: "0.1em" }}>{step.n}</span>
                      <p style={{ fontWeight: 600, color: "#fff", fontSize: 14.5, margin: "8px 0 5px" }}>{step.t}</p>
                      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12.5, lineHeight: 1.5, margin: 0 }}>{step.d}</p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 48,
                    marginTop: 46,
                    paddingTop: 36,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div>
                    <h3 style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
                      Tools
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                      {tools.map((tl) => (
                        <div key={tl.category} style={{ display: "flex", gap: 12, fontSize: 13 }}>
                          <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.82)", width: 132, flexShrink: 0 }}>{tl.category}</span>
                          <span style={{ color: "rgba(255,255,255,0.52)" }}>{tl.items}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
                      Education
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                      {education.map((ed) => (
                        <div key={ed.title}>
                          <p style={{ fontWeight: 600, color: "#fff", margin: 0, fontSize: 13.5 }}>{ed.title}</p>
                          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12.5, margin: "2px 0 0" }}>{ed.institution}</p>
                          <p style={{ fontFamily: MONO, color: "rgba(255,255,255,0.36)", fontSize: 11, margin: "3px 0 0" }}>{ed.period}</p>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontFamily: MONO, fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "24px 0 0" }}>
                      Spanish &amp; Basque native · English fluent
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ---------- PROJECT ---------- */}
            {isProj && activeProject && (
              <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
                <div style={watermarkStyle}>{activeProject.company}</div>
                <div style={kickerStyle}>
                  {activeProject.role} · {activeProject.period}
                </div>
                <h2
                  style={{
                    fontFamily: SANS,
                    fontSize: 46,
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.04,
                    color: "#fff",
                    margin: "14px auto 0",
                    textAlign: "center",
                  }}
                >
                  {activeProject.title}
                </h2>
                <div style={ruleStyle} />
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.74)", maxWidth: 600, margin: "0 auto 26px", textAlign: "center" }}>
                  {activeProject.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
                  {activeProject.tags.map((t) => (
                    <span key={t} style={tagStyle}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* ============ PROCESS signature (Service Design) ============ */}
                {activeProject.signature === "process" && (
                  <>
                    <div style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 14 }}>
                      <figure style={{ margin: 0 }}>
                        <div style={{ borderRadius: 9, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "3 / 2" }}>
                          <img src="/images/service-client.jpg" alt="Queen Mary University of London" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                        <figcaption style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.45)", margin: "10px 0 0" }}>
                          Queen Mary University of London — the client
                        </figcaption>
                      </figure>
                      <figure style={{ margin: 0 }}>
                        <div style={{ borderRadius: 9, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "3 / 2" }}>
                          <img src="/images/service-workshop.jpg" alt="Service Design course" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                        <figcaption style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.45)", margin: "10px 0 0" }}>
                          The course, at ExperienceHaus
                        </figcaption>
                      </figure>
                    </div>

                    <div style={{ margin: "30px 0 0", padding: "20px 22px", borderLeft: "2px solid oklch(0.80 0.16 350)", background: "oklch(0.80 0.16 350 / 0.07)", borderRadius: "0 8px 8px 0" }}>
                      <p style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(0.80 0.16 350)", margin: "0 0 9px" }}>
                        The Brief
                      </p>
                      <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: 0 }}>
                        QMUL's Enterprise team runs QHack, QIncubator and QResearcher — programs that
                        nurture entrepreneurs at every stage. The question: grow their reach and impact
                        without growing the team.
                      </p>
                    </div>

                    <SectionLabel text="The Process — Double Diamond" color="oklch(0.80 0.16 350)" />
                    <div style={{ background: "#eef0f5", borderRadius: 11, padding: "26px 30px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <img src="/images/double-diamond.png" alt="Double diamond: Discover, Define, Develop, Deliver" style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>
                    <p style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.45)", margin: "11px 0 0" }}>
                      Discover → Define → Develop → Deliver — diverge to understand, converge to decide.
                    </p>

                    <SectionLabel text="Challenges We Tackled" color="oklch(0.80 0.16 350)" />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 30px" }}>
                      {[
                        "Scale program reach without growing the team",
                        "Boost engagement with current students",
                        "Re-engage and retain alumni",
                        "Connect with underrepresented groups",
                        "Bridge researchers and entrepreneurial students",
                        "Build trust around IP & idea ownership",
                        "Attract international students post Start-up Visa",
                        "Compete with slicker external platforms",
                      ].map((c) => (
                        <div key={c} style={{ display: "flex", gap: 11, fontSize: 13.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>
                          <span style={{ color: "oklch(0.80 0.16 350)", flexShrink: 0 }}>—</span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>

                    <SectionLabel text="Our Approach" color="oklch(0.80 0.16 350)" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(155px,1fr))", gap: 11 }}>
                      {[
                        "Research wall",
                        "Service mapping",
                        "Stakeholder interviews",
                        "User personas",
                        "Journey maps",
                        "Wireframes",
                        "Final presentation",
                      ].map((t, i) => (
                        <div key={t} style={{ ...card, borderRadius: 10, padding: "14px 15px" }}>
                          <span style={{ fontFamily: MONO, fontSize: 10.5, color: "oklch(0.80 0.16 350)", letterSpacing: "0.1em" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p style={{ fontWeight: 600, color: "#fff", fontSize: 13.5, margin: "8px 0 0" }}>{t}</p>
                        </div>
                      ))}
                    </div>

                    <Gallery items={activeProject.gallery} A={A} label="From the project" />

                    <SectionLabel text="Outcomes" color="oklch(0.80 0.16 350)" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                      {[
                        { t: "Deep insight", d: "A clear read on what the entrepreneurial community actually needs." },
                        { t: "Strategies to scale", d: "Actionable moves for reach, engagement and inclusivity." },
                        { t: "Tangible prototypes", d: "Wireframes and journey maps that made the ideas real." },
                      ].map((o) => (
                        <div key={o.t} style={{ ...card, borderRadius: 12, padding: 18 }}>
                          <p style={{ fontWeight: 600, color: "#fff", fontSize: 15, margin: "0 0 7px" }}>{o.t}</p>
                          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.55, margin: 0 }}>{o.d}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ============ PLANET signature (Project Planet) ============ */}
                {activeProject.signature === "planet" && (
                  <>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 9,
                        padding: "7px 13px",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.03)",
                        marginBottom: 34,
                      }}
                    >
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5be7a0", boxShadow: "0 0 10px #5be7a0", animation: "twinkle 2.2s ease-in-out infinite" }} />
                      <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                        In development · Unity · iOS &amp; Android
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 9, margin: "0 0 7px" }}>
                      <span style={{ width: 22, height: 3, borderRadius: 2, background: RAINBOW }} />
                      <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                        Procedurally Generated Worlds
                      </span>
                    </div>
                    <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", margin: "0 0 22px", maxWidth: 560, lineHeight: 1.55 }}>
                      Every planet's terrain, palette and personality is generated from its emotional
                      state — no two playthroughs ever look alike.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1fr 0.78fr", gap: 18, alignItems: "center" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {[
                          { name: "Calm", sub: "Quiet the noise", pct: 82, c: "oklch(0.74 0.14 210)" },
                          { name: "Trust", sub: "Build belief", pct: 64, c: "oklch(0.62 0.19 300)" },
                          { name: "Hope", sub: "Look ahead", pct: 90, c: "oklch(0.70 0.20 350)" },
                        ].map((em) => (
                          <div key={em.name} style={{ ...card, borderRadius: 13, padding: "14px 15px", display: "flex", flexDirection: "column", gap: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                              <span style={{ width: 11, height: 11, borderRadius: "50%", background: em.c, boxShadow: `0 0 12px ${em.c}` }} />
                              <span style={{ fontWeight: 600, fontSize: 15, color: "#fff" }}>{em.name}</span>
                            </div>
                            <p style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.5)", margin: 0 }}>{em.sub}</p>
                            <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                              <div style={{ width: `${em.pct}%`, height: "100%", borderRadius: 3, background: em.c }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ position: "relative", justifySelf: "center" }}>
                        <div
                          style={{
                            position: "absolute",
                            inset: "-14% -10%",
                            background: "radial-gradient(circle at 50% 42%, rgba(110,190,255,0.4), rgba(150,90,255,0.16) 55%, transparent 72%)",
                            filter: "blur(22px)",
                            zIndex: 0,
                          }}
                        />
                        <div style={{ position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.16)", boxShadow: "0 26px 70px -22px rgba(90,160,255,0.55)" }}>
                          <img src="/images/planet.png" alt="Project Planet — high harmony" style={{ display: "block", width: "100%", height: "auto" }} />
                        </div>
                        <p style={{ fontFamily: MONO, fontSize: 11, color: "rgba(255,255,255,0.6)", textAlign: "center", margin: "14px 0 0" }}>
                          Peak harmony — calm, trust &amp; hope balanced
                        </p>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                        {[
                          { src: "/images/papachu3.png", cap: "Hopeful & warm", shadow: "0 16px 40px -18px rgba(255,80,160,0.5)" },
                          { src: "/images/papachu2.png", cap: "Calm & grounded", shadow: "0 16px 40px -18px rgba(80,230,160,0.45)" },
                        ].map((v) => (
                          <div key={v.cap}>
                            <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: v.shadow }}>
                              <img src={v.src} alt={`Project Planet — ${v.cap}`} style={{ display: "block", width: "100%", height: "auto" }} />
                            </div>
                            <p style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.5)", textAlign: "center", margin: "9px 0 0" }}>{v.cap}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <SectionLabel text="How It Plays" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                      {[
                        { n: "01", t: "Nurture by playing", d: "Minigames feed your planet's calm, trust and hope. Keep them balanced and it thrives." },
                        { n: "02", t: "Earn harmony", d: "Harmony points unlock emotional chapters built around real-life challenges and decisions." },
                        { n: "03", t: "Always different", d: "Procedural generation gives every world its own terrain, palette and mood. Endlessly replayable." },
                      ].map((s) => (
                        <div key={s.n} style={{ ...card, padding: "18px 18px 20px" }}>
                          <span style={{ fontFamily: MONO, fontSize: 11, color: "oklch(0.82 0.16 150)", letterSpacing: "0.12em" }}>{s.n}</span>
                          <p style={{ fontWeight: 600, color: "#fff", fontSize: 15.5, margin: "10px 0 6px" }}>{s.t}</p>
                          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.55, margin: 0 }}>{s.d}</p>
                        </div>
                      ))}
                    </div>

                    <WhatIDid items={activeProject.did} A={A} />
                    <Gallery items={activeProject.gallery} A={A} />
                  </>
                )}

                {/* ============ UI DESIGN gallery ============ */}
                {activeProject.id === "ui-design" && (
                  <>
                    <SectionLabel text="Five Prototypes" color="oklch(0.80 0.16 95)" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 16 }}>
                      {uiPrototypes.map((proto) => (
                        <div key={proto.t} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column" }}>
                          <div style={{ aspectRatio: "16 / 10" }}>
                            <ImageSlot src={proto.src} alt={`${proto.t} — Figma`} radius={0} A={A} />
                          </div>
                          <div style={{ padding: "16px 17px 18px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
                            <div>
                              <p style={{ fontWeight: 600, fontSize: 16.5, color: "#fff", margin: "0 0 3px", letterSpacing: "-0.01em" }}>{proto.t}</p>
                              <p style={{ fontFamily: MONO, fontSize: 10.5, color: "oklch(0.80 0.16 95)", margin: 0 }}>{proto.s}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                              {proto.b.map((bullet) => (
                                <div key={bullet} style={{ display: "flex", gap: 9, fontSize: 12.5, color: "rgba(255,255,255,0.62)", lineHeight: 1.45 }}>
                                  <span style={{ color: "oklch(0.80 0.16 95)", flexShrink: 0 }}>·</span>
                                  <span>{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ============ GENERIC (everyone else) ============ */}
                {!activeProject.signature && activeProject.id !== "ui-design" && (
                  <>
                    {activeProject.hero && <Hero src={activeProject.hero} alt={activeProject.title} A={A} />}
                    <WhatIDid items={activeProject.did} A={A} />
                    <Gallery items={activeProject.gallery} A={A} />
                    {activeProject.outcomes && <Outcomes items={activeProject.outcomes} A={A} />}
                    {activeProject.notes && (
                      <>
                        <SectionLabel text="What it taught me" color={A.accent} />
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                          {activeProject.notes.map((n, i) => (
                            <div key={n} style={{ transform: `rotate(${[-3, 2, -2, 3][i % 4]}deg)` }}>
                              <div style={stickyStyle}>
                                <p style={{ margin: 0, color: "#fff", fontWeight: 600, fontSize: 14 }}>{n}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {activeProject.copyright && (
                      <p style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.32)", margin: "44px 0 0", textAlign: "center" }}>
                        {activeProject.copyright}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
