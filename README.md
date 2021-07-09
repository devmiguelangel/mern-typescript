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