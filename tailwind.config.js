/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Merriweather', 'serif'],
        headline: ['var(--font-headline)', 'Playfair Display', 'serif'],
      },
      colors: {
        // StrategyFlow Theme
        'strategy-blue': '#1e40af',
        'strategy-blue-dark': '#1e3a8a',
        'strategy-blue-light': '#3b82f6',
        'strategy-gray': '#f8fafc',
        'strategy-gray-dark': '#e2e8f0',
        'strategy-gray-text': '#475569',
        // Marketing Strategies Hub Theme (Editorial News Style)
        'editorial-red': '#c1272d',
        'editorial-red-dark': '#a01f24',
        'editorial-black': '#111111',
        'editorial-gray': '#555555',
        'editorial-bg': '#fafafa',
        // Legacy Marketing Strategies Hub Theme
        'midnight-blue': '#0F172A',
        'midnight-dark': '#020617',
        'midnight-light': '#1E293B',
        'teal': '#14B8A6',
        'teal-dark': '#0D9488',
        'teal-light': '#5EEAD4',
        // Legacy UpGrad colors (keeping for compatibility)
        'upgrad-red': '#E53E3E',
        'upgrad-dark-red': '#C53030',
        'upgrad-light-red': '#FC8181',
        'upgrad-dark-grey': '#2D3748',
        'upgrad-grey': '#4A5568',
        'upgrad-light-grey': '#718096',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
