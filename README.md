# Portfolio

A modern portfolio website built with React and Vite, showcasing projects, skills, and contact information. This project features multi-language support, responsive design, and a clean UI.

## Features
- Project showcase with images, tech stack, and live/demo links
- Multi-language support (English, Russian, Ukrainian)
- Responsive design using SASS
- Custom components for About, Skills, Projects, Contacts, and more
- Easy to add new projects via `src/consts/projects.js`

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
```powershell
npm install
```

### Running the Development Server
```powershell
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

## Project Structure
```
src/
  components/      # Reusable React components
  consts/          # Project, tech, and media constants
  helpers/         # Utility functions
  pages/           # Page-level components
  assets/          # Images, fonts, icons
  styles/          # SASS styles
public/            # Static files
index.html         # Main HTML file
vite.config.js     # Vite configuration
```

## Adding a Project
Edit `src/consts/projects.js` and add your project in the following format:
```js
{
  name: "Fastlinky",
  button: {
    name: "Live",
    url: "https://fastlinky.com/"
  },
  techs: ["PHP", "MySql", "JS", "Bootstrap"],
  hasImage: true,
  description: "A fast link shortener and manager."
}
```

## Customization
- Update styles in `src/styles/`
- Add new languages in `src/assets/locales/`
- Add images to `src/assets/images/projects/`

## License
MIT

## Author
Dipak Majumdar
