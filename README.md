# GitHub Repository Finder

A modern, responsive web app to search and explore GitHub repositories by keyword and language. Built with React, Material UI (MUI), Axios, and Vite.

## Features

- **Live GitHub Search:** Find repositories by keyword and programming language.
- **Sorting & Filtering:** Sort results by stars or forks, ascending or descending.
- **Custom Result Count:** Choose how many repositories to display.
- **Beautiful UI:** Fully responsive, dark-themed interface using MUI.
- **Repository Table:** View repository URL, name, and description in a clean table.
- **Vertical Scrolling:** Table supports vertical scrolling for large result sets.

## Screenshots

![App Screenshot](![image](https://github.com/user-attachments/assets/41c2ca79-1b88-4b9e-904c-8df5d63bf0a3))


## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/github-repo-finder.git
   cd github-repo-finder
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Usage
- Enter a keyword and programming language.
- Select sorting options (stars/forks, ascending/descending).
- Set the number of results to display.
- Click **Search** to view repositories in the table below.
- Click on a repository URL to open it on GitHub.

## Tech Stack
- **React** (with hooks)
- **Material UI (MUI)** for UI components and theming
- **Axios** for API requests
- **Vite** for fast development and build

## Customization
- You can easily change the default number of results or table columns in the code.
- The app uses MUI's dark theme by default. To switch to light mode, edit the theme in `App.jsx`.

## License
[MIT](LICENSE)

---

*Made with ❤️ using React and MUI.*
