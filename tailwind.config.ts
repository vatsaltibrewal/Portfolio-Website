import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#FAF6F0',
        'light-card': '#FEFDFB',
        'light-text': '#333333',
        'light-border': '#EAE1D3',

        'dark-bg': '#121212',
        'dark-card': '#1C1C1C',
        'dark-text': '#E5E5E5',
        'dark-border': '#333333',

        'accent': '#CEA852',
      },
    },
  },
  plugins: [],
}
export default config