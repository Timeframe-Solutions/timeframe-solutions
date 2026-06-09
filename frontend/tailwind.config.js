module.exports = {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        "tf-surface": "#ffffff",
        "tf-surface-alt": "#f7f9fc",

        "tf-primary": "#1d6fa4",
        "tf-primary-dark": "#155680",
        "tf-primary-light": "#e8f4fb",

        "tf-accent": "#f59e0b",

        "tf-text-primary": "#0f172a",
        "tf-text-body": "#475569",
      },

      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
