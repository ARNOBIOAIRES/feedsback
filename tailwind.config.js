/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#996dff',
                    500: '#8257e6',

                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}

/* 
dentro de theme, posso criar novos padões de cores

Assim:
dentro de extend
colors: {
    brand: {
        500: '#8257e6',
    }
}
essa cor criada já fica  disponível no editor, no autocomplit.
*/