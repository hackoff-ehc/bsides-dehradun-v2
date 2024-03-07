import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',  
        'primary':'var(-primary-gradient)'
      },
      fontFamily:{
        'poppins': "var(--poppins)",
        'outfit':"var(--outfit)"
      },
      colors:{
          'primary':'var(-primary-gradient)',
          'custom-bg': 'rgba(255, 255, 255, 0.24)',
          'navlink':'rgba(12, 9, 9, 0.7)'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
