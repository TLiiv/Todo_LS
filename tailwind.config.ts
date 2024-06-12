import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // your paths
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': '#213555',
        'secondary': '#4F709C',
        'background': '#F0F0F0', // or #E2E2E2
        'hover': '#E5D283',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}




