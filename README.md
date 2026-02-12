# Autohive Car Dealership

A modern, high-performance car dealership website built with React, Vite, Framer Motion, and Tailwind CSS.

## Features

- **Hero Section**: Dynamic 3D-perspective car carousel (Front/Side/Back views).
- **Animations**: Staggered text entrances, glassmorphism effects, and smooth transitions using Framer Motion.
- **Responsive Design**: Fully responsive layout with mobile-optimized navigation.
- **Modern UI**: Custom "Orbitron" typography and "Bad Ass" aesthetic.

## Project Structure

- `src/components/Hero.jsx`: Main landing component with car carousel and animations.
- `src/components/Navbar.jsx`: Responsive, glass-effect navigation bar.
- `src/index.css`: Global styles, custom fonts, and Tailwind directives.

## Setup Instructions

Since this project uses modern web technologies, you need to install the dependencies before running it.

1.  **Install Dependencies**:
    Open your terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    Start the local server:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    To create a production build:
    ```bash
    npm run build
    ```

## Notes

- **Images**: The car images in the carousel are currently styled placeholders using CSS and text. You can replace the `CAR_VIEWS` content in `Hero.jsx` with actual image paths once you have them.
- **Fonts**: The project uses `Inter` and `Orbitron` fonts via Google Fonts (imported in `index.css`).
