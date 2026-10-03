/** @type {import('tailwindcss').Config} */
const scale = (name: string) => {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return steps.reduce<Record<string, string>>((acc, step) => {
    acc[step] = `oklch(var(--${name}-${step}) / <alpha-value>)`;
    return acc;
  }, {});
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: scale("background"),
        foreground: scale("foreground"),
        primary: scale("primary"),
        accent: scale("accent"),
        secondary: scale("secondary"),
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        display: ["var(--font-heading)"],
        label: ["var(--font-label)"],
      },
    },
  },
  plugins: [],
};