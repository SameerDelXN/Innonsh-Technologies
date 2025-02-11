/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: {'min':'320px','max':'767px'},
        tablet: { 'min': '768px', 'max': '1024px' }, // Tablets and small laptops
        laptop: {'min':'1025px','max':'1367px'},
        // desktop: {'min':'1281px','max':'1366px'},
        desktopxl: {'min':'1368px','max':'2560px'},
        // desktop2xl: {'min':'1921px','max':'2560px'},
        desktop3xl: {'min':'2561px','max':'3840px'},
    },
    },
  },
  plugins: [
    require('tailwind-scrollbar') // Add the plugin
  ],
}