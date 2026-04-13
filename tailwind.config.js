/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#145B49',
          navy: '#061F2A',
          yellow: '#F0F600',
          mint: '#B2DCD6',
        },
      },
      boxShadow: {
        brand: '0 20px 40px rgba(6, 31, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
