# Todo App

This project is a template for setting up React with TypeScript in Vite, configured with HMR (Hot Module Replacement) and ESLint rules for maintaining code quality.

# Overview
This template includes setup instructions and configurations for a streamlined development experience using Vite.

# Tools Used
- Vite: Frontend tool that provides an extremely fast dev server and optimized build setup.
- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- nanoid: A small, secure, URL-friendly unique string ID generator.
- axios: A promise-based HTTP client for making API requests.
- Aceternity UI: A components library.

# Getting Started
To use this project, follow these steps:

## Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Node.js: 
- Download npm [here](https://nodejs.org/en)

Normally comes with Node.js installation
### Installation
### Clone the repository and install dependencies:

```bash
git clone https://github.com/TLiiv/Todo_LS.git
cd Todo_LS
npm install
```

### Run the development server:

```bash
npm run dev
```
This command starts the development server and opens your default web browser with the application running at http://localhost:5173.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# 