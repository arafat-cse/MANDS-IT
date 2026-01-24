# Mands IT - IT Solutions Website

This is the official website for Mands IT, an innovative IT solutions agency. Built with **Next.js**, it features a modern, responsive design with dynamic sections for services, projects, team members, and client testimonials.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling:** Bootstrap 5, Custom CSS
- **Animations:** WOW.js, Animate.css
- **Carousel/Sliders:** React Slick, Slick Carousel
- **Content Management:** JSON-based data (`data/content.json`)

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/` - Main application logic (Pages, Layouts).
- `app/components/` - Reusable UI components (Navbar, Footer, Team, Projects, Clients, etc.).
- `data/content.json` - Centralized content file. **Edit this file to change text, images, and links across the site.**
- `public/` - Static assets (CSS, Images, JS libraries).

## 📱 Features

- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop.
- **Dynamic Sliders:** "Our Team" and "Our Clients" sections utilize responsive carousels.
- **Fast Performance:** Leverages Next.js server-side rendering and static generation.

## 🚢 Deployment

For detailed deployment instructions, please verify the **[`vercel.md`](./vercel.md)** file included in this repository.

The easiest way to deploy is using [Vercel](https://vercel.com/):

```bash
npx vercel
```

## 🔮 Future Enhancements

- **Laravel API Integration:** Future updates will replace the static JSON content with a dynamic Laravel Backend API to allow for real-time content management.
