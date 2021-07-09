# MERN App (TypeScript)

## SERVER
### Dependencies
```sh
yarn add express cors mongoose --latest --exact

yarn add typescript ts-node nodemon -D --latest --exact

yarn add @types/node @types/express @types/mongoose @types/cors -D --latest --exact

yarn add eslint prettier @typescript-eslint/eslint-plugin eslint-config-airbnb-base eslint-plugin-import @typescript-eslint/parser -D --latest --exact
```

### Configuration
- tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["src/types/*.ts", "**/node_modules/**", ".vscode"]
}
```

- nodemon.json
```json
{
  "verbose": true,
  "watch": ["src"],
  "ext": ".ts",
  "ignore": [],
  "exec": "ts-node ./src/app.ts"
}
```

- .eslintrc.json
```json
{
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base",
        // "airbnb-typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        // "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:import/typescript",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
        // "ecmaFeatures": {
        //     "jsx": true
        // }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // "no-console": ["error", { "allow": ["log"]}],
        "no-console": ["error"],
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "max-len": ["error", { "code": 120 }],
        "no-prototype-builtins": "error",
        "prefer-template": "error",
        "prefer-spread": "error",
        "rest-spread-spacing": "error",
        "no-return-await": "error",
        "no-trailing-spaces": "error",
        "comma-dangle": ["error", "always-multiline"],
        "no-multiple-empty-lines": "error",
        "space-before-blocks": "error",
        "arrow-spacing": "error",
        "keyword-spacing": "error",
        "@typescript-eslint/explicit-function-return-type": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
        ]
    }
}
```

- .prettierrc.json
```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "arrowParens": "always",
  "printWidth": 120
}
```

- .prettierignore
```sh
build
```

## CLIENT
### Dependencies
```sh
yarn add react react-dom --latest --exact
yarn add typescript @types/react @types/react-dom -D --latest --exact
yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-typescript @babel/preset-react -D --latest --exact
yarn add @babel/runtime @babel/plugin-transform-runtime -D --latest --exact
yarn add webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader html-webpack-plugin clean-webpack-plugin -D --latest --exact
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D --latest --exact
yarn add \
  eslint \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  eslint-import-resolver-typescript \
  eslint-plugin-eslint-comments -D --latest --exact
```

### Configuration
- tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "ESNext",
    "lib": [
      "DOM",
      "ESNext"
    ],
    "allowJs": true,
    "checkJs": true,
    "jsx": "react-jsx",
    "noEmit": true,
    "isolatedModules": true,
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": ["node_modules", "dist"]
}
```

- .eslintrc.json
```json
{
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true // Allows for the parsing of JSX
        }
    },
    "settings": {
        "react": {
            "version": "detect"
        },
        "import/resolver": {
            "typescript": {}
        }
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:eslint-comments/recommended",
        // "prettier/@typescript-eslint",
        "plugin:prettier/recommended" //should be at the last
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true
            }
        ]
    }
}
```

- .prettierrc.json
```json
{
  "semi": true,
  "trailingComma": "all",
  "jsxSingleQuote": false,
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2
}
```

