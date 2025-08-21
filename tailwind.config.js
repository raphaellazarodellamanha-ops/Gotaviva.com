module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep water trust, community reliability foundation
        primary: {
          DEFAULT: "#2B7A9B", // blue-600
          50: "#EBF4F8", // blue-50
          100: "#D1E7F0", // blue-100
          200: "#A3CFE1", // blue-200
          300: "#75B7D2", // blue-300
          400: "#479FC3", // blue-400
          500: "#2B7A9B", // blue-500
          600: "#236B87", // blue-600
          700: "#1B5C73", // blue-700
          800: "#134D5F", // blue-800
          900: "#0B3E4B", // blue-900
        },
        // Secondary Colors - Living growth, conservation success celebration
        secondary: {
          DEFAULT: "#4A9B3E", // green-600
          50: "#F0F8EE", // green-50
          100: "#DCF0D7", // green-100
          200: "#B9E1AF", // green-200
          300: "#96D287", // green-300
          400: "#73C35F", // green-400
          500: "#4A9B3E", // green-500
          600: "#3E8235", // green-600
          700: "#32692C", // green-700
          800: "#265023", // green-800
          900: "#1A371A", // green-900
        },
        // Accent Colors - Warm community connection, achievement highlights
        accent: {
          DEFAULT: "#F4A261", // orange-400
          50: "#FEF7F0", // orange-50
          100: "#FDEEE1", // orange-100
          200: "#FBDDC3", // orange-200
          300: "#F9CCA5", // orange-300
          400: "#F4A261", // orange-400
          500: "#E6935A", // orange-500
          600: "#D88453", // orange-600
          700: "#CA754C", // orange-700
          800: "#BC6645", // orange-800
          900: "#AE573E", // orange-900
        },
        // Background Colors
        background: "#FEFEFE", // gray-50
        surface: "#F8F9FA", // gray-100
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-700
          secondary: "#6C757D", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#28A745", // green-600
          50: "#F0F9F3", // green-50
          100: "#DCF2E3", // green-100
          200: "#B9E5C7", // green-200
          300: "#96D8AB", // green-300
          400: "#73CB8F", // green-400
          500: "#28A745", // green-500
          600: "#229A3F", // green-600
          700: "#1C8D39", // green-700
          800: "#168033", // green-800
          900: "#10732D", // green-900
        },
        warning: {
          DEFAULT: "#FFC107", // yellow-400
          50: "#FFFBF0", // yellow-50
          100: "#FFF7E1", // yellow-100
          200: "#FFEFC3", // yellow-200
          300: "#FFE7A5", // yellow-300
          400: "#FFC107", // yellow-400
          500: "#E6AD06", // yellow-500
          600: "#CC9905", // yellow-600
          700: "#B38504", // yellow-700
          800: "#997103", // yellow-800
          900: "#805D02", // yellow-900
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FDF2F2", // red-50
          100: "#FCE4E6", // red-100
          200: "#F9C9CD", // red-200
          300: "#F6AEB4", // red-300
          400: "#F3939B", // red-400
          500: "#DC3545", // red-500
          600: "#C82333", // red-600
          700: "#B41E2B", // red-700
          800: "#A01923", // red-800
          900: "#8C141B", // red-900
        },
        // Border Colors
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          light: "#F1F3F4", // gray-100
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        comfortaa: ['Comfortaa', 'cursive'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(43, 122, 155, 0.1)',
        strong: '0 4px 16px rgba(43, 122, 155, 0.15)',
      },
      transitionTimingFunction: {
        'water': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        'gentle-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'celebration': 'bounce 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}