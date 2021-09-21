# NUS FinTech Website Frontend

This repository contains the code for the frontend of the official NUS FinTech Website.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instructions for Setup:
1. Ensure NodeJS, NPM and Yarn are installed in your workstation
2. Clone this repository
  
        git clone https://github.com/NUS-Fintech-Society/SD_Fintech_Website.git

3. Install all module dependencies

        yarn
    
4. Add a .env.local file in the project root with the following content:

        // production database
        NEXT_PUBLIC_BACKEND_URL=https://data-eye-289210.df.r.appspot.com/

5. Run the development server

        yarn dev

6. Access the local version of the website at [http://localhost:3000](http://localhost:3000). You can start development by modifying pages/index.js. The website will hot-reload as you edit the file.

## Instructions for Pull Requests:
1. Ensure the branch you are working on is named semantically based on the task at hand. Eg. **add-faq-page**
2. Submit the Pull Request with **master** as the target branch.
3. If any, link the GitHub issue to the Pull Request.
4. Once all checks have passed, view the Preview website and verify if changes are as expected.
5. Assign a reviewer to review the Pull Request.
6. Once the reviewer has approved the Pull Request, merge it and delete the source branch.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The project is deployed on the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

The domain is mapped to the nus computing domain at https://www.fintechsociety.comp.nus.edu.sg/.

For help to request for a change in hosting ip for existing hostnames managed by SOC, contact Sing Ing at limsi@nus.edu.sg.

## Documentation

Refer to this [link](https://nus-fintech-society.github.io/SD_Fintech_Website/) for NUS Fintech technical documentation. (Work in progress)

Once PR is merged to master, changes made to **docs** folder will be reflected in the github page website.

[just-the-docs](https://github.com/pmarsceill/just-the-docs) is used for template's documentation. You should also install the necessary [Jekyll tools](https://jekyllrb.com/docs/configuration/) in order to contribute in this section.

1. Running Jekyll locally:
  
        bundle exec jekyll serve --config _config_local.yml

2. Access [http://localhost:4000](http://localhost:4000) on the browser