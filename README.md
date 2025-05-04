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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

Okay, here's the expanded comparison table including Axios, `fetch`, Superagent, Request, Ky, Unirest, Redaxios, and Zenrows. Note that "Request" is generally considered deprecated, and Unirest is also not as actively maintained as some other options. Zenrows is quite different as it is a web scraping API service.

| Feature                  | Axios                             | `fetch` (Built-in)                  | Superagent                           | Request (Deprecated)           | Ky                                  | Unirest                        | Redaxios                            | ZenRows (Web Scraping API) |
| ------------------------ | --------------------------------- | ----------------------------------- | ------------------------------------ | ------------------------------ | ----------------------------------- | ------------------------------ | ----------------------------------- | -------------------------- |
| **Promise-based**        | Yes                               | Yes                                 | Yes                                  | Yes                            | Yes                                 | Yes                            | Yes                                 | Yes                        |
| **Automatic JSON**       | Yes (for request & response data) | No (requires manual parsing)        | Yes                                  | Yes                            | Yes                                 | Yes                            | Yes                                 | Yes                        |
| **Environment**          | Browser & Node.js                 | Browser                             | Browser & Node.js                    | Node.js                        | Browser & Node.js                   | Multi-language (via libraries) | Browser & Node.js                   | Server-side API            |
| **Interceptors**         | Yes                               | No                                  | No                                   | No                             | No                                  | No                             | No                                  | Yes                        |
| **Request Cancellation** | Yes                               | Yes (via `AbortController`)         | Yes                                  | Yes                            | Yes (via `AbortController`)         | No                             | Yes (via `AbortController`)         | Yes                        |
| **XSRF Protection**      | Yes (built-in)                    | No (requires manual implementation) | No (requires manual implementation)  | No                             | No (requires manual implementation) | No                             | No (requires manual implementation) | Yes                        |
| **Progress Tracking**    | Yes                               | No                                  | Yes                                  | Yes                            | Yes                                 | Yes                            | No                                  | No                         |
| **Retry Mechanism**      | No (requires external library)    | No (requires external library)      | No (requires external library)       | No (requires external library) | Yes (built-in)                      | No                             | No (requires external library)      | Yes                        |
| **Timeout**              | Yes                               | Yes (via `AbortController`)         | Yes                                  | Yes                            | Yes                                 | Yes                            | Yes                                 | Yes                        |
| **Redirect Handling**    | Browser handles automatically     | Limited control                     | Browser handles automatically        | Follows by default             | Limited control                     | Follows by default             | Browser handles automatically       | Server handles redirects   |
| **Streaming Support**    | No                                | Yes                                 | No                                   | Yes                            | Yes                                 | Yes                            | No                                  | Yes                        |
| **Maintainability**      | Mature, widely used               | Built-in, always available          | Mature, but less actively maintained | Deprecated                     | Modern, actively maintained         | Less actively maintained       | Lightweight, actively maintained    | Actively Maintained        |
| **Bundle Size**          | Medium (install size)             | Small (built-in)                    | Medium (install size)                | Large (install size)           | Small to Medium (install size)      | Varies by language             | Very Small (install size)           | N/A (API service)          |
| **Syntax**               | Intuitive, easy to use            | More verbose than Axios             | Relatively easy to use               | Callback-based, complex        | Modern, clean API                   | Varies by language             | Similar to Axios                    | API calls                  |
| **Web Scraping Focus**   | No                                | No                                  | No                                   | No                             | No                                  | No                             | No                                  | Yes                        |

Key Considerations:

- **Request (Deprecated):** While included for completeness, be aware that the `request` library is deprecated and not recommended for new projects.
- **ZenRows (Web Scraping API):** This is fundamentally different from the other libraries. It's a paid web scraping API service, meaning you send requests to ZenRows' servers, and they handle the complexities of scraping websites (handling proxies, bypassing anti-bot measures, etc.) and return structured data to you. It's not a direct HTTP client library like the others.
- **Unirest:** Unirest offers libraries in multiple languages (Java, PHP, Python, etc.). The "Environment" and "Syntax" will vary depending on the specific language you are using.
- **Redaxios:** Redaxios is designed to be a very small Axios alternative.
