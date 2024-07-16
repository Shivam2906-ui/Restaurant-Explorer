/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // By adding this source(i. src) inside the content means that i am mentioning that to read(or use ) these files only while compiling.We dont use Tailwind CSS except these files.
  theme: {
    extend: {},
  },
  plugins: [],
};
