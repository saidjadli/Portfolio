# How to Customize Quickly

Follow these steps to personalize your portfolio in under 10 minutes.

### 1. Update Profile Info
Edit `content/profile.json`:
- Change `"name"` and `"title"`.
- Update `"socials"` links.
- Replace `"pitch"` with your own bio.

### 2. Add Your Resume
- Rename your resume PDF to `resume.pdf`.
- Place it in the `public/` folder, replacing the existing file.

### 3. Add Key Projects
Edit `content/projects.json`. For each project:
- Unique `"slug"` (e.g., "my-awesome-project").
- Short `"summary"` for the card.
- Detailed `"description"` for the case study page.
- Add tech tags in `"tags"`.

### 4. Update Skills
Edit `content/skills.json` to reflect your actual tech stack.

### 5. Change Theme Color
Open `tailwind.config.ts` and change the `primary` color hex code:
```ts
colors: {
  primary: "#22C55E", // <-- Change this to your favorite color
}
```

### 6. Deployment
1. Push to GitHub.
2. Sign up at [Vercel.com](https://vercel.com).
3. Import your repo and click "Deploy".
