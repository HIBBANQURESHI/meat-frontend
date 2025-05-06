module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          'primary-variant': 'var(--primary-variant)',
          secondary: 'var(--secondary)',
          background: 'var(--background)',
          surface: 'var(--surface)',
          error: 'var(--error)',
          'on-primary': 'var(--on-primary)',
          'on-secondary': 'var(--on-secondary)',
          'on-background': 'var(--on-background)',
          'on-surface': 'var(--on-surface)',
          'on-error': 'var(--on-error)',
        },
      },
    },
    plugins: [],
  }