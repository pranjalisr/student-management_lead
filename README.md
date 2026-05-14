# 🎓 Student Management Lead

A **student lead management system** built with **Next.js 15**, **React 19**, and **TypeScript**. Designed to track, manage, and organise student leads with a clean, accessible UI powered by Radix UI primitives and the cutting-edge **Tailwind CSS v4**.

---

## 📁 Project Structure

```
student-management_lead/
├── app/               # Next.js App Router pages & layouts
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions & helpers
├── public/            # Static assets
├── styles/            # Global CSS styles
├── eslint.config.mjs  # ESLint flat config (ESLint 9)
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS v4 configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata & dependencies
```

---

## 🛠️ Tech Stack

| Category        | Technology                            |
|-----------------|---------------------------------------|
| Framework       | Next.js 15.2.1                        |
| Language        | TypeScript 5                          |
| UI Library      | React 19                              |
| Styling         | Tailwind CSS **v4** + tailwindcss-animate |
| Component Kit   | Radix UI primitives                   |
| Icons           | Lucide React                          |
| Linting         | ESLint 9 (flat config)                |
| Package Manager | npm                                   |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/pranjalisr/student-management_lead.git
cd student-management_lead

# Install dependencies
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the app for production         |
| `npm run start`   | Start the production server          |
| `npm run lint`    | Run ESLint across the project        |

---

## ✨ Features

- 🎓 **Student lead tracking** — manage and monitor student enquiries and leads
- 🗂️ **Tabbed navigation** — organised views via Radix UI Tabs
- 📊 **Progress indicators** — visualise lead status with progress bars
- 🪪 **Student profiles** — avatar and detail views per student
- 💬 **Dialogs & modals** — add/edit student records with accessible dialogs
- 🔽 **Filtering & selection** — dropdown selects for sorting and filtering leads
- 🔘 **Toggle controls** — switch components for settings and status updates
- 💡 **Tooltips** — contextual hints throughout the UI
- 📱 **Fully responsive** — mobile-first layout
- ♿ **Accessible** — built entirely on Radix UI accessible primitives
- ⚡ **Tailwind CSS v4** — the latest generation of utility-first CSS

---

## 📦 Key Dependencies

| Package                       | Purpose                          |
|-------------------------------|----------------------------------|
| `next`                        | React framework (App Router)     |
| `react` / `react-dom`         | UI rendering                     |
| `tailwindcss` (v4)            | Utility-first CSS (latest gen)   |
| `@radix-ui/react-tabs`        | Tabbed navigation                |
| `@radix-ui/react-dialog`      | Modal dialogs                    |
| `@radix-ui/react-progress`    | Progress bar component           |
| `@radix-ui/react-select`      | Dropdown select menus            |
| `@radix-ui/react-avatar`      | Student profile avatars          |
| `@radix-ui/react-switch`      | Toggle switches                  |
| `@radix-ui/react-tooltip`     | Contextual tooltips              |
| `@radix-ui/react-separator`   | Section dividers                 |
| `lucide-react`                | Icon library                     |
| `clsx` + `tailwind-merge`     | Conditional class utilities      |
| `class-variance-authority`    | Component variant styling        |
| `tailwindcss-animate`         | CSS animation utilities          |

---

## 🚢 Deployment

Optimised for deployment on [Vercel](https://vercel.com/):

```bash
npm run build
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pranjalisr/student-management_lead)

---

## 👩‍💻 Author

**Pranjali** — [@pranjalisr](https://github.com/pranjalisr)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
