import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    {
      	files: ["**/*.{js,mjs,cjs,ts}"],
    },
    {
      	rules:  {
            'strict': ['error', 'global'],
		    'no-unused-vars': 'off', // Desactivado en favor de @typescript-eslint/no-unused-vars
            'no-console': 'warn',
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],
            'prefer-const': 'warn',
            'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
            'complexity': ['warn', { max: 10 }],
            'consistent-return': 'error',
            'no-restricted-syntax': [
            'error', {
                selector: 'BreakStatement',
                message: 'Prohibido el uso de break.',
            },
            {
                selector: 'ContinueStatement',
                message: 'Prohibido el uso de continue.',
            },
            {
                selector: 'VariableDeclaration[declarations.length>1]',
                message: 'No se permiten declaraciones de múltiples variables. Usa una declaración por variable.',
            },
            {
                selector: 'AssignmentExpression[left.type="Identifier"][right.type="Identifier"]',
                message: 'Evita asignaciones entre referencias. Usa valores o copias.',
            },
        ],
        // Reglas de @typescript-eslint
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
},
{
    languageOptions: { globals: globals.node }
},
pluginJs.configs.recommended,
...tseslint.configs.recommended,
];