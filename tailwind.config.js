const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-gray': '#fbfbfc',
                'intense-gray' : '#17202d'
            }
        },
    },
    variants: {
        extend: {
            padding: ['cursor'],
            margin: ['cursor'],
            borderWidth: ['cursor'],
            textColor: ['cursor', 'focus-within'],
            textOpacity: ['cursor'],
            backgroundOpacity: ['cursor'],
            borderOpacity: ['cursor'],
            backgroundColor: ['cursor'],
            borderColor: ['cursor'],
            boxShadow: ['cursor'],
            opacity: ['cursor'],
            scale: ['cursor'],
            translate: ['cursor'],
            display: ['cursor'],
            ringColor: ['cursor'],
            ringOffsetColor: ['cursor'],
            ringOffsetWidth: ['cursor'],
            ringOpacity: ['cursor'],
            ringWidth: ['cursor'],

        },
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant('cursor', ['&:hover', '&:focus', '&:focus-within'])
        }),
    ],
}
