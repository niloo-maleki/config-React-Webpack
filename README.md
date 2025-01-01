# config-React-Webpack

This project is a React application configured with Webpack to provide an optimized build process for both development and production. It focuses on enhancing the performance, modularity, and maintainability of the application while using modern JavaScript and React features.

---

## Getting Started

### Installing Dependencies

Clone the repository and install the dependencies:

```bash
git clone https://github.com/niloo-maleki/config-React-Webpack.git
pnpm install
```

### Running the Setup for Git Hooks (Husky)

In order to set up Husky hooks for pre-commit checks (like linting and formatting), you need to run the following command after installing dependencies:

```bash
pnpm prepare
```

This will set up the Husky hooks (e.g., for commit-msg and pre-commit) to ensure that commits meet the project's standards and code quality.

### Running the Project

To start the project in development mode, use the following command:

```bash
pnpm start
```

The project will be available in your browser at [http://localhost:3000](http://localhost:3000).

---

## Tools and Technologies Used

This project leverages the following tools and technologies:

- **React**: For building the user interface.
- **TypeScript**: To ensure type safety and reduce common errors.
- **TailwindCSS**: For styling.
- **Webpack**: To handle bundling.
- **pnpm**: For managing dependencies and scripts.
- **Husky**: To run pre-commit scripts.
- **Lint-staged**: To lint staged files before committing.
- **Commitlint**: To enforce conventional commit messages.
- **ESLint & Prettier**: For linting and formatting the codebase.
- **Framer Motion**: Animation Library.

---

## Scripts

The following scripts are available for development and production tasks:

- `pnpm start`: Runs the project in development mode.
- `pnpm build`: Builds the project for production.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm format`: Formats the code using Prettier.

---

## Commit Standards

This project uses **Commitlint** to enforce standardized commit messages. The format should follow the structure below:

```
<type>(<scope>): <description>

[body]
[footer]
```

Example:

```bash
feat(ui): add new button to the header
```

### Commit Types:

- `feat`: Adding a new feature.
- `fix`: Fixing a bug.
- `docs`: Documentation changes.
- `style`: Changes that do not affect logic (e.g., white-space, formatting).
- `refactor`: Code refactoring without changing behavior.
- `test`: Adding or updating tests.
- `chore`: General maintenance (e.g., updating dependencies).

---

## Pre-commit Hooks

This project uses **Husky** and **Lint-staged** to enforce code quality before commits:

- **Husky**: Runs pre-commit hooks.
- **Lint-staged**: Ensures only staged files are linted and formatted.

---

## Notes for Developers

1. Ensure you have `pnpm` installed globally:
   ```bash
   npm install -g pnpm
   ```
2. Follow the commit message standards to maintain consistency.
3. Use `pnpm lint` and `pnpm format` before pushing changes to the repository.
4. Refer to the `src` folder structure for component organization.


---

## Troubleshooting

### "Cannot Execute Binary File" Error with Husky

If you're encountering the error **".husky/pre-msg: cannot execute binary file"**, follow the steps below to resolve the issue:

[See detailed troubleshooting steps here](https://github.com/niloo-maleki/config-React-Webpack/issues)

