# Data Science Portfolio

A modern, high-performance portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Designed for Data Scientists and ML Engineers to showcase their work with a premium, tech-focused aesthetic.

## Features

- **Modern Design**: Dark mode with neon green accents, glassmorphism effects, and smooth animations.
- **Content-First**: Manage your profile, projects, experience, and skills using simple JSON files. No CMS required.
- **Project Case Studies**: Dedicated pages for detailed project walkthroughs (Problem, Approach, Results, etc.).
- **Filtering**: Filter projects by category and search by keywords.
- **SEO Optimized**: Built-in metadata validation and semantic HTML.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Update Content
All content is stored in the `content/` directory. Modify these JSON files to update your site:

- **Profile**: `content/profile.json` (Name, Title, Social Links)
- **Projects**: `content/projects.json` (Add your projects here)
- **Experience**: `content/experience.json` (Work history)
- **Skills**: `content/skills.json` (Technical skills)
- **Education**: `content/education.json` (Academic background)

### 2. Change Colors
The theme is defined in `tailwind.config.ts`. To change the primary color (currently Neon Green), update the `primary` value:

```ts
theme: {
  extend: {
    colors: {
      primary: "#22C55E", // Change this hex code
      // ...
    },
  },
},
```

### 3. Contact Form
The contact form in `app/contact/page.tsx` is currently a demo. To make it functional, you can:
- Use [Formspree](https://formspree.io/): Replace the form with their snippet.
- Use [Resend](https://resend.com/): Implement a server action to send emails.

### 4. Resume
Replace the `public/resume.pdf` file with your actual resume PDF.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Deploy! (No special configuration needed).

## License

MIT
