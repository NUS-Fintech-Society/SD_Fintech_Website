# NUS FinTech Website Frontend

This repository contains the code for the frontend of the official NUS FinTech Website.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

1. Clone the repository and install the dependencies of the project.
```
npm install
```

2. Create a .env.local file and insert the backend url which can be obtained from the backend repository or the vercel project dashboard.
```
// production database
NEXT_PUBLIC_BACKEND_URL=data-eye-289210.df.r.appspot.com/

// local database => use this for development mode
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000/
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployed on Vercel

The project is deployed on the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

The domain is mapped to the nus computing domain at https://www.fintechsociety.comp.nus.edu.sg/.

## Hosting

For help to request for a change in hosting ip for existing hostnames managed by SOC, contact Sing Ing at limsi@nus.edu.sg
