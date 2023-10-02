import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'snow-white': '#FFFDFA',
        'light-brown': '#BEA6A0',
        'dark-brown': '#3A001E',
      },
      fontFamily: {
        sans: ['var(--font-vazir)'],
      },
    },
  },
  plugins: [],
}
export default config
