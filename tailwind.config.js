import {nextui} from '@nextui-org/theme'

const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        require('@tailwindcss/typography'),
        nextui(),
        require("tailwindcss-animate"),
        function ({addBase, matchUtilities, theme}) {
            matchUtilities(
                {
                    "bg-dot-thick": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                        )}")`,
                    }),
                },
                {values: flattenColorPalette(theme("backgroundColor")), type: "color"}
            );

            let allColors = flattenColorPalette(theme("colors"));
            let newVars = Object.fromEntries(
                Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
            );

            addBase({
                ":root": newVars,
            });
        },
    ],
}
