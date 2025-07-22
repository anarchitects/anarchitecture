module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(var(--primary-light))',
          DEFAULT: 'rgb(var(--primary))',
          dark: 'rgb(var(--primary-dark))',
        },
        secondary: {
          light: 'rgb(var(--secondary-light))',
          DEFAULT: 'rgb(var(--secondary))',
          dark: 'rgb(var(--secondary-dark))',
        },
        tertiary: {
          light: 'rgb(var(--tertiary-light))',
          DEFAULT: 'rgb(var(--tertiary))',
          dark: 'rgb(var(--tertiary-dark))',
        },
        quaternary: {
          light: 'rgb(var(--quaternary-light))',
          DEFAULT: 'rgb(var(--quaternary))',
          dark: 'rgb(var(--quaternary-dark))',
        },
        error: {
          light: 'rgb(var(--error-light))',
          DEFAULT: 'rgb(var(--error))',
          dark: 'rgb(var(--error-dark))',
        },
        white: 'rgb(var(--white))',
        black: 'rgb(var(--black))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
