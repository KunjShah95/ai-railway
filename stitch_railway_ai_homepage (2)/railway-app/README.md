# Railway Vision AI - React Migration

This project has been migrated from HTML/Vanilla JS to React + Vite + Tailwind CSS.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

*   `src/components/`: Reusable UI components.
    *   `layout/`: Navbar, Footer.
    *   `home/`: Homepage sections.
    *   `about/`: About/Contact page sections.
    *   `technology/`: Technology Deep Dive sections.
    *   `analytics/`: Dashboard widgets.
    *   `use-cases/`: Use Case scenarios.
    *   `solution/`: Solution Overview components.
    *   `ui/`: Shadcn UI primitives.
*   `src/pages/`: Main page views (Home, AboutContact, Technology, Analytics, UseCases, Solution).
*   `src/App.jsx`: Main routing configuration.
*   `src/index.css`: Tailwind configuration and global styles/animations.

## Technologies

*   **Vite**: Build tool and dev server.
*   **React**: UI Library.
*   **Tailwind CSS**: Utility-first CSS framework.
*   **Shadcn UI**: Accessible component library.
*   **React Router DOM**: Client-side routing.
*   **Lucide React / Material Symbols**: Icons.

## Notes

*   3D effects and animations are implemented using CSS transforms and keyframes in `index.css`.
*   Font families: `Space Grotesk` (headings) and `Noto Sans` (body).
