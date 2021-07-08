# MERN App (TypeScript)

## SERVER
### Dependencies
```console
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
  "exec": "ts-node ./src/index.ts"
}
```

- .eslintrc.json
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

- .prettierrc.json
```json
{
  "singleQuote": true,
  "arrowParens": "always",
  "printWidth": 120
}
```

- .prettierignore
```sh
build
```