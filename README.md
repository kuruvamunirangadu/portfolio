# 3D Portfolio Website

Interactive 3D portfolio for **Munirangadu Kuruva** showcasing AI-first products, full-stack engineering, and community tech initiatives.

## 🔗 Live Link

**👉 [Visit Live Portfolio](https://portfolio-orcin-tau-65.vercel.app)**

## ✨ Why It Stands Out

- **Immersive visuals** powered by Three.js canvases (desktop rig, planet, particle bursts, matrix rain, wave fields).
- **Motion-rich storytelling** with Framer Motion, glitch typography, typewriter hooks, and animated scroll progress cues.
- **AI-centric narrative** weaving together ONNX pipelines, NLP, computer vision, IoT, and data storytelling initiatives.
- **Conversion-ready contact flow** featuring EmailJS integration, real-time validation, and social media quick links.
- **Content automation friendly** constants file centralizes services, experiences, certifications, and project metadata.

## 🧠 Highlights At A Glance

- Hero section blends animated profile halo, responsive parallax, and AI mantra pulled from a custom typewriter hook.
- About section pairs glitch headers with GitHub activity cards and multi-lingual, impact-driven storytelling.
- Experience timeline and certifications are populated from structured data for easy resume updates.
- Works carousel surfaces flagship repos such as SizeFit AI, Virtual Try-On Avatar, and Solar Tracking System.
- Utility components (custom cursor, particle bursts, terminal window) are opt-in via modular imports.

## 🚀 Quick Start

```bash
git clone https://github.com/kuruvamunirangadu/portfolio.git
cd portfolio
npm install
npm run dev -- --host
```

The dev server prints both `localhost` and LAN URLs (handy for mobile previews). Default port is `5173`.

### Production Build

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Core**: React 18, Vite, React Router DOM.
- **3D & Animation**: Three.js via `@react-three/fiber` and `@react-three/drei`, Framer Motion.
- **Styling**: Tailwind CSS, PostCSS, custom keyframes, utility styles.
- **Tooling**: ESLint, EmailJS, React Icons, React Vertical Timeline.

## 🗂️ Project Structure

```
portfolio/
 public/
   desktop_pc/       # 3D model assets
   planet/           # Planet model assets
   Logo1.png         # Primary logo
   Profile.jpg       # Hero profile image
   resume.pdf        # Downloadable resume
 src/
   assets/           # Importable icons and images
   components/       # UI building blocks
     canvas/         # Three.js scenes (desktop, stars, waves, etc.)
   constants/        # Data for services, experiences, projects
   hoc/              # Section wrapper utilities
   hooks/            # Custom hooks (typewriter, cursor helpers)
   utils/            # Animation variants and helpers
   App.jsx           # Route composition
   main.jsx          # Entry point
   styles.js         # Shared style tokens
   index.css         # Global Tailwind layer
 configuration files (Vite, Tailwind, PostCSS)
```

## 📚 Site Sections

1. **Hero** – Animated introduction, call-to-action buttons, and social links.
2. **About** – Narrative profile, achievements list, GitHub stats card.
3. **Skills** – Interactive tech orbit showing primary stacks and tooling.
4. **Experience** – Timeline of roles at ADM Education, Krislynx LLP, and Jamuna Foundation.
5. **Projects** – Gallery of AI, IoT, and full-stack builds with repo links.
6. **Certifications** – Academic milestones plus Power BI upskilling credential.
7. **Contact** – EmailJS form, direct email, and WhatsApp/phone touchpoints.

## 💼 Experience Snapshot

- **Krislynx LLP – FullStack Developer & UI/UX Lead**: TradeSphere Global platform, student-parent portal, Power BI insight layers.
- **ADM Education & Welfare Society – Content Writing Intern**: Community storytelling, campaign amplification, cross-channel assets.
- **Jamuna Foundation – Web Developer**: Donation tools, educational quiz systems, volunteer automation flows.

## 🔍 Featured Projects

- **SizeFit AI** – ONNX-powered e-commerce fit prediction pipeline.
- **Virtual Try-On Avatar Platform** – Next.js + FastAPI garment simulation with physics-based draping.
- **Multi-Task Emotion & Safety Classification** – NLP stack covering emotions, VAD, safety filters, and style detection.
- **Solar Tracking System** – Computer vision-guided solar array automation.
- **my-ai-assistant** – Voice-enabled assistant combining OpenAI APIs with task automation.

Full project list lives in `src/constants/index.js` and feeds the Works carousel automatically.

## 📬 Contact

- Email: `kuruvamunirangadu.2005@gmail.com`
- LinkedIn: [Munirangadu Kuruva](https://www.linkedin.com/in/munirangadu-kuruva)
- GitHub: [kuruvamunirangadu](https://github.com/kuruvamunirangadu)

## 📨 Feedback & Contributions

Issues and pull requests are welcome. Feel free to file feature ideas, report bugs, or open discussions in the GitHub repository.

## 📝 License

Released under the MIT License. See [`LICENSE`](LICENSE) for full text.

---

**Made with care by Munirangadu Kuruva**
