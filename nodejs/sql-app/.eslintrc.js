module.exports = {
    parser: '@typescript-eslint/parser', // Especifica el parser de ESLint para TypeScript
    extends: [
        'eslint:recommended', // Usa las reglas recomendadas de ESLint
        'plugin:@typescript-eslint/eslint-recommended', // Usa las reglas recomendadas para TypeScript
        'plugin:@typescript-eslint/recommended' // Reglas específicas de @typescript-eslint
    ],
    parserOptions: {
        ecmaVersion: 2020, // Permite el análisis de características modernas de ECMAScript
        sourceType: 'module', // Permite el uso de importaciones de módulos
    },
    env: {
        node: true, // Habilita el entorno Node.js
        es6: true, // Habilita las características de ES6
    },
    rules: {
        // Personaliza tus reglas aquí
        // Ejemplo: "@typescript-eslint/no-unused-vars": ["error"]
    }
};
