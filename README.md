<div align="center">
<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=50&duration=3000&pause=1000&color=10B981&center=true&vCenter=true&width=1200&height=100&lines=Ruchit+Das;Architecting+Intelligence;Generative+AI+%E2%80%A2+Computer+Vision;Full+Stack+Engineering" alt="Typing SVG" />

  <br />
  
  # ⚡ Ruchit Das | Architect of Intelligence
  
  <p align="center">
    <b>Generative AI</b> • <b>Computer Vision</b> • <b>Full Stack Engineering</b>
  </p>

  [![Resume](https://img.shields.io/badge/📄_View_Resume-FF5722?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/file/d/1qHVlOSP53cTe6fq6ODfOA3-j96dgk2eu/view?usp=sharing)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ruchit-das-3b6a8a252)
  [![Mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ruchitdas36@gmail.com)
  [![Google AI Studio](https://img.shields.io/badge/✨_Built_with-Google_AI_Studio-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)

</div>

---

## 🌌 About The Project

A **Dark Futurist** portfolio designed to bridge the gap between raw algorithms and human experience. This project showcases my work in AI Engineering, featuring immersive 3D environments, custom shaders, and a seamless React-based UI.

> *"Architecting intelligence. Bridging the gap between raw algorithms and human experience."*

### ✨ Key Features

* **🔮 Immersive 3D Backgrounds** - Custom WebGL shaders powered by `Three.js` & `React Three Fiber`.
* **🤖 Interactive Elements** - 3D models integrated via `Spline` for a futuristic feel.
* **⚡ High Performance** - Built on `Vite` for lightning-fast HMR and production builds.
* **🎨 Glassmorphism UI** - Modern transparency effects using `Tailwind CSS` and `Backdrop Filters`.
* **🎭 Smooth Animations** - Orchestrated entry and hover effects with `Framer Motion`.

---

## ⚡ Performance Engineering

This portfolio isn't just about looks; it's engineered for speed and efficiency.

| Feature | Implementation Details |
| :--- | :--- |
| **Smart Lazy Loading** | Heavy 3D assets (Spline models) are lazily loaded only when they enter the viewport using `IntersectionObserver`, reducing initial TTI. |
| **Adaptive Rendering** | Canvas Device Pixel Ratio (DPR) is capped at 1.5x to prevent GPU overload on Retina/4K displays without sacrificing quality. |
| **Shader Throttling** | Background shaders are throttled to 30fps using `useFrame` logic, reducing GPU consumption by ~50% while maintaining visual smoothness. |
| **Network Optimization** | Critical assets from external CDNs (Spline, esm.sh) are pre-connected via `<link rel="preconnect">` to slash DNS latency. |

---

## 🔒 Security

Built with security-first principles to ensure reliability and safety.

*   **Credential Protection**: Environment variables and API keys are strictly managed via `import.meta.env` and excluded from client bundles.
*   **XSS Mitigation**: Dynamic components implement strict input sanitization to prevent Cross-Site Scripting attacks.
*   **Dependency Management**: Regular audits of `npm` dependencies to mitigate supply chain risks.

---

## 🛠️ Tech Stack

Built with the modern web's most powerful tools and accelerated by AI.

| Domain | Technologies |
| :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide_Icons-F05032?style=flat&logo=adobelist&logoColor=white) |
| **3D & Animation** | ![Three.js](https://img.shields.io/badge/Three.js-black?style=flat&logo=three.js&logoColor=white) ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) ![Spline](https://img.shields.io/badge/Spline-Design-pink?style=flat) |
| **Development** | ![Google AI Studio](https://img.shields.io/badge/Google_AI_Studio-4285F4?style=flat&logo=google&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) |

---

## 🚀 Run Locally

Clone the project and start the development server in seconds.

**Prerequisites:** `Node.js` (v18+)

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rcidshacker/Porfolio.git
    cd Porfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env.local` file in the root directory (optional):
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Start the app**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```bash
├── 📁 components      # React components
│   ├── 📁 ui          # Reusable UI elements (Buttons, Cards, Shaders)
│   ├── Background3D.tsx  # The shader canvas (Persistent across routes)
│   └── Hero.tsx       # Main landing section
├── 📁 pages           # Route pages (Home, UI Ideas)
├── 📁 lib             # Utilities (Tailwind merge, clsx)
├── 📄 App.tsx         # Main application layout
├── 📄 index.tsx       # Entry point & Router setup
└── 📄 vite.config.ts  # Vite configuration
```

<p align="center"> Crafted with 🖤 by Ruchit Das

© 2025 All Rights Reserved </p>
