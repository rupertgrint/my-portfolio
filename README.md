# Personal Portfolio

A modern, responsive portfolio website showcasing my journey as a software engineer, built with Next.js 15 and React 19.

🌐 **Live Demo**: [hyun-park.vercel.app](https://hyun-park.vercel.app)

## 🚀 About

This portfolio represents my transition from education and design into software engineering. It features a clean, minimalist design that highlights my technical skills, project work, and professional background. The site includes dynamic animations, dark/light mode toggle, and a carefully curated selection of projects that demonstrate my full-stack development capabilities.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Dark/Light Theme**: Seamless theme switching with persistent user preference
- **Interactive Animations**: Smooth transitions and floating tech stack icons
- **Project Showcase**: Dynamic project cards with detailed descriptions and tech stacks
- **Modern UI/UX**: Clean, professional design with attention to typography and spacing
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **TypeScript**: Fully typed codebase for better developer experience and maintainability

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Theme Management**: next-themes
- **Deployment**: Vercel
- **Code Quality**: ESLint, TypeScript strict mode

## 📂 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── about-me-section/  # About section components
│   ├── footer-section/    # Footer components
│   ├── hero-section/      # Hero/landing section components
│   ├── project-section/   # Project showcase components
│   └── ui/                # Shared UI components
├── data/                  # Static data and configurations
│   ├── projects.ts        # Project information and metadata
│   ├── techIcons.ts       # Technology stack icons and animations
│   └── projectGradients.ts # Color schemes for project cards
└── utils/                 # Utility functions
    └── cn.ts              # Tailwind class name utility
```

## 🎨 Key Sections

### Hero Section

- Dynamic greeting with animated tech stack icons
- Professional introduction and current role
- Social links and contact information

### About Me

- Personal journey from education/design to software engineering
- Professional experience including frontend internship
- Educational background (Master's in Information Technology)
- Leadership experience and soft skills

### Projects Showcase

- **Hongchan Nihongo**: Japanese learning platform (React 19, Next.js 15, PostgreSQL)
- **Coffee Roastery E-commerce**: Full-stack e-commerce site (React, Firebase, Cloudinary)
- **YouTube Clone**: Video platform with API integration (React, YouTube Data API)
- **Momentum App**: Productivity web app (Vanilla JavaScript, Web APIs)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster page loads

## 🔧 Customization

The portfolio is designed to be easily customizable:

- **Projects**: Update `src/data/projects.ts` to add/modify projects
- **Tech Stack**: Modify `src/data/techIcons.ts` for different technologies
- **Styling**: Customize colors and themes in `tailwind.config.ts`
- **Content**: Update component files for different copy and messaging

## 📄 Resume

My detailed resume is available for download directly from the portfolio site.

## 🤝 Contact

- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Hyun Park | Software Engineer
