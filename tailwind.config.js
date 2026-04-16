/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#C56A3D",
        sage:       "#7A9E7E",
        golden:     "#E3A857",
        cream:      "#F7F3EE",
        charcoal:   "#2F2F2F",
        "gray-soft": "#6B6B6B",
      }
    },
  },
  plugins: [],
}

