# My Portfolio

My Portfolio is a personal web application project that I’ve developed to showcase my professional skills, work experience, and projects.

The portfolio includes sections such as:

- **About Me.** A brief introduction about myself.
- **Skills.** A detailed list of my up-to-date technical skills, broken down to front-end, back-end, cloud, databases, and other tools that I’m proficient in.
- **Work Experience.** A timeline of my work history, roles, responsibilities, and key achievements in each position.
- **Projects.** A showcase of my professional projects excluding personal projects, with descriptions, responsibilities, and technologies used. There are some technologies indicated in this section that are not displayed under skills. It means, that I have no longer used them, but remains in the working knowledge category.

You can access [the website here](https://rayandus.vercel.app) 🌐

## Project Overview

This project is built with:

<div style="display: flex; gap: 20px;">
    <div align="center">
        <img src="./public/nextjs.svg" width="50" height="50">
        <br />
        Nextjs
    </div>
    <div align="center">
        <img src="./public/reactjs.svg" width="50" height="50">
        <br />
        Reactjs
    </div>
    <div align="center">
        <img src="./public/typescript.svg" width="50" height="50">
        <br />
        Typescript
    </div>
    <div align="center">
        <img src="./public/tailwind.svg" width="50" height="50">
        <br />
        Tailwind CSS
    </div>
    <div align="center">
        <img src="./public/daisy-ui.svg" width="50" height="50">
        <br />
        DaisyUI
    </div>
</div>
<br />
<br />

This project is deployed in [Vercel](https://vercel.com/)

## Set-up Prerequisite

1. Node Version Manager (nvm)
1. Pnpm

## Setup

1. Clone [my-portfolio](https://github.com/rayandus/bid-portal-demo) repo in your local

1. Go to project root directory and install

   ```bash
   cd my-portfolio
   git checkout main
   nvm install
   pnpm install
   ```

1. Start the application

   ```bash
   pnpm start:dev
   ```

   > The app will run on port `3000`. E.g. `http://localhost:3000`

   or

   ```bash
   pnpm start:dev -- --port 3000
   ```

   > Just replace `PORT=3000` to your choice of port
