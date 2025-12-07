# Yugansh's Developer Portfolio 🚀

A modern, responsive personal portfolio website showcasing my software development journey, technical skills, and projects. Built with React, FastAPI, and MongoDB.

## 👨‍💻 About Me

I'm **Yugansh** (LemonQuote#73), a passionate **Software Developer** and **Data Science Enthusiast** based in **Hyderabad, India**. I'm an **Open Source Contributor** with a strong focus on building intelligent automation systems and data-driven applications.

### My Expertise
- **Languages:** JavaScript, Python, Shell scripting
- **Frontend:** React, Modern UI/UX design
- **Backend:** Node.js, FastAPI, REST APIs
- **Data Science:** Machine Learning, Natural Language Processing, Statistical Analysis
- **DevOps:** Docker, Linux system configuration, Automation tools
- **Databases:** MongoDB, Data modeling

### Featured Projects
1. **Triage Enrichment System** - Automated support ticket classification system using AI/ML
2. **Twitter Sentiment Analysis** - NLP-powered sentiment detection for social media data
3. **Python Random Quote Bot** - Lightweight CLI tool for inspirational quotes
4. **Linux Dotfiles** - Curated system configuration for productivity optimization

I'm currently seeking opportunities in **software development** and **data science** where I can leverage my technical skills to build impactful solutions.

---

## 🚀 Local Deployment Instructions

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - Install with `npm install -g yarn`
- **Python** (v3.8 or higher) - [Download here](https://www.python.org/)
- **MongoDB** (optional for full-stack functionality) - [Download here](https://www.mongodb.com/try/download/community)

### Frontend Setup

1. **Clone or navigate to the frontend directory:**
   ```bash
   cd /app/frontend
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Configure environment variables:**
   - The `.env` file should already exist with `REACT_APP_BACKEND_URL`
   - Update it if you need to change the backend URL

4. **Start the development server:**
   ```bash
   yarn start
   ```

5. **Access the application:**
   - Open your browser and go to: `http://localhost:3000`
   - The app will automatically reload when you make changes

### Backend Setup (Optional - for full-stack functionality)

1. **Navigate to backend directory:**
   ```bash
   cd /app/backend
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   - Create/update `.env` file in `/app/backend/`
   - Add your MongoDB connection string:
     ```
     MONGO_URL=mongodb://localhost:27017/
     DB_NAME=portfolio_db
     ```

5. **Start the backend server:**
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```

6. **Backend API will be available at:** `http://localhost:8001`

### Production Build

To create an optimized production build of the frontend:

```bash
cd /app/frontend
yarn build
```

The build folder will contain optimized static files ready for deployment to any hosting service (Vercel, Netlify, GitHub Pages, etc.).

---

## 📁 Project Structure

```
/app
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.jsx   # Navigation header with theme toggle
│   │   │   ├── Hero.jsx     # About/Hero section
│   │   │   ├── Skills.jsx   # Skills showcase
│   │   │   ├── Projects.jsx # Projects portfolio
│   │   │   ├── Stats.jsx    # GitHub statistics
│   │   │   ├── Contact.jsx  # Contact form & social links
│   │   │   ├── Footer.jsx   # Site footer
│   │   │   └── ui/          # shadcn UI components
│   │   ├── context/         # React context providers
│   │   │   └── ThemeContext.js  # Dark/Light theme management
│   │   ├── data/
│   │   │   └── portfolio-data.js      # Portfolio data
│   │   ├── App.js           # Main app component
│   │   ├── index.css        # Global styles & Tailwind
│   │   └── App.css          # App-specific styles
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── .env                 # Frontend environment variables
│
└── backend/                 # FastAPI backend (optional)
    ├── server.py            # Main API server
    ├── requirements.txt     # Python dependencies
    └── .env                 # Backend environment variables
```

---

## 🎨 Features

### 🌓 Dark/Light Mode Toggle
- Seamless theme switching with persistent localStorage
- Optimized color palettes for both modes
- Professional blue/cyan/purple color scheme in dark mode
- Clean white/light gray scheme in light mode

### 📱 Fully Responsive Design
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interactions

### ⚡ Performance Optimized
- Fast page loads with code splitting
- Optimized images and assets
- Smooth animations with GPU acceleration
- Lazy loading for better performance

### 🎯 Modern UI Components
- Built with shadcn/ui components
- Tailwind CSS for styling
- Custom animations and transitions
- Accessible and semantic HTML

---

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API calls

### Backend (Optional)
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation

### Development Tools
- **Yarn** - Package manager
- **CRACO** - Create React App Configuration Override
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

---

## 🔧 Customization Guide

### Update Your Information

1. **Profile Data** - Edit `/app/frontend/src/data/portfolio-data.js`:
   - Update your name, bio, location
   - Add your GitHub, LinkedIn, email, website URLs
   - Customize skills and tech stack

2. **Projects** - In `portfolio-data.js`:
   - Add/remove projects
   - Update descriptions and tech stacks
   - Add demo links and GitHub repos

3. **Contact Information** - In `portfolio-data.js`:
   - Update email address
   - Add your LinkedIn profile URL
   - Update Twitter/X handle
   - Customize social media links

4. **Colors & Theme** - Edit `/app/frontend/src/index.css`:
   - Modify CSS custom properties for colors
   - Adjust light/dark mode palettes
   - Customize animations

### Add New Sections

1. Create a new component in `/app/frontend/src/components/`
2. Import and add it to `/app/frontend/src/App.js`
3. Update navigation in `/app/frontend/src/components/Header.jsx`

---

## 📝 Environment Variables

### Frontend (`.env` in `/app/frontend/`)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (`.env` in `/app/backend/`)
```env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=portfolio_db
```

---

## 🐛 Troubleshooting

### Frontend won't start
- Ensure Node.js and Yarn are installed correctly
- Delete `node_modules` and `yarn.lock`, then run `yarn install` again
- Check if port 3000 is already in use

### Theme toggle not working
- Clear browser localStorage: `localStorage.clear()` in console
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### Styles not applying correctly
- Ensure Tailwind CSS is properly configured
- Check that `postcss` and `autoprefixer` are installed
- Restart the development server

---

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

---

## 🤝 Connect With Me

- **GitHub:** [@yugansh25](https://github.com/yugansh25)
- **Email:** your.email@example.com *(update in portfolio-data.js)*
- **LinkedIn:** Update in portfolio-data.js
- **Location:** Hyderabad, India

---

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons from [Lucide](https://lucide.dev/)
- Powered by [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ using React & FastAPI**

© 2025 yugansh25. All rights reserved.
