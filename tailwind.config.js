// Build: npm run build  (reads src/styles/panel.css, writes dist/panel.css)
// Colours are OKLCH channel tokens defined on :host in src/styles/panel.css.
const c = (name) => `oklch(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["src/**/*.js"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: c("paper"), 2: c("paper-2") },
        rule: c("rule"),
        ink: c("ink"),
        accent: { DEFAULT: c("accent"), ink: c("accent-ink"), tint: c("accent-tint") }
      },
      fontFamily: { sans: ["Geist", "system-ui", "sans-serif"] },
      borderRadius: { panel: "14px", card: "10px", input: "8px" }
    }
  }
};
