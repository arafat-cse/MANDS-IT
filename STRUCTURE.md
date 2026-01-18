# Mands IT - Project Structure

This document explains the folder and file structure of the Mands IT website project.

## 📁 Root Directory Structure

```
MANDS-IT/
├── app/                    # Next.js App Router directory
├── data/                   # JSON data files
├── public/                 # Static assets (CSS, JS, Images)
├── node_modules/           # Dependencies (auto-generated)
├── .next/                  # Next.js build output (auto-generated)
├── .vercel/                # Vercel deployment config (auto-generated)
├── .git/                   # Git version control
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── next.config.mjs         # Next.js configuration
├── jsconfig.json           # JavaScript configuration
├── vercel.json             # Vercel deployment settings
├── vercel.md               # Vercel deployment guide
├── README.md               # Project documentation
└── STRUCTURE.md            # This file
```

---

## 📂 `/app` - Application Core (Next.js App Router)

```
app/
├── components/             # Reusable React components
│   ├── Topbar.js          # Top navigation bar with contact info
│   ├── Navbar.js          # Main navigation menu
│   ├── Team.js            # Team members slider (React Slick)
│   ├── Projects.js        # Projects showcase section
│   ├── Clients.js         # Client logos slider (React Slick)
│   └── Footer.js          # Footer with links and contact
├── favicon.ico            # Website favicon
├── globals.css            # Global CSS styles
├── layout.js              # Root layout (wraps all pages)
├── page.js                # Home page (main route: /)
└── page.module.css        # Page-specific CSS module
```

### 🧩 Component Breakdown

| Component | Purpose | Features |
|-----------|---------|----------|
| `Topbar.js` | Top bar with address, email, social links | Static info display |
| `Navbar.js` | Main navigation menu | Responsive, sticky navigation |
| `Team.js` | Team members section | React Slick carousel, responsive |
| `Projects.js` | Projects showcase | Grid layout with hover effects |
| `Clients.js` | Client logos | Auto-sliding carousel |
| `Footer.js` | Footer section | Links, contact info, copyright |

### 📄 Page Structure (`page.js`)

The home page (`app/page.js`) contains the following sections **in order**:

1. **Carousel** - Hero slider with images and CTAs
2. **Facts** - Statistics counter section
3. **About** - About the company
4. **Services** - Service offerings grid
5. **Projects** - `<Projects />` component
6. **Team** - `<Team />` component
7. **Clients** - `<Clients />` component
8. **Blog** - Latest blog posts
9. **Contact** - Contact form and map

---

## 📂 `/data` - Content Management

```
data/
└── content.json           # All website content (text, images, links)
```

### 📝 `content.json` Structure

Contains all dynamic content organized by section:

```json
{
  "topbar": { ... },
  "navbar": { ... },
  "carousel": [ ... ],
  "facts": [ ... ],
  "about": { ... },
  "services": { ... },
  "projects": { ... },
  "team": { ... },
  "clients": { ... },
  "blog": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

**💡 To update website content:** Edit `data/content.json` - no code changes needed!

---

## 📂 `/public` - Static Assets

```
public/
├── css/                   # Stylesheets
│   ├── bootstrap.min.css # Bootstrap 5 framework
│   ├── style.css         # Custom styles
│   └── team-style.css    # Team section specific styles
├── js/                    # JavaScript files
│   └── main.js           # Main JS (carousel, counter, animations)
├── img/                   # Images
│   ├── carousel-1.jpg    # Carousel images
│   ├── carousel-2.jpg
│   ├── about-1.jpg       # About section images
│   ├── about-2.jpg
│   ├── blog-1.jpg        # Blog images
│   ├── blog-2.jpg
│   ├── blog-3.jpg
│   └── mandsit.jpeg      # Logo
└── lib/                   # Third-party libraries
    ├── animate/          # Animate.css for animations
    ├── easing/           # jQuery easing plugin
    ├── waypoints/        # Waypoints for scroll triggers
    └── wow/              # WOW.js for scroll animations
```

---

## 🎨 Styling Architecture

### CSS Files Priority (Load Order)

1. **Bootstrap** (`bootstrap.min.css`) - Base framework
2. **Custom Styles** (`style.css`) - Main custom styles
3. **Team Styles** (`team-style.css`) - Team section specific
4. **Global CSS** (`globals.css`) - Next.js global styles

### Key Style Files

| File | Purpose |
|------|---------|
| `public/css/style.css` | Main custom styles (carousel, services, blog, etc.) |
| `public/css/team-style.css` | Team section card styles |
| `app/globals.css` | Global Next.js styles, team & project components |

---

## 🔧 Configuration Files

### `package.json`

- Project dependencies (React, Next.js, React Slick, etc.)
- Scripts: `dev`, `build`, `start`

### `next.config.mjs`

- Next.js configuration

### `vercel.json`

- Vercel deployment settings
- Project name: `mandsit`

### `jsconfig.json`

- JavaScript/TypeScript path aliases

---

## 🚀 Key Dependencies

```json
{
  "next": "16.1.3",
  "react": "^19.0.0",
  "react-slick": "^0.30.2",
  "slick-carousel": "^1.8.1"
}
```

---

## 📱 Responsive Breakpoints

The project uses Bootstrap 5 breakpoints:

- **Mobile:** < 576px
- **Tablet:** 576px - 768px
- **Desktop:** 768px - 992px
- **Large Desktop:** > 992px

---

## 🔄 Data Flow

```
content.json → page.js/components → Browser
     ↓
  (Edit JSON)
     ↓
  (Auto-update)
```

---

## 🎯 Future Enhancements

- [ ] Laravel API integration (replace `content.json`)
- [ ] Admin panel for content management
- [ ] Dynamic image uploads
- [ ] Multi-language support

---

## 📞 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
npx vercel --prod
```

---

**Last Updated:** January 18, 2026
