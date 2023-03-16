const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    theme: {
      extend: {
        colors: {
          primary: "#E53E3E",
          secondary: "#DDD",
          background: "#1A202C",
          surface: "#2D3748",
          text: "#F7FAFC",
        },
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;