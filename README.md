# 🍒 Welcome to CherryOnTech's v2 Website

We are a tech squad! We support each other as we learn and grow in our tech careers. We got the idea from [Mo Hampton](https://twitter.com/MoxieHampton)'s [JuneteenthConf](https://www.juneteenthconf.com/) talk, "[Breaking into Tech](https://www.youtube.com/watch?v=2N5fI5j-IIs)." Learn more about us in an upcoming blog post!

## 💻 Tech Stack

- This website is built using [Astro](https://astro.build/), a static site generator that allows different frameworks to be used. We are using [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/) specifically in this Astro project.

## ⚙️ Installation

1. Node.js is required (version 18.17.1, 20.3.0, or 22.0.0 or higher). It is recommended that you use [Node Version Manager](https://github.com/nvm-sh/nvm).
2. Package Manager like `pnpm` or `npm` to manage the dependencies. [Pnpm](https://pnpm.io/installation) is recommended.
3. Astro CLI runs the development server and other development tasks. See the [Astro documentation](https://docs.astro.build/en/install-and-setup/).
4. Clone the repo: `git clone https://github.com/cherryontech/website-v2.git`
5. Go to the source folder: `cd website-v2`
6. Install dependencies: `pnpm install` or `npm install`
7. Run the website locally: `pnpm run dev` or `npm run dev`
8. Visit localhost at http://localhost:4321/

## 🚀 Project Structure

Below are some original notes from the Astro readme.

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🗣️ Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Deployment

We are using Netlify for deployment and you can view our live project [here](https://cotwebsitev2.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/38a539a0-803b-420d-ac59-1781c28e75e6/deploy-status)](https://app.netlify.com/projects/cotwebsitev2/deploys)

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
