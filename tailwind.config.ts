import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "genshin-nav-black": "#111111",
        "genshin-nav-text": "#CCCCCC",
      },
      backgroundImage: {
        "genshin-index-bg":
          "url('https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg')",
      },
      keyframes: {
        genshinBGKeyframe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        genshinCharacterKeyframe: {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        genshinBannerKeyframe: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        genshinElementKeyframe: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.15" },
        },
        genshinFadeOutKeyframe: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        genshinMoveOutKeyframe: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "40%": {opacity: "0.2"},
          "100%": { transform: "translateX(2000px)",opacity: "0"  },
        },
      },
      animation: {
        genshinBG: "genshinBGKeyframe 30s ease-in-out infinite",
        genshinCharacter: "genshinCharacterKeyframe 0.5s ease-in-out",
        genshinBanner: "genshinBannerKeyframe 0.5s ease-in-out",
        genshinElement: "genshinElementKeyframe 0.5s ease-in-out",
        fadeout: "genshinFadeOutKeyframe 0.5s ease-in-out",
        moveout: "genshinMoveOutKeyframe 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
