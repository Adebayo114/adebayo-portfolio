# Adebayo Matthew — Developer Portfolio

A modern developer portfolio showcasing my selected projects, technical experience, case studies, and approach to building thoughtful digital products.

Built with **Next.js, React, TypeScript, Firebase, CSS Modules, and Framer Motion**.

---

## About

This portfolio represents my work as a frontend developer and my continued growth into software and product development.

Rather than simply displaying project cards, I wanted the portfolio to show how I approach building products — from the initial idea and user experience to technical decisions, challenges, and deployment.

The portfolio includes selected work, detailed case studies, an archive of additional projects, my development experience, technical skills, and interactive project reactions.

---

## Featured Work

### InviteWave

A modern event platform designed to make creating, discovering, managing, sharing, and responding to events straightforward for both hosts and guests.

Key features include:

- Event creation and management
- Event discovery and categories
- Guest RSVP without required authentication
- Private event access
- Host controls
- Firebase Authentication
- Firestore data persistence
- Event sharing
- Location and map integration
- Featured events

The portfolio also includes a detailed case study covering the problem, product idea, technical decisions, challenges, and lessons learned while building InviteWave.

---

### Dyna Quiz

An interactive quiz platform designed around progressive learning for web development topics.

Users can test their knowledge across:

- HTML
- CSS
- JavaScript
- Multiple difficulty levels
- Interactive questions and answers
- Progress-based quiz experiences

The project focuses on creating a simple and engaging learning experience while demonstrating responsive interface design and React-based interaction.

---

## Portfolio Features

- Fully responsive design
- Custom mobile navigation
- Interactive hero experience
- Animated interface elements
- Selected project showcases
- Detailed project case studies
- Project archive
- Experience timeline
- Technical skills section
- Resume access
- Contact section
- Firebase-powered project reactions
- Persistent reaction counts with Cloud Firestore
- SEO metadata
- Responsive desktop, tablet, and mobile layouts

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- CSS Modules
- Framer Motion

### Backend & Services

- Firebase
- Cloud Firestore

### Development & Deployment

- Git
- GitHub
- Vercel

---

## Project Structure

```text
src/
├── app/
│   ├── work/
│   │   ├── invitewave/
│   │   │   └── page.tsx
│   │   └── dynaquiz/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── case-studies/
│   │   ├── invitewave/
│   │   └── dyna-quiz/
│   │
│   ├── effects/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
└── lib/
    └── firebase.ts
```

---

## Firebase

Firebase and Cloud Firestore power the interactive project reaction system.

Visitors can react to selected projects, while reaction counts are stored persistently in Firestore.

Firebase configuration is handled through environment variables rather than being stored directly in the source code.

---

## Local Development

To run the project locally, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

### Environment Variables

Firebase-powered features require a `.env.local` file in the **project root**.

The following environment variables are required:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

The actual Firebase configuration values are not included in this repository.

---

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The portfolio is designed for deployment with Vercel.

---

## What I Learned

Building this portfolio was also an opportunity to work deeper with the modern Next.js ecosystem.

Some of the areas explored during development include:

- Next.js App Router
- Server and Client Components
- TypeScript
- Component architecture
- CSS Modules
- Responsive interface design
- Framer Motion
- Firebase integration
- Cloud Firestore
- Environment variables
- Dynamic project routes
- Production builds and deployment

---

## Author

**Adebayo Matthew**

Frontend Developer & Software Engineer  
Indianapolis, Indiana, USA

GitHub: **Adebayo114**

---

## Status

Actively maintained and updated as I build new projects and expand my experience.
