# ✦ Shorya Pratap Rathore — Personal Portfolio

![Next.js 16](https://img.shields.io/badge/Next.js-16.4.0-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)

A modern, high-performance personal engineering portfolio designed with a hybrid **Editorial Dark Mode** aesthetic. Built with Next.js 16 (App Router & Turbopack), React 19, Tailwind CSS v4, and custom typography.

---

## 🎨 Design Philosophy & Highlights

- **Editorial Dark Mode**: High-end digital magazine aesthetic integrated with technical minimalism.
- **Custom Studio Wall Background**: Ambient fixed diagonal gradient (`#26211c` -> `#121211`) providing a warm studio portrait ambiance.
- **Architectural Stepped Framing**: Custom 90° curved border containers (`rounded-bl-3xl` and `rounded-br-3xl`) framing content and portrait imagery flush with the editorial baseline.
- **Custom Typography**:
  - **Main Title**: Custom local **Gued** font (`Gued.otf` / `Gued - Bold.otf`) with an unfilled outline stroke effect on the middle name (`Pratap`).
  - **Subtext & Technical Labels**: **Space Grotesk** display & mono typography.
- **Zero Heavy Bloat**: Locked dark theme without unnecessary 3D canvas libraries or heavy particles for lightning-fast page loads.

---

## 🏗️ Project Architecture & Layout Sections

1. `01 // HERO`: Monolithic typography lockup (**Shorya Pratap Rathore**), bio summary, resume download CTAs, and editorial portrait.
2. `02 // METRICS & STATS`: Bento-style grid container for live GitHub contributions and LeetCode statistical counters.
3. `03 // CASE STUDIES`: Engineering report case study blocks detailing Problem, Architecture, and DevOps.
4. `04 // TECH STACK`: Technical capabilities and stack grid.
5. `05 // CONTACT`: Minimalist center-aligned footer block.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm / pnpm / yarn

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/shoryapratap/shorya-portfolio.git

# 2. Navigate to project directory
cd shorya-portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Verification

To create an optimized production build:

```bash
npm run build
```

To run ESLint checks:

```bash
npm run lint
```

---

## 📂 Folder Structure

```
shorya-portfolio/
├── public/              # Public assets (profile photo, icons)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css  # Editorial CSS theme & gradient background
│   │   ├── layout.tsx   # Root layout & font configuration (Gued + Space Grotesk)
│   │   └── page.tsx     # Main portfolio landing page
│   └── fonts/           # Local font files (Gued.otf, Gued - Bold.otf)
├── next.config.ts       # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📄 License & Credits

Developed by **Shorya Pratap Rathore**. All rights reserved.
