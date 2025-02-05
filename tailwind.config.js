/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
            spacing: {
              "300vh": "300vh",
            },
          
      
      fontFamily: {
        aesthetic: [
          '"Aesthetic"',  // Your Mac-specific aesthetic font
          '-apple-system',        // Fallback to Mac's system font
          'BlinkMacSystemFont',   // Another Mac-specific fallback
          '"Segoe UI"',           // Windows fallback
          'Roboto',               // Android fallback
          '"Helvetica Neue"',     // Clean fallback
          'Arial',                // Universal sans-serif fallback
          'sans-serif',           // Generic fallback
        ],
        mauline: [
          '"Mauline"',  // Your Mac-specific aesthetic font
          '-apple-system',        // Fallback to Mac's system font
          'BlinkMacSystemFont',   // Another Mac-specific fallback
          '"Segoe UI"',           // Windows fallback
          'Roboto',               // Android fallback
          '"Helvetica Neue"',     // Clean fallback
          'Arial',                // Universal sans-serif fallback
          'sans-serif',           // Generic fallback
        ],
      },
      
    },
  },
  plugins: [],
}
// tailwind.config.js
