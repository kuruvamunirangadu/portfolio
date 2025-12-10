# 3D Portfolio Website

Computer Science and Technology enthusiast building AI and full-stack solutions. Projects include solar tracking, smart traffic control, voice emotion recognition, animal detection, virtual try-on systems, and AI-powered e-commerce. Passionate about innovation, problem-solving, and scalable tech development.

A modern, interactive 3D portfolio website showcasing professional experience, skills, projects, and certifications with visual effects and polished animations.

## Description

This portfolio website is a cutting-edge web application built with React and Three.js, featuring immersive 3D graphics, smooth animations, and an engaging user experience. The site presents my professional journey as a Full-Stack Developer and Integrated M.Tech (CSE) student.

### Key Features

- **3D Interactive Elements**: Animated 3D models including desktop PCs, planets, and floating objects using Three.js
- **Dynamic Wave Background**: Real-time animated wave effects create a mesmerizing backdrop
- **Smooth Animations**: Framer Motion transitions and scroll-based animations
- **Custom Cursor Effects**: Interactive cursor with trailing effects and click ripples
- **Typewriter Effect**: Automated typing animation for skill descriptions
- **Matrix Rain Effect**: Cyberpunk-inspired visual effect layer
- **Terminal Window**: Terminal-style component for a developer aesthetic
- **Particle System**: Dynamic particle burst effects for interactivity
- **Scroll Progress Indicator**: Visual feedback for page scroll position
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Glitch Text Effects**: Eye-catching text animations
- **Floating Code Snippets**: Background code elements for developer branding

## Tech Stack

### Frontend Framework and Libraries
- **React 18**
- **Vite**
- **Three.js** (via @react-three/fiber and @react-three/drei)
- **Framer Motion**
- **React Router DOM**

### Styling
- **Tailwind CSS**
- **PostCSS**
- Custom CSS animations

### Additional Tools
- **React Icons**
- **React Vertical Timeline**
- **EmailJS**
- **ESLint**

## Project Structure

```
portfolio/
 public/
   desktop_pc/       # 3D model textures
   planet/           # Planet 3D model textures
   Logo1.png         # Website logo
   Profile.jpg       # Profile image
   resume.pdf        # Resume document
 src/
   assets/           # Image assets and icons
     company/        # Company logos
     tech/           # Technology icons
   components/       # React components
     canvas/         # 3D canvas components
   constants/        # Constants and data
   hoc/              # Higher-order components
   hooks/            # Custom React hooks
   utils/            # Utility functions
   App.jsx           # Main application component
   main.jsx          # Application entry point
   styles.js         # Style configuration
   index.css         # Global styles
 index.html          # HTML template
 package.json        # Dependencies and scripts
 vite.config.js      # Vite configuration
 tailwind.config.cjs # Tailwind CSS configuration
 postcss.config.cjs  # PostCSS configuration
```

## Sections

1. **Hero** - Animated introduction with profile picture, name, and social links
2. **About** - Professional overview and background
3. **Skills** - Technology stack with interactive 3D ball animations
4. **Experience** - Work history with vertical timeline
5. **Projects** - Portfolio of completed works with descriptions
6. **Certifications** - Academic highlights and achievements
7. **Contact** - Interactive contact form with EmailJS integration

## Installation and Setup

### Prerequisites
- Node.js (v18 or newer recommended)
- npm package manager

### Steps

1. Clone the repository:

```bash
git clone https://github.com/kuruvamunirangadu/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev -- --host
```

4. Open your browser and navigate to the URL printed in the terminal (defaults to `http://localhost:5173`).

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Performance Features

- **Code Splitting** for faster initial loads
- **Lazy Loading** for route-based bundles
- **Optimized Assets** with compressed images and textures
- **Hardware-Accelerated Animations** using CSS and Three.js
- **Responsive Images** tailored per device

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

- **Email**: kuruvamunirangadu.2005@gmail.com
- **LinkedIn**: [Munirangadu Kuruva](https://www.linkedin.com/in/munirangadu-kuruva)
- **GitHub**: [kuruvamunirangadu](https://github.com/kuruvamunirangadu)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Three.js community for 3D inspiration
- React Three Fiber for seamless React integration
- Framer Motion for powerful animation tools
- Tailwind CSS for rapid styling

---

**Made with care by Munirangadu Kuruva**
