const config = {
  theme: {
    extend: {
      backgroundImage: {
        dots: "radial-gradient(circle, white 1px, transparent 1px)", // Dots background
      },
      animation: {
        "move-up": "move-up 10s linear infinite", // Moving animation
      },
      keyframes: {
        "move-up": {
          "0%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
