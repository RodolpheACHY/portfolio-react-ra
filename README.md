# 🌐 Portfolio frontend React – Rodolphe ACHY

Portfolio personnel développé avec **Next.js 14**, **TailwindCSS** et **Framer Motion**, conçu pour présenter mes projets, mon parcours professionnel ainsi que mes compétences techniques.  

Ce site met en avant une interface moderne, fluide, responsive et optimisée.

## 🚀 Démo en ligne    
👉 **Live Demo** : *`https://rodolphe-portfolio.netlify.app`*
👉 **Repository** : https://github.com/RodolpheACHY/portfolio-react-ra

---

## 🛠️ Technologies utilisées

Ce portfolio est construit avec une stack moderne :

| Technologie | Rôle |
|------------|------|
| **Next.js 14** | Framework principal (routing App Router, optimisation, server components) |
| **React** | Base du framework utilisé par Next.js |
| **App Router** | Système de navigation intégré de Next.js |
| **TailwindCSS** | Framework CSS utility-first |
| **Framer Motion** | Animations modernes, fluides et performantes |
| **EmailJS** | Soumission du formulaire de contact sans backend |
| **Shadcn/UI (composants UI)** | Utilisé pour les composants dans components/ui/ |

---

## 📁 Structure du projet

```
portfolio-react/
│── .next/
│── app/
│    ├── contact/           # Page Contact
│    ├── resume/            # Page CV / Compétences
│    ├── work/              # Page Projets
│    ├── favicon.ico
│    ├── globals.css        # Styles globaux
│	 ├── layout.js          # Layout principal
│    └── page.jsx           # Page d'accueil
├── components/
│    ├── ui/                # Composants UI shadcn
│    │ ├── button.jsx
│    │ ├── input.jsx
│    │ ├── scroll-area.jsx
│    │ ├── select.jsx
│    │ ├── sheet.jsx
│    │ ├── tabs.jsx
│    │ ├── textarea.jsx
│    │ └── tooltip.jsx
│    ├── Header.jsx
│    ├── MobileNav.jsx
│    ├── Nav.jsx
│    ├── PageTransition.jsx
│    ├── Photo.jsx
│    ├── Social.jsx
│    ├── Stairs.jsx
│    ├── StairTransition.jsx
│    ├── Stats.jsx
│    └── Social.jsx
├── lib/
├── node_modules/
├── public/
├── .env
├── .gitignore
├── components.json
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
```

---

### ✨ Fonctionnalités

- 🏠 **Page d'accueil animée** avec transitions fluides

- 👨‍💼 **Page CV / Skills** : compétences, expériences, stats visuelles

- 🛠️ **Page Projets** : présentation de réalisations avec animations

- ✉️ **Formulaire de contact via EmailJS**

- 📱 **Responsive design complet**

- 🎞️ **Transitions entre les pages** (PageTransition / StairTransition)

- 🌗 **UI moderne avec composants shadcn/ui**

- ⚡ Optimisation Next.js (Static Rendering + App Router)

---

## 🚀 Installation & Développement 

### 1. Cloner le projet

```
git clone https://github.com/RodolpheACHY/portfolio-react-ra.git
cd portfolio-react-ra
```

### 2. Installer les dépendances

```
npm install
```

### 3. Ajouter les variables d’environnement

Créer un fichier .env

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx

```

### 4. Lancer le serveur de développement

```
npm run dev
```

Le site sera accessible via :
👉 http://localhost:5173/

### 5. Build pour la production

```
npm run build
```

### 6. Lancer la version Buildée

```
npm start
```

### 7. Vérifier les erreurs avec ESLint

```
npm run lint
```

---

## ℹ️ À propos de ce portfolio  

Ce portfolio a été réalisé en m’appuyant sur un tutoriel afin de structurer la base du projet (Next.js, TailwindCSS et animations).
J’y ai ensuite apporté mes propres ajustements : choix du design, contenu, navigation, sections, optimisation, intégration EmailJS et personnalisation des animations.

Cette approche reflète ma capacité à **adapter un template**, comprendre une architecture moderne et la modifier pour créer une identité visuelle qui me ressemble.

## 📄 Licence

Projet sous licence **MIT** — libre d’utilisation et de modification

---

👤 Auteur

**Rodolphe ACHY**
GitHub : https://github.com/RodolpheACHY
Développeur Front-end passionné.