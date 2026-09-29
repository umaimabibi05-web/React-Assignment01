# 🍳 Tastely Kitchen – React Landing Page

A beautiful, fully responsive landing page for an online cooking-classes platform, built with **React**, **Bootstrap 5**, **Font Awesome** and pure **CSS animations**.

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with mobile toggle menu
- Hero section with floating cards and animated blob
- Popular classes, features, reviews and chefs sections
- Scroll-reveal and hover animations (CSS only)
- Newsletter form
- Footer with contact info, page links and social icons

## 🛠️ Tech Stack

- React (Create React App)
- Bootstrap 5 (CDN)
- Font Awesome 6 (CDN)
- Google Fonts: Poppins, Playfair Display
- CSS3 animations

## 📁 Project Structure

```
public/
  index.html        # Bootstrap, Font Awesome and fonts links
  images/           # All website images (replace with your own)
src/
  App.js            # All sections and data (classes, chefs, reviews, footer links)
  App.css           # Styling and animations
  index.js
```

## 🚀 Getting Started

```bash
# 1. Install dependencies (only if node_modules is missing)
npm install

# 2. Run in development
npm start

# 3. Create production build
npm run build
```

The app runs at http://localhost:3000. The `build` folder can be deployed on Vercel or Netlify.

## 🖼️ Changing Images

Replace files in `public/images/` keeping the same names (`hero.jpg`, `pasta.jpg`, `chef1.jpg`, etc.).

## ✏️ Customizing

- Change the title, classes, chefs and reviews in the data arrays at the top of `src/App.js`.
- Update footer and social links in the `FOOTER` and `SOCIAL` arrays.
- Change colors from the `:root` variables in `src/App.css`.

## 📄 License

Free to use for learning and personal projects.
