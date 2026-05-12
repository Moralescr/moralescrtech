# Moralescr Tech - Developer Portfolio

Welcome to the repository of my personal portfolio. This project showcases my work as a **Software Developer**, highlighting my experience, recent projects, and technical skills.

The site is designed to be ultra-fast, accessible, and features a modern dark-mode aesthetic, implementing web development best practices.

## 🚀 Technologies Used

This project is built with modern tools to ensure optimal performance and an exceptional user experience:

- **[Astro](https://astro.build/)**: Web framework optimized for speed and SEO, rendering static HTML and shipping minimal JavaScript to the client.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Utility-first CSS framework used for rapid and responsive styling, layouts, and animations.
- **TypeScript**: Static typing to ensure safe and maintainable code.
- **Web Components & Vanilla JS**: Client-side logic, animations, and interactions (such as the "Typewriter" effect on the home screen).
- **JSON**: Data management (services, events, technologies) separated from the UI for easy content updates.

## 📁 Project Structure

The source code is organized modularly for easy scalability:

```text
/
├── public/                 # Static assets accessed directly (favicon.svg, images)
├── src/
│   ├── assets/             # Astro-optimized static resources
│   ├── components/         # Modular and reusable components (Hero, Navbar, Footer, etc.)
│   ├── data/               # JSON files containing web content (services.json, events.json)
│   ├── layouts/            # Base layouts (Layout.astro with Head, Meta, and SEO tags)
│   ├── pages/              # Application routes (index.astro, projects.astro)
│   └── styles/             # Global styles and main Tailwind configuration
├── package.json            # Project dependencies and Node scripts
└── tsconfig.json           # Strict TypeScript configuration
```

## 🧞 Local Commands

If you want to run this project locally, make sure you have Node.js installed, clone the repository, and run the following commands in your terminal:

| Command           | Action                                                         |
| :---------------- | :------------------------------------------------------------- |
| `npm install`     | Installs project dependencies.                                 |
| `npm run dev`     | Starts the local development server at `localhost:4321`.       |
| `npm run build`   | Builds the production-ready site into the `./dist/` directory. |
| `npm run preview` | Previews the production build locally before deploying.        |

## 👨‍💻 Author

**Adrián Morales**
_Web Developer / Software Engineer_

- GitHub: [Moralescr](https://github.com/Moralescr)
- Contact: [moralescrtech@gmail.com](mailto:moralescrtech@gmail.com)

---

_Made with ☕ and code._
