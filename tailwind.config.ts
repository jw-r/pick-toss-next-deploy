import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      maxWidth: {
        mobile: '430px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        suit: ['var(--font-suit)'],
        'dm-sans': ['var(--font-dm-sans'],
        'dm-suit': ['var(--font-dm-sans)', 'var(--font-suit)'],
      },
      fontSize: {
        h1: [
          '36px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'h2-bold': [
          '32px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'h2-bold-eng': [
          '32px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'h2-medium': [
          '32px',
          {
            lineHeight: 'normal',
            fontWeight: '500',
            letterSpacing: '-0.02em',
          },
        ],
        'h3-bold': [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'h3-bold-eng': [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'h3-medium': [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: '500',
            letterSpacing: '-0.02em',
          },
        ],
        'h4-bold': [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'h4-medium': [
          '20px',
          {
            lineHeight: '150%',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        button: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'body1-bold': [
          '16px',
          {
            lineHeight: '120%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'body1-bold-eng': [
          '16px',
          {
            lineHeight: '120%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'body1-medium': [
          '16px',
          {
            lineHeight: '120%',
            fontWeight: '500',
            letterSpacing: '-0.02em',
          },
        ],
        'body2-bold': [
          '14px',
          {
            lineHeight: '120%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'body2-medium': [
          '14px',
          {
            lineHeight: '120%',
            fontWeight: '500',
            letterSpacing: '-0.02em',
          },
        ],
        'body2-regular': [
          '14px',
          {
            lineHeight: '120%',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        'body2-regular-eng': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        'text-medium': [
          '14px',
          {
            lineHeight: '150%',
            fontWeight: '500',
            letterSpacing: '-0.02em',
          },
        ],
        'text-bold': [
          '14px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'text2-bold': [
          '16px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'text-regular': [
          '14px',
          {
            lineHeight: '150%',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        'small1-bold': [
          '12px',
          {
            lineHeight: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'small1-regular': [
          '12px',
          {
            lineHeight: 'normal',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        tag: [
          '10px',
          {
            lineHeight: '150%',
            fontWeight: 'normal',
            letterSpacing: '0em',
          },
        ],
        'tag-eng': [
          '10px',
          {
            lineHeight: '150%',
            fontWeight: 'normal',
            letterSpacing: '-0.03em',
          },
        ],
        hero: [
          '36px',
          {
            fontWeight: 'bold',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
          },
        ],
        title1: [
          '30px',
          {
            fontWeight: 'bold',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
          },
        ],
        title2: [
          '24px',
          {
            fontWeight: 'bold',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
          },
        ],
        title3: [
          '20px',
          {
            fontWeight: 'bold',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
          },
        ],
        'subtitle1-bold': [
          '18px',
          {
            fontWeight: 'bold',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'subtitle2-bold': [
          '16px',
          {
            fontWeight: 'bold',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'subtitle2-medium': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'text1-bold': [
          '14px',
          {
            fontWeight: 'bold',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'text1-medium': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'text1-regular': [
          '14px',
          {
            fontWeight: 'normal',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'text2-bold-v3': [
          '12px',
          {
            fontWeight: 'bold',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'text2-medium': [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'caption-bold': [
          '10px',
          {
            fontWeight: 'bold',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        'caption-medium': [
          '10px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
        button1: [
          '18px',
          {
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        button2: [
          '16px',
          {
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        button3: [
          '14px',
          {
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        button4: [
          '14px',
          {
            fontWeight: '500',
            lineHeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        button5: [
          '12px',
          {
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        question: [
          '20px',
          {
            fontWeight: 'bold',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
          },
        ],
      },
      colors: {
        white: '#FFFFFF',
        gray: {
          '01': '#F6FAFD',
          '02': '#EFF1F3',
          '03': '',
          '04': '#D2D6DB',
          '05': '',
          '06': '#A2A6AB',
          '07': '#797D81',
          '08': '#4B4F54',
          '09': '#292B2C',
          '10': '#1D1E1F',
        },
        orange: {
          '01': '#FFECD0',
          '02': '#FFE1AC',
          '03': '#FFD180',
          '04': '#FFAB40',
          '05': '#FF9100',
          '06': '#FB7E20',
        },
        notice: {
          red: '#F66444',
          green: '#63CF75',
        },
        blue: {
          '01': '#F0F4FF',
          '02': '#D7E2FF',
          '03': '#BCCFFF',
          '04': '#95B0F8',
          '05': '#7095F8',
          '06': '#577CFF',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        white_v3: 'var(--color-white)',
        gray_v3: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          black: 'var(--color-gray-black)',
        },
        blue_v3: {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)',
        },
        orange_v3: {
          50: 'var(--color-orange-50)',
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)',
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)',
        },
        green: {
          200: 'var(--color-green-200)',
          500: 'var(--color-green-500)',
        },
        red: {
          200: 'var(--color-red-200)',
          500: 'var(--color-red-500)',
        },

        // 의미론적 색상
        background_v3: {
          'base-01': 'var(--color-white)',
          'base-02': 'var(--color-gray-50)',
          'base-03': 'var(--color-gray-100)',
          'base-inverse': 'var(--color-gray-black)',
          'container-01': 'var(--color-gray-200)',
          'container-02': 'var(--color-orange-50)',
          'container-03': 'var(--color-blue-50)',
          'container-alert': 'var(--color-red-200)',
          'container-success': 'var(--color-green-200)',
          menu: 'var(--color-white)',
          toast: 'var(--color-gray-800)',
          disabled: 'var(--color-gray-100)',
          tooltip: 'var(--color-blue-500)',
          critical: 'var(--color-red-500)',
          accent: 'var(--color-orange-500)',
          kakao: '#FBE44D',
        },
        fill: {
          'primary-orange': 'var(--color-orange-500)',
          'primary-blue': 'var(--color-blue-500)',
          'secondary-orange': 'var(--color-orange-400)',
          'secondary-blue': 'var(--color-blue-400)',
        },
        border_v3: {
          default: 'var(--color-gray-100)',
          divider: 'var(--color-gray-100)',
          focused: 'var(--color-blue-400)',
          selected: 'var(--color-orange-400)',
          error: 'var(--color-red-500)',
          right: 'var(--color-green-500)',
        },
        text: {
          primary: 'var(--color-gray-900)',
          'primary-inverse': 'var(--color-white)',
          secondary: 'var(--color-gray-700)',
          'secondary-inverse': 'var(--color-gray-100)',
          sub: 'var(--color-gray-500)',
          caption: 'var(--color-gray-300)',
          success: 'var(--color-green-500)',
          critical: 'var(--color-red-500)',
          info: 'var(--color-blue-500)',
          accent: 'var(--color-orange-500)',
          selected: 'var(--color-orange-600)',
          'placeholder-01': 'var(--color-gray-400)',
          'placeholder-02': 'var(--color-gray-200)',
          disabled: 'var(--color-gray-300)',
          right: 'var(--color-green-500)',
          wrong: 'var(--color-red-500)',
        },
        icon: {
          system: 'var(--color-gray-900)',
          primary: 'var(--color-orange-500)',
          'primary-inverse': 'var(--color-white)',
          secondary: 'var(--color-gray-700)',
          'secondary-inverse': 'var(--color-gray-100)',
          tertiary: 'var(--color-gray-300)',
          'accent-01': 'var(--color-orange-600)',
          'accent-02': 'var(--color-blue-500)',
          critical: 'var(--color-red-500)',
          success: 'var(--color-green-500)',
          disabled: 'var(--color-gray-200)',
          kakao: '#3C1E1E',
        },
        'button-fill': {
          primary: 'var(--color-orange-500)',
          'primary-hover': 'var(--color-orange-600)',
          'primary-loading': 'var(--color-orange-400)',
          secondary: 'var(--color-orange-100)',
          'secondary-hover': 'var(--color-orange-200)',
          tertiary: 'var(--color-gray-100)',
          'tertiary-hover': 'var(--color-gray-200)',
          disabled: 'var(--color-gray-100)',
          adjust: 'var(--color-white)',
          outlined: 'var(--color-white)',
          unselected: 'var(--color-gray-100)',
          selected: 'var(--color-gray-800)',
        },
        'button-label': {
          primary: 'var(--color-white)',
          'primary-loading': 'var(--color-gray-50)',
          secondary: 'var(--color-orange-500)',
          tertiary: 'var(--color-gray-700)',
          disabled: 'var(--color-gray-200)',
          unselected: 'var(--color-gray-600)',
          selected: 'var(--color-white)',
        },
        'button-text': {
          primary: 'var(--color-orange-500)',
          secondary: 'var(--color-gray-800)',
          tertiary: 'var(--color-gray-500)',
          critical: 'var(--color-red-500)',
          link: 'var(--color-blue-400)',
          disabled: 'var(--color-gray-200)',
        },
      },
      boxShadow: {
        modal: '0px 4px 12px 0px #00000040',
        'custom-shadow': '2px 2.5px 12.5px rgba(93, 99, 110, 0.15)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #FFF7EA 40%, #FFFFFF 60%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config

export default config
