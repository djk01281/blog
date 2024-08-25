import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        paytone: ["var(--font-paytone-one)"],
        bricolage: ["var(--font-bricolage)"],
      },
      typography: ({ theme }: PluginUtils) => ({
        pink: {
          css: {
            "--tw-prose-body": "#fcf3e3",
            "--tw-prose-headings": "#fcf3e3",
            // "--tw-prose-lead": theme("colors.pink[700]"),
            // "--tw-prose-links": theme("colors.pink[900]"),
            "--tw-prose-bold": "#fcf3e3",
            // "--tw-prose-counters": theme("colors.pink[600]"),
            // "--tw-prose-bullets": theme("colors.pink[400]"),
            // "--tw-prose-hr": theme("colors.pink[300]"),
            "--tw-prose-quotes": "white",
            // "--tw-prose-quote-borders": theme("colors.pink[300]"),
            // "--tw-prose-captions": theme("colors.pink[700]"),
            // "--tw-prose-code": theme("colors.pink[900]"),
            // "--tw-prose-pre-code": theme("colors.pink[100]"),
            // "--tw-prose-pre-bg": theme("colors.pink[900]"),
            // "--tw-prose-th-borders": theme("colors.pink[300]"),
            // "--tw-prose-td-borders": theme("colors.pink[200]"),
            // "--tw-prose-invert-body": theme("colors.pink[200]"),
            // "--tw-prose-invert-headings": theme("colors.white"),
            // "--tw-prose-invert-lead": theme("colors.pink[300]"),
            // "--tw-prose-invert-links": theme("colors.white"),
            // "--tw-prose-invert-bold": theme("colors.white"),
            // "--tw-prose-invert-counters": theme("colors.pink[400]"),
            // "--tw-prose-invert-bullets": theme("colors.pink[600]"),
            // "--tw-prose-invert-hr": theme("colors.pink[700]"),
            // "--tw-prose-invert-quotes": theme("colors.pink[100]"),
            // "--tw-prose-invert-quote-borders": theme("colors.pink[700]"),
            // "--tw-prose-invert-captions": theme("colors.pink[400]"),
            // "--tw-prose-invert-code": theme("colors.white"),
            // "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
            // "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            // "--tw-prose-invert-th-borders": theme("colors.pink[600]"),
            // "--tw-prose-invert-td-borders": theme("colors.pink[700]"),
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
export default config;
