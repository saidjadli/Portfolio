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

### 3. Contact Form Setup

The contact form uses [Resend](https://resend.com/) to send emails. To enable it:

#### Local Development

1. **Sign up for Resend**:
   - Go to [https://resend.com](https://resend.com) and create a free account.
   - Navigate to API Keys and create a new API key.

2. **Create `.env.local`**:
   ```bash
   cp .env.example .env.local
   ```

3. **Add your credentials** to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_TO_EMAIL=your@email.com
   CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
   ```

4. **Restart the dev server** for changes to take effect.

#### Production (Vercel)

1. Go to your project in Vercel.
2. Navigate to **Settings → Environment Variables**.
3. Add the following variables:
   - `RESEND_API_KEY` = Your Resend API key
   - `CONTACT_TO_EMAIL` = Your email address (where messages will be sent)
   - `CONTACT_FROM_EMAIL` = `Portfolio <onboarding@resend.dev>`
4. Redeploy your project.

> **Note**: For production, consider [verifying your domain](https://resend.com/docs/dashboard/domains/introduction) in Resend and using a custom FROM address like `contact@yourdomain.com` instead of `onboarding@resend.dev` for better deliverability.

### 5. Resume
Replace the `public/resume.pdf` file with your actual resume PDF.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Deploy! (No special configuration needed).

## License

MIT
