const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: {content: ['./public/**/*.html', './src/**/*.vue']},
    darkMode: 'class', // false or 'media' or 'class'
    theme: {
        colors,
        extend: {},
    },
    variants: {
        extend: {
            padding: ['cursor'],
            margin: ['cursor'],
            borderWidth: ['cursor'],
            textColor: ['cursor','focus-within'],
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

        plugin(function ({addVariant, e}) {
            addVariant('cursor', ({modifySelectors, separator}) => {
                modifySelectors(({className}) => {
                    return `.${e(`cursor${separator}${className}`)}:focus-within, .${e(`cursor${separator}${className}`)}:focus, .${e(`cursor${separator}${className}`)}:hover, .${e(`cursor${separator}${className}`)}:focus-within`
                })
            })
        }),
    ],
}
