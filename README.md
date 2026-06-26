# Djordy Fernando — Portfolio Website

A premium, modern portfolio website built using **Next.js 16**, **React**, and **Tailwind CSS**. It serves as a digital showcase for my background as an IT Technical Consultant at PT Indonesia Global Solusindo (ISGS) and Computer Science Student at BINUS University.

## 🚀 Key Features

* **Interactive Directory Shell**: A custom client-side terminal emulator component allowing visitors to type commands (e.g., `help`, `about`, `projects`, `skills`, `theme`, `clear`) to navigate the site.
* **Modern Design System**: Built with clean CSS, dark/light themes, sleek animations, and responsive Tailwind layouts.
* **Interactive Projects & Certifications**: Grid lists detailing development works and professional industry certifications (with external credential links and hover micro-animations).
* **Automated Static Deployment**: Fully optimized static export integration configured for GitHub Pages using GitHub Actions.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Static Export
```bash
npm run build
```
This generates optimized static HTML/CSS/JS files inside the `/out` directory.

---

## 📦 Deployment (GitHub Pages)

This project has an automated GitHub Actions deployment pipeline configured at `.github/workflows/deploy.yml`. 

Every time code is pushed to the `main` branch, GitHub will:
1. Checkout the code.
2. Build the Next.js static files.
3. Automatically deploy them to GitHub Pages.

> **Note**: If hosting on the default GitHub URL (`https://jordydydy.github.io/portfolio/`), make sure to configure `basePath: '/portfolio'` inside `next.config.ts` so asset paths resolve correctly. If utilizing a custom domain (e.g., `https://djordy.dev`), no `basePath` changes are required.
