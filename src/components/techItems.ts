import webpackLogo from '@assets/icons/webpack-logo.svg';
import tailwindcss from '@assets/icons/tailwindcss.svg';
import typescript from '@assets/icons/typescript-icon.svg';
import framerMotion from '@assets/icons/framer-motion.svg';
import pnpm from '@assets/icons/pnpm.svg';
import prettier from '@assets/icons/prettier.svg';
import eslint from '@assets/icons/eslint.svg';
import husky from '@assets/icons/husky-1.svg';

export const techItems = [
  {
    logo: webpackLogo,
    title: 'Webpack',
    description: 'Module bundler for JavaScript applications.',
    link: 'https://webpack.js.org',
  },
  {
    logo: typescript,
    title: 'TypeScript',
    description: `TypeScript is a typed superset of JavaScript that transpiles to plain JavaScript.`,
    link: 'https://code.visualstudio.com/docs/typescript/typescript-compiling',
  },
  {
    logo: tailwindcss,
    title: 'TailwindCSS',
    description: 'Utility-first CSS framework for creating custom designs.',
    link: 'https://tailwindcss.com',
  },
  {
    logo: framerMotion,
    title: 'Framer Motion',
    description: 'Complete documentation of the Framer Motion animation library.',
    link: 'https://framermotion.framer.website/?utm_source=chatgpt.com',
  },
  {
    logo: pnpm,
    title: 'pnpm dlx',
    description:
      'Fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes.',
    link: 'https://pnpm.io/cli/dlx',
  },
  {
    logo: prettier,
    title: 'Prettier',
    description: 'An opinionated code formatter',
    link: 'https://prettier.io/',
  },
  {
    logo: eslint,
    title: 'Eslint',
    description: 'Find and fix problems in your JavaScript code',
    link: 'https://eslint.org/',
  },
  {
    logo: husky,
    title: 'Husky',
    description: 'Husky enhances your commits and more 🐶 woof!',
    link: 'https://typicode.github.io/husky/',
  },
];
