import type { FC } from "react";
import type { ReactNode } from "react";

interface Logo {
  name: string;
  svg: ReactNode;
}

const logos: Logo[] = [
  {
    name: "Ford",
    svg: (
      <svg
        viewBox="0 0 80 32"
        className="h-7 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="40"
          cy="16"
          rx="38"
          ry="14"
          stroke="#003178"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="40"
          y="21"
          textAnchor="middle"
          fontFamily="'Times New Roman', serif"
          fontSize="14"
          fontStyle="italic"
          fontWeight="bold"
          fill="#003178"
        >
          Ford
        </text>
      </svg>
    ),
  },
  {
    name: "Coinbase",
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center">
          <span className="text-white font-bold text-xs">C</span>
        </div>
        <span className="font-semibold text-slate-700 text-base tracking-tight">
          coinbase
        </span>
      </div>
    ),
  },
  {
    name: "Google",
    svg: (
      <div className="flex items-center gap-0.5 text-base font-medium">
        <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span>
        <span style={{ color: "#EA4335" }}>e</span>
      </div>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 256 292"
          className="h-6 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.418S223.976 58.8 223.774 57.34z"
            fill="#95BF47"
          />
        </svg>
        <span className="font-semibold text-slate-700 text-base">shopify</span>
      </div>
    ),
  },
  {
    name: "Mindbody",
    svg: (
      <span className="font-semibold text-slate-400 text-base tracking-tight">
        mindbody
      </span>
    ),
  },
  {
    name: "MetLife",
    svg: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded bg-[#0066CC] flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">M</span>
        </div>
        <span className="font-bold text-[#0066CC] text-base">MetLife</span>
      </div>
    ),
  },
  {
    name: "Ramp",
    svg: (
      <span className="font-semibold text-slate-500 text-base tracking-tight">
        ramp <span className="text-xs">↗</span>
      </span>
    ),
  },
  {
    name: "Uber",
    svg: (
      <span className="font-black text-black text-xl tracking-tight">Uber</span>
    ),
  },
  {
    name: "Zoom",
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-lg bg-[#2D8CFF] flex items-center justify-center">
          <span className="text-white font-bold text-xs">Z</span>
        </div>
        <span className="font-semibold text-[#2D8CFF] text-base">Zoom</span>
      </div>
    ),
  },
  {
    name: "Slack",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 54 54"
          className="h-5 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
            fill="#36C5F0"
          />
          <path
            d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
            fill="#2EB67D"
          />
          <path
            d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
            fill="#ECB22E"
          />
          <path
            d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
            fill="#E01E5A"
          />
        </svg>
        <span className="font-bold text-slate-700 text-base">Slack</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    svg: (
      <div className="flex flex-col items-start">
        <span className="font-bold text-[#232F3E] text-base tracking-tight leading-none">
          amazon
        </span>
        <div
          className="w-full h-[2px] bg-[#FF9900] rounded-full mt-0.5"
          style={{ clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)" }}
        />
      </div>
    ),
  },
  {
    name: "Notion",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 100 100"
          className="h-5 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-.973 6.803-6.8 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.113 79.173C.973 76.26 0 74.313 0 71.987V10.893c0-3.497 1.557-6.413 6.017-6.58z"
            fill="#fff"
          />
          <path
            d="M61.35.227l-55.333 4.087C1.557 4.48 0 7.4 0 10.893v61.09c0 2.327.973 4.273 3.113 7.187l13.193 17.68c2.14 2.723 4.08 3.307 8.16 3.113l64.446-3.89c5.83-.39 6.8-2.913 6.8-7.19V13.64c0-2.143-.78-2.853-3.2-4.543L74.167 3.143C69.893.033 68.147-.36 61.35.227zM25.48 19.503c-5.557.373-6.82.45-9.98-2.073L8.34 11.3c-.777-.78-.39-1.557 1.557-1.75l53.194-3.89c4.473-.387 6.797 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.867 3.31-.6.036zM19.827 88.3V30.927c0-2.72.777-3.5 3.5-3.307l54.867 3.113c2.527.193 3.307 1.55 3.307 3.5v56.98c0 2.14-.387 3.89-3.307 4.083l-54.867 3.307c-2.913.193-3.5-.973-3.5-3.303zm52.6-50.323c.39 1.75 0 3.5-1.75 3.693l-2.91.583v42.773c-2.527 1.36-4.853 2.14-6.797 2.14-3.113 0-3.89-.973-6.21-3.887l-19.03-29.94v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.377.777c-.39-.78 0-2.723 1.357-3.11l3.5-.973V41.317L19.033 40.54c-.39-1.75.58-4.277 3.3-4.473l14.347-.973 19.807 30.327v-26.83l-5.060-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.9-.78z"
            fill="#000"
            fillRule="evenodd"
          />
        </svg>
        <span className="font-semibold text-slate-700 text-base">Notion</span>
      </div>
    ),
  },
  {
    name: "Figma",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 38 57"
          className="h-5 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
            fill="#1ABCFE"
          />
          <path
            d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
            fill="#0ACF83"
          />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path
            d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
            fill="#F24E1E"
          />
          <path
            d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
            fill="#A259FF"
          />
        </svg>
        <span className="font-semibold text-slate-700 text-base">Figma</span>
      </div>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 116 100"
          className="h-4 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.5 0L115 100H0L57.5 0z"
            fill="#000"
          />
        </svg>
        <span className="font-semibold text-black text-base tracking-tight">
          Vercel
        </span>
      </div>
    ),
  },
  {
    name: "Anthropic",
    svg: (
      <span className="font-medium text-slate-600 text-xs tracking-[0.2em] uppercase">
        Anthropic
      </span>
    ),
  },
  {
    name: "Instacart",
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#43B02A] flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">🥕</span>
        </div>
        <span className="font-semibold text-[#2D6A1F] text-base">
          Instacart
        </span>
      </div>
    ),
  },
  {
    name: "DoorDash",
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#FF3008] flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">D</span>
        </div>
        <span className="font-bold text-[#FF3008] text-base">DoorDash</span>
      </div>
    ),
  },
  {
    name: "Lyft",
    svg: (
      <span className="font-black text-[#FF00BF] text-xl tracking-tight">
        Lyft
      </span>
    ),
  },
  {
    name: "Substack",
    svg: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-[#FF6719] flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">S</span>
        </div>
        <span className="font-semibold text-slate-700 text-base">Substack</span>
      </div>
    ),
  },
  {
    name: "Hertz",
    svg: (
      <span
        className="font-black text-[#FFD700] text-xl tracking-tight"
        style={{ WebkitTextStroke: "1px #333" }}
      >
        Hertz
      </span>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 109 113"
          className="h-5 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
            fill="url(#a)"
          />
          <path
            d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
            fill="url(#b)"
            fillOpacity=".2"
          />
          <path
            d="M45.317 2.716C48.177-.885 53.975 1.088 54.044 5.686l.523 67.251H9.349c-8.19 0-12.758-9.46-7.665-15.875L45.317 2.716z"
            fill="#3ECF8E"
          />
          <defs>
            <linearGradient
              id="a"
              x1="53.974"
              y1="54.974"
              x2="94.163"
              y2="71.829"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#249361" />
              <stop offset="1" stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="36.156"
              y1="30.578"
              x2="54.484"
              y2="65.081"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span className="font-semibold text-slate-700 text-base">Supabase</span>
      </div>
    ),
  },
  {
    name: "Linear",
    svg: (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 100 100"
          className="h-5 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#5E6AD2" />
          <path
            d="M17.6 83.4L16 81.8 56.6 16h2.2L17.6 83.4zm6.8 6.8L22 88.8 84 26.6v2.2L24.4 90.2zM14 74.8l-2-2L72.4 14h2L14 74.8zM27 92.8l-2-2L90.8 27v2L27 92.8z"
            fill="#fff"
          />
        </svg>
        <span className="font-semibold text-slate-700 text-base">Linear</span>
      </div>
    ),
  },
];

const LogoCloud: FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] overflow-hidden w-full">
        <div className="flex items-center gap-16 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
