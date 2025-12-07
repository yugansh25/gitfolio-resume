# 🚀 Local Deployment Guide - Quick Start

This guide will help you run your portfolio website locally on your machine.

## ⚡ Quick Start (5 minutes)

### Step 1: Prerequisites

Before you begin, make sure you have installed:

1. **Node.js** (v16 or higher)
   - Check: `node --version`
   - Download: https://nodejs.org/

2. **Yarn** (package manager)
   - Check: `yarn --version`
   - Install: `npm install -g yarn`

### Step 2: Navigate to Project

```bash
cd /app/frontend
```

### Step 3: Install Dependencies

```bash
yarn install
```

This will install all required packages (React, Tailwind CSS, etc.)

### Step 4: Start Development Server

```bash
yarn start
```

### Step 5: Open in Browser

Open your web browser and go to:
```
http://localhost:3000
```

🎉 **That's it!** Your portfolio is now running locally!

---

## 📝 Customizing Your Portfolio

### Update Your Personal Information

1. Open the file: `/app/frontend/src/data/portfolio-data.js`

2. Update the following sections:

```javascript
profile: {
  name: "Your Name",              // Change this
  username: "yourgithub",         // Your GitHub username
  bio: "Your professional title", // Your bio
  location: "Your City, Country", // Your location
  email: "your.email@example.com", // Your email
  linkedin: "https://linkedin.com/in/yourprofile", // Your LinkedIn
  website: "https://yourwebsite.com" // Your website
}
```

3. Update your skills, projects, and contact information in the same file

4. Save the file - the changes will appear automatically!

---

## 🎨 Changing Colors and Theme

### Modify Color Scheme

Edit: `/app/frontend/src/index.css`

Find the `:root` section for light mode and `.dark` section for dark mode.

Example: Change primary color from blue to green:
```css
--primary: 142 71% 45%;  /* Green instead of blue */
```

### Change Fonts

Edit: `/app/frontend/src/index.css`

Update the font-family in the `body` section.

---

## 🛑 Common Issues & Solutions

### Issue: Port 3000 is already in use

**Solution:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 yarn start
```

### Issue: "yarn command not found"

**Solution:**
```bash
npm install -g yarn
```

### Issue: Changes not showing

**Solution:**
- Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or clear browser cache

### Issue: Module not found errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules yarn.lock
yarn install
```

---

## 🏗️ Building for Production

When you're ready to deploy your portfolio:

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in the `/app/frontend/build` folder.

You can then deploy this folder to:
- **Vercel** (recommended, free)
- **Netlify** (free)
- **GitHub Pages** (free)
- **AWS S3** (paid)
- Any static hosting service

---

## 📦 What's Included

Your portfolio includes:

✅ **Hero/About Section** - Your introduction and profile
✅ **Skills Section** - Organized by categories
✅ **Projects Section** - Your GitHub projects showcase
✅ **GitHub Stats** - Contribution statistics
✅ **Contact Form** - With social media links
✅ **Dark/Light Mode** - Theme toggle
✅ **Responsive Design** - Works on all devices
✅ **Modern Animations** - Smooth transitions and effects

---

## 🔧 Advanced Configuration

### Environment Variables

Location: `/app/frontend/.env`



### Add New Components

1. Create a new file in `/app/frontend/src/components/`
2. Import it in `/app/frontend/src/App.js`
3. Add navigation link in `/app/frontend/src/components/Header.jsx`

---

## 📞 Need Help?

If you encounter any issues:

1. Check the browser console for errors (F12)
2. Check terminal for build errors
3. Refer to the main README.md for detailed documentation
4. Check that all dependencies are properly installed

---

## 🎯 Next Steps

After running locally:

1. ✅ Customize your information in `portfolio-data.js`
2. ✅ Update your profile picture URL
3. ✅ Add your real projects and descriptions
4. ✅ Update contact information
5. ✅ Test dark/light mode
6. ✅ Test on mobile devices
7. ✅ Build for production
8. ✅ Deploy to hosting service

---

**Happy coding! 🚀**

For detailed documentation, see the main [README.md](/app/README.md)
