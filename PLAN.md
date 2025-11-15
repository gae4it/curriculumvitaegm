# PLAN

## Project Restructuring Plan for Astro CV

### 1. Analyze and Collect Demo Components

- Review all existing demo pages in `src/pages/`
- Extract and collect all components used in the demos
- Create a single `components.astro` page including all demo components with usage examples

### 2. Remove Demo Pages

- Delete all demo pages from `src/pages/` except for the home page (`index.astro`)

### 3. Create Home Page (`index.astro`)

- Structure the page as a single page application
- Insert all CV content (from curriculum-vitae.md) directly into the home page
- Use Tailwind CSS for structure and style
- No external templates or content files
- Sections:
  - Header with name, title, contacts
  - Languages
  - Work Experience (with timeline)
  - Education (cards)
  - Professional Roles (large slider cards)
  - Soft Skills (container with emoji)
  - Portfolio (card slides with image and details)
  - My Projects Portfolio (card slides with image and details)

### 4. TypeScript Declarations

- Place all TypeScript declarations in a separate file (e.g., `types.d.ts`)

### 5. SEO and Privacy

- Remove/avoid all SEO features
- Completely block indexing by search engines and AI bots (robots.txt, meta tags, header)

### 6. Documentation

- `CHANGES.md`: list of completed and pending changes
- `README.md`: explanation of the project structure and choices

### 7. Design

- Creative structure and presentation
- Timeline for Work Experience
- Cards for Education
- Large slider cards for Professional Roles and Portfolio
- Soft Skills with emoji

---

**Note:**

- No personal data outside of `index.astro`
- All content and logic in the home page
- Demo components collected in `components.astro` for reference/reuse
