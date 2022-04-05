# Conexa frontend challenge

## Manual Installation

Clone the repo:

```bash
git clone --depth 1 https://github.com/GermanTorales/conexa-front

cd conexa-front
```

Install the dependencies:

```bash
npm i

#or

npm install
```

Set the environment variables:

```bash
# Copy the .env.example on .env
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Conexa frontend challenge](#conexa-frontend-challenge)
  - [Manual Installation](#manual-installation)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Commands](#commands)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure)
  - [Linting](#linting)

## Features

- **Dependency management**: with [npm](https://www.npmjs.com/)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)

## Commands

Running in production:

```bash
npm start
```

Build with babel

```bash
npm run build
```

Testing:

```bash
# run all tests
npm test
```

Linting:

```bash
# run ESLint
npm lint

# fix ESLint errors
npm lint:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
REACT_APP_BACKEND_URL=http://localhost:3001/api/v1
```

## Project Structure

```
|--public\
|--src\
    |--components\         # Components
    |--config\             # Configurations
    |--pages\              # All pages
    |--utils\              # Utils funtions
    |--App.js              # App component
    |--global.styles.css   # Global styles
    |--index.js            # React entry point
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Standard JavaScript style guide](https://standardjs.com/) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.yml` file. To modify the Prettier configuration, update the `.prettierrc` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.
