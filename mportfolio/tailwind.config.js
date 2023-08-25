module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode using class switching
  theme: {
    extend: {
      backgroundColor: {
        'dark': 'var(--dark-bg-color)',
        'light': 'var(--light-bg-color)',
      },
      textColor: {
        'dark-text': 'var(--dark-text-color)',
        'light-text': 'var(--light-text-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
