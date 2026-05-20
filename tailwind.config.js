/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0E15',
        surface: '#171923',
        primary: '#10B981',       // Emerald Teal - cyberpunk accent
        primaryHover: '#34d399',  // Lighter teal hover
        accent: '#8B5CF6',        // Violet secondary glow
        textMain: '#F1F5F9',
        textMuted: '#64748B',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(to bottom, transparent 40%, rgba(16, 185, 129, 0.12) 100%)',
        'nominal-gradient': 'linear-gradient(135deg, #111e1a, #0d0e15)',
        'glossy-surface': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      }
    },
  },
  plugins: [],
}
