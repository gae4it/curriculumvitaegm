# CurriculumVitae – Personal Portfolio & CV

CurriculumVitae is a modern, privacy-friendly, and accessible portfolio and CV site built with Astro, Tailwind CSS, and TypeScript. It is designed for educational and demonstration purposes, with a focus on clean code, accessibility, and legal compliance for non-commercial use.

## Features

- Static site generation with Astro 5.x
- Utility-first styling with Tailwind CSS (including dark mode)
- TypeScript for type safety
- Responsive and mobile-first design
- Accessible markup and descriptive alt text
- No tracking, no cookies, no analytics
- No forms or data collection
- Legal Notice and Privacy Policy for educational/non-commercial use
- Robots noindex: not indexed by search engines
- Visual badges for skills and technologies
- Portfolio sections: Websites, Projects, Graphic Design

## Project Structure

```
├── public/
│   └── images/           # Portfolio and graphic assets
├── src/
│   ├── components/       # UI and layout components
│   ├── layouts/          # Page layouts (PageLayout.astro)
│   ├── pages/            # Main pages (index, portfolio, privacy, legal notice)
│   └── assets/           # Styles (tailwind.css), favicons, etc.
├── tailwind.config.js    # Tailwind CSS config
├── astro.config.ts       # Astro config
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview production build:
   ```sh
   npm run preview
   ```

## Legal & Privacy

- This site is for educational and personal demonstration only.
- No cookies, analytics, or tracking are used.
- No forms or user data collection.
- Legal Notice and Privacy Policy are static and reflect the non-commercial, educational nature of the site.
- Not indexed by search engines (robots noindex).

## Portfolio Content

- **Websites Portfolio**: Real-world and demo websites, with stack and field info.
- **Projects Portfolio**: Personal and demo projects, with stack and hosting info.
- **Graphic Design Portfolio**: Visual works, posters, business cards, and more.

## Technologies Used

- Astro
- Tailwind CSS
- TypeScript
- Node.js
- Modern CSS/HTML

## Scripts

- `npm run dev` – Start local dev server
- `npm run build` – Build static site
- `npm run preview` – Preview production build
- `npm run lint` – Lint code
- `npm run format` – Format code

## License

MIT License. See [LICENSE.md](LICENSE.md).

---

> **Note:** This project is a sample portfolio/CV for learning and demonstration. Not for commercial use. All content and images are for educational purposes only.
