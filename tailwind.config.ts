import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/assets/mask.svg',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        favicon: {
          background: '#191A44',
          foreground: '#fff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#59479A',
            secondary: '#F597A8',
            tertiary: '#EDF77E',
            quaternary: '#CAFBFF',
            fifty: '#F3A259',
            header: {
              name: '#191A44',
              nameClaim: '#000',
              link: '#59479A',
              linkHover: '#483785',
              LinkMobileToggle: '#59479A',
              background: '#fff',
              backgroundMobileToggle: '#fff',
            },
            hero: {
              title: '#fff',
              subtitle: '#F597A8',
              largeTitle: '#fff',
              text: '#fff',
              buttonBackground: '#F597A8',
              buttonText: '#fff',
              background: '#59479A',
              gradientFrom: '#59479AE4',
              gradientTo: '#59479A90',
            },
            about: {
              title: '#59479A',
              description: '#000',
              divider: '#F3A259',
              background: '#EDF77E',
              buttonBackground: '#F597A8',
              buttonText: '#fff',
            },
            service: {
              title: '#59479A',
              subtitle: '#fff',
              text: '#fff',
              icon: '#fff',
              background: '#F3A259',
              backgroundHover: '#F597A8',
              border: '#ededed',
              borderHoverBackground: '#ededed',
            },
            reference: {
              title: '#59479A',
              description: '#fff',
              largeTitle: '#fff',
              dots: '#59479A',
              symbol: '#59479A',
              background: '#F597A8',
            },
            contact: {
              title: '#59479A',
              subtitle: '#59479A',
              highlight: '#F597A8',
            },
            form: {
              label: '#59479A',
              placeholder: '#b5b5b5',
              inputBorder: '#59479A',
              inputBackground: '#fff',
              submitBackground: '#59479A',
              submitBackgroundHover: '#403275',
              submitForeground: '#fff',
            },
            footer: {
              text: '#000',
              logo: '#000',
            },
          },
        },
        dark: {
          colors: {
            primary: '#191A44',
            secondary: '#5B319B',
            header: {
              name: '#fff',
              nameClaim: '#fff',
              link: '#fff',
              linkHover: '#fff',
              LinkMobileToggle: '#fff',
              background: '#000',
              backgroundMobileToggle: '#000',
            },
            hero: {
              title: '#fff',
              subtitle: '#fff',
              largeTitle: '#fff',
              text: '#fff',
              buttonBackground: '#59479A',
              buttonText: '#fff',
              background: '#000',
              gradientFrom: '#000',
              gradientTo: '#13133099',
            },
            about: {
              title: '#fff',
              description: '#fff',
              divider: '#59479A',
              background: '#59479A45',
              buttonBackground: '#59479A',
              buttonText: '#fff',
            },
            service: {
              title: '#fff',
              subtitle: '#fff',
              text: '#fff',
              icon: '#fff',
              background: '#59479A45',
              backgroundHover: '#59479A1F',
              border: '#13133099',
              borderHoverBackground: '#13133099',
            },
            reference: {
              title: '#fff',
              description: '#fff',
              largeTitle: '#fff',
              dots: '#fff',
              symbol: '#F597A8',
              background: '#000',
            },
            contact: {
              title: '#fff',
              subtitle: '#fff',
              highlight: '#59479A',
            },
            form: {
              label: '#fff',
              placeholder: '#fff',
              inputBorder: '#fff',
              inputBackground: 'transparent',
              submitBackground: '#59479A',
              submitBackgroundHover: '#403275',
              submitForeground: '#fff',
            },
            footer: {
              text: '#fff',
              logo: '#fff',
            },
          },
        },
      },
    }),
  ],
}

export default config
