import eslint_js from '@eslint/js'
import eslint_ts from 'typescript-eslint'
import eslintPrettier from 'eslint-plugin-prettier'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default eslint_ts.config(
  {
    ignores: ['node_modules/**', 'dist/**', '/types/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    plugins: {
      prettier: eslintPrettier
    },
    rules: {
      ...eslint_js.configs.recommended.rules,
      'no-unused-vars': 'off',
      'no-dupe-keys': 'off',
      'max-lines': ['error', { max: 680, skipBlankLines: true, skipComments: true }]
    }
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    // React config
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        project: './tsconfig.json'
      },
      parser: eslint_ts.parser
    },
    plugins: {
      react,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
      '@typescript-eslint': eslint_ts.plugin
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-refresh/only-export-components': 'warn'
      // 'react/jsx-sort-props': 'off',
      // 'react/jsx-wrap-multilines': 'off', // 在多行 JSX 元素周围加上括号
      // 'react/jsx-filename-extension': 'off', // 禁止可能包含 JSX 文件扩展名
      // 'react/jsx-first-prop-new-line': 'off', // 强制 JSX 中第一个属性的正确位置
      // 'react/jsx-no-bind': 'off', // .bind()JSX 属性中禁止使用箭头函数
      // 'react/jsx-max-props-per-line': ['error', { maximum: 4 }], // 在 JSX 中的单行上强制执行最多 props 数量
      // 'react/jsx-no-literals': 'off', // 禁止在 JSX 中使用字符串文字
      // 'react/jsx-one-expression-per-line': 'off', // 每行一个 JSX 元素
      // 'react/jsx-indent-props': 'off', // 验证 props 缩进
      // 'react/jsx-max-depth': 'off', // 强制 JSX 最大深度
      // 'react/jsx-indent': 'off',
      // 'react/jsx-max-props-per-line': 'off',
      // 'react/jsx-no-leaked-render': 'off',
      // 'react/jsx-curly-newline': 'off', // 强制所有 JSX 属性都有一致的换行符
      // 'react/jsx-newline': 'off', // 在 jsx 元素和表达式之后换行
      // 'react/jsx-props-no-spreading': 'off', // 强制任何 JSX 属性都不会传播
      // 'react/forbid-component-props': 'off', // 禁止组件上使用某些 props
      // 'react/function-component-definition': 'off',
      // 'react/display-name': 'off', // 防止在 React 组件定义中丢失 displayName
      // 'react/prop-types': 'off', // 防止在 React 组件定义中丢失 props 验证
      // 'react/no-multi-comp': 'off', // 防止每个文件有多个组件定义
      // 'react/no-danger': 'off', // 禁止使用 dangerouslySetInnerHTML
      // 'react/prefer-read-only-props': 'off',
      // 'react/no-array-index-key': 'off', // 禁止index作为列表序列
      // 'react/destructuring-assignment': 'off',
      // 'react/no-unstable-nested-components': 'off',
      // 'react/require-default-props': 'off', // 为每个非必需 prop 强制执行 defaultProps 定义
      // 'react/no-unsafe': 'off', // 禁止使用不安全的生命周期方法
      // 'react/react-in-jsx-scope': 'off', // 使用 JSX 时需要引入 React
      // 'react/hook-use-state': 'off' // UseState 钩子值和 setter 变量的解构和对称命名
    }
  },
  {
    // Dedicated import configuration
    files: ['**/*.{cjs,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              // Packages `react` related packages come first.
              '^\\u0000(?!virtual)',
              '^react',
              '^@?\\w',
              // Internal packages.
              '^(@|components)(/.*|$)',
              /*
               * Side effect imports.
               * '^\\u0000',
               * Parent imports. Put `..` last.
               */
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              // Other relative imports. Put same-folder imports and `.` last.
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ],
            ['^virtual:(?!/?$)'],
            // Style imports.
            ['^.+\\.?(sc|sa|c|le)ss$']
          ]
        }
      ]
    }
  },
  {
    extends: [eslint_ts.configs.disableTypeChecked],
    files: ['**/*.js']
  }
)
