module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tBase: "var(--color-text-base)",
        bgPrimary: "var(--color-bg-primary)"
      }
    }
  }
}