# Portfolio
## Author
Dipak Majumdar

## License
MIT

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
- Add images to `public/assets/images/`


## Deploying to Oracle Cloud (Compute)

This repository includes a GitHub Actions workflow that builds the site and deploys `./dist` to an Oracle Cloud Compute instance via SCP/SSH.

Workflow: `.github/workflows/deploy-oci-vm.yml`

Required repository secrets (add in GitHub → Settings → Secrets and variables → Actions):

- `OCI_VM_HOST` — your compute public IP or hostname
- `OCI_VM_USER` — SSH user that will receive the files (e.g. `opc` or `ubuntu`)
- `SSH_PRIVATE_KEY` — the private SSH key used to authenticate (PEM/ed25519 content)
- `OCI_VM_PATH` — remote path on the VM where to upload the static files (e.g. `/var/www/your-site`)
- `OCI_VM_PORT` — optional (defaults to 22)

How it works:

1. On push to `main` the action checks out the code, runs `npm ci`, builds the Vite site (`npm run build`) and uploads the `dist` contents to your VM using SCP.
2. The workflow can run optional remote commands (reload nginx, list files). It uses the same SSH key.

Notes:

- Ensure the SSH public key corresponding to `SSH_PRIVATE_KEY` is added to the target user's `~/.ssh/authorized_keys` on the OCI VM.
- The target directory should exist and be readable by the target user (or the workflow can upload to a temp directory then move with `sudo`).
- If you prefer to host the static site in Oracle Cloud Object Storage (OCI OSS) and serve via a CDN, I can provide an alternative workflow that uses the OCI CLI and API keys.
