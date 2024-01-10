import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custom: {
          red: "#DD2242",
          grey: "#85A3B2",
          navy: "#010A20",
          darkgrey: "#6F7787",
          lightgrey: "#E0E0E0",
          shadow: "#15143966"
        }
      }
    },
  },
  plugins: [],
}
export default config
