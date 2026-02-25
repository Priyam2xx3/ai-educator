# ✦ AI Educator Platform

Welcome to the **AI Educator Platform**, a premium, aggressively modern educational web application designed to teach the fundamentals and advanced architectures of Artificial Intelligence.

## 🚀 Phase 3: The React Overhaul

This repository has undergone a massive "Phase 3" upgrade, transitioning from a basic, static HTML/Vanilla JS website into a blazing fast, highly dynamic **React Single Page Application (SPA)** built with Vite.

### ✨ Key Features in this Iteration:

1. **Modern React Architecture:** Entirely rewritten using modular React components (`Navbar.jsx`, `Layout.jsx`, `Sidebar.jsx`, etc.) and `react-router-dom` for seamless, reload-free navigation between modules.
2. **Aggressive "Glowing" UI:** The design system was completely overhauled. We abandoned flat design in favor of "Dark Mode by Default", featuring deep space backgrounds, stark glassmorphism panels, and vibrant, neon CSS `drop-shadows` that react to hover states.
3. **Multi-Theme Engine:** Implemented a robust CSS Variable foundation allowing users to instantly switch between 4 curated vibes:
   - 🌙 **Neon Dark (Default):** Deep dark mode with icy blue accents.
   - 💜 **Synthwave:** Retrowave vibes with hyper-pink and purple glows.
   - 🌊 **Deep Ocean:** Rich, soothing navy blues and cyans.
   - ☀️ **Light:** For those who prefer a traditional, high-contrast reading environment.
4. **Fluid Animations:** Integrated `framer-motion` to ensure every page transition, button click, and modal open feels weighty, deliberate, and premium.
5. **Strict interactive Quizzes:** Every technical module now ends with a `StrictQuiz` component. To ensure true mastery, **a single incorrect answer forces the user to restart the quiz from Question 1**. Success states and Failure states feature dynamic bounce and pulse animations.
6. **Deep Conceptual Content:** Content was aggressively expanded from "1-line encyclopedia definitions" into deep, paragraph-by-paragraph analogies explaining *why* these models work (e.g., explaining the QKV metaphor for Transformers, or Backpropagation for Deep Learning).
7. **Visual Integration:** High-quality, topical imagery was sourced and embedded directly into the React components to break up text walls.

---

## 📚 Curriculum Modules

The platform guides engineers from the fundamentals up to the cutting-edge frontier:

- **Machine Learning**: Random Forests, Regression, and the Bias-Variance tradeoff.
- **Deep Learning**: Neural Networks, CNNs, and the Vanishing Gradient problem.
- **Transformers**: The "Attention" mechanism that shattered RNNs.
- **LLMs (Large Language Models)**: Pre-training, SFT, RLHF, and Parameters.
- **RAG (Retrieval-Augmented Generation)**: Vector Databases, Embeddings, and Chunking.
- **AI Agents**: Autonomous tool usage and the ReAct (Reason/Act) logic loop.
- **Algorithms**: AI Search methods like A* and Minimax.

---

## 🛠️ Local Development Setup

To run this platform locally on your machine, you need `Node.js` installed.

1. **Clone the repository.**
2. **Navigate to the directory:**
   ```bash
   cd ai-educator
   ```
3. **Install Dependencies:**
   This project uses Vite, React, Framer Motion, React Router, and Lucide Icons.
   ```bash
   npm install
   ```
4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *Vite will instantly launch a local server, typically at `http://localhost:5173`.*

---

## 🌐 Deployment (Vercel)

This application is designed to be effortlessly deployed to **Vercel** as a React SPA frontend.

### Vercel Configuration Details:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

*Note on Routing:* Because this is a Single Page Application using `react-router-dom`, if you refresh a page (like `/llm`) on the live Vercel server, it might return a 404. To fix this, ensure Vercel is configured to rewrite all routes to `index.html`. You can add a `vercel.json` file in the root directory:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---
*Built for the Curriculum of the Future.*
