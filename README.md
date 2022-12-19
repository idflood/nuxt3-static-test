# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

This repository is intended to test payload extraction and the static hosting feature of Nuxt 3. It use [nuxt-grapqhl-client](https://nuxt-graphql-client.web.app/) to fetch data from a public graphql endpoint.

The master branch has the minimal configuration from the [static hosting documentation](https://nuxt.com/docs/getting-started/deployment#static-hosting). (ssr: false, and use npx nuxi generate command)



## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
