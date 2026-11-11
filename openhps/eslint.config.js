const globals = require('globals');
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const jsdoc = require('eslint-plugin-jsdoc');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
    {
        ignores: [
            'dist/**',
            'coverage/**',
            '.nyc_output/**',
            'docs/out/**',
            'node_modules/**',
            '**/*.js',
            '**/*.cjs',
            '**/*.mjs',
            '**/*.d.ts',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    // Registers the .ts resolver extensions. Load-bearing, not cosmetic:
    // without it `import/no-cycle` resolves nothing and silently passes.
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    jsdoc.configs['flat/recommended-typescript'],
    // Must stay last so it can switch off the stylistic rules it replaces.
    prettierRecommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                // Type-aware linting, needed by @typescript-eslint/no-deprecated.
                project: ['./tsconfig/tsconfig.lint.json'],
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-require-imports': 'off',
            // Replaces the archived eslint-plugin-deprecation.
            '@typescript-eslint/no-deprecated': 'warn',
            'import/no-cycle': ['warn', { maxDepth: 15 }],
            'import/no-unresolved': 'off',
            // Cannot validate computed access into a TypeScript namespace import.
            'import/namespace': 'off',
            'jsdoc/check-tag-names': ['error', { definedTags: ['category', 'rdf'] }],
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-returns-type': 'off',
            // OpenHPS documents parameter types in JSDoc deliberately (TypeDoc renders
            // them), so the "types are redundant in TS" rule does not apply.
            'jsdoc/no-types': 'off',
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['**/test/**/*.ts'],
        rules: {
            'jsdoc/require-returns': 'off',
            'jsdoc/require-param': 'off',
            // chai's `expect(x).to.be.true` is an expression statement by design.
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
);
