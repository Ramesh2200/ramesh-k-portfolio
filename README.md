# RAMESH K — Portfolio

A high-performance single-page developer portfolio showcasing full-stack Java, Spring Boot, and React engineering projects.

**Live site:** [https://rameshwork.online/](https://rameshwork.online/)

## Tech Stack
- **Core:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS, WebGL (React Bits Fluid SplashCursor)
- **Forms & Integration:** EmailJS (`@emailjs/browser`)

## Run Locally
Clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables
Create a `.env.local` file in the root directory with your EmailJS credentials:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

If these variables are omitted, the contact form automatically falls back to pre-composed mailto links.

---

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
