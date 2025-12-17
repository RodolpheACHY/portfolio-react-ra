"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Booki',
    description: "Booki est le premier projet réslisé durant ma formation. Il a consisté à créer une page d’accueil responsive pour une agence de voyage fictive, en intégrant fidèlement une maquette Figma avec du HTML et CSS écrits manuellement, sans générer de code automatiquement. Ce projet m’a permis de consolider mes compétences en design responsive et structuration de code frontend.",
    stack: [{ name: "Html 5" }, { name: "Css 3" },],
    image: "/assets/work/thumb4-bis.png",
    live: "https://rodolpheachy.github.io/booki/",
    github: "https://github.com/RodolpheACHY/booki",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'OhMyFood',
    description: "OhMyFood est une interface mobile-first pour une start-up de restauration. Le projet consistait à intégrer des maquettes complètes en HTML et SASS, tout en ajoutant des animations CSS pour rendre la navigation plus dynamique et agréable. J’ai réalisé une interface fluide et responsive (mobile & desktop), incluant un loader animé, des transitions, des effets au survol et diverses micro-interactions pour améliorer l’expérience utilisateur. Le projet a été entièrement versionné avec Git et GitHub pour garantir un code propre et bien structuré, qui a été validé via les normes W3C",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Sass" }],
    image: "/assets/work/thumb5.png",
    live: "https://rodolpheachy.github.io/ohmyfood/index.html",
    github: "https://github.com/RodolpheACHY/ohmyfood",
  },
  {
    num: "03",
    category: "frontend",
    title: "GameOn",
    description: "Dans ce projet, j’ai rendu une landing page interactive en intégrant une validation complète du formulaire en JavaScript Vanilla. J’ai géré les erreurs, les interactions utilisateur et la logique du DOM à partir d’un HTML/CSS existant, tout en respectant les maquettes Figma. Un projet idéal pour renforcer mes bases en JavaScript pur.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
    image: "/assets/work/thumb6.png",
    live: "https://rodolpheachy.github.io/GameOn/",
    github: "https://github.com/RodolpheACHY/GameOn",
  },
  {
    num: "04",
    category: "frontend",
    title: "Fisheye",
    description: "Pour ce projet, il m'a été demandé de développer un site accessible pour une plateforme de photographes. J'ai intégré des données en JavaScript, crée une interface dynamique (Lightbox, likes, modale de contact) et mis en place une architecture modulaire avec design patterns. Ce Projet était axé sur l’accessibilité et la maintenabilité du code.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
    image: "/assets/work/thumb7.png",
    live: "https://rodolpheachy.github.io/Fisheye/",
    github: "https://github.com/RodolpheACHY/Fisheye",
  },
  {
    num: "05",
    category: "frontend",
    title: "Les Petits Plats",
    description: "Projet visant à développer un algorithme de recherche performant pour une plateforme de recettes de cuisine. J’ai conçu une interface responsive et intuitive en JavaScript Vanilla, manipulant des données JSON pour afficher et filtrer les recettes. CE projet m'a permis d'améliorer ma compréhension du traitement des tableaux d'objet.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
    image: "/assets/work/thumb8.png",
    live: "https://rodolpheachy.github.io/lespetitsplats/",
    github: "https://github.com/RodolpheACHY/lespetitsplats",
  },
  {
    num: "06",
    category: "frontend",
    title: "Kasa",
    description: "J'ai réalisé le développement complet du front-end d’une application de location avec React et React Router. Création de composants réutilisables, navigation dynamique, animations CSS et intégration des données depuis un fichier JSON. Projet réalisé avec Vite et SASS, fidèle aux maquettes fournies.",
    stack: [{ name: "React" }, { name: "ReactRouter" }, { name: "Css" }, { name : "Sass" }, { name : "Vite" }, { name : "Node.js" }, ],
    image: "/assets/work/thumb9.png",
    live: "https://kasa-five-beryl.vercel.app/",
    github: "https://github.com/RodolpheACHY/Kasa",
  },
  {
    num: "07",
    category: "frontend",
    title: "Argent Bank",
    description: "Pour ce projet, j'ai développé le front-end d’une application bancaire moderne en React. J’y ai intégré une API REST pour gérer l’authentification, récupérer les données utilisateur et afficher un tableau de bord dynamique. Le state global est géré avec Redux, et l’API est documentée via Swagger pour assurer une communication structurée entre le front-end et le back-end. Pour vous connecter, mettez les identifiants suivants : tony@stark.com / password123",
    stack: [{ name: "React" }, { name: "ReduxToolkit" }, { name: "RTK Query" }, { name: "Vite" }, { name: "Css 3" },],
    image: "/assets/work/thumb10.png",
    live: "https://project-10-bank-front-end-pm97.vercel.app/",
    github: "https://github.com/RodolpheACHY/Project-10-Bank-FrontEnd",
  },
  {
    num: "08",
    category: "frontend",
    title: "SportSee",
    description: "Dans le cadre de ce projet, j'ai developpé une page profil utilisateur complète en React pour une application d’analytics sportif. L’interface présente les performances quotidiennes grâce à des graphes interactifs construits avec Recharts (activités, intensité, score, calories). La version déployée utilise des données mockées pour garantir la stabilité, tandis que le projet GitHub permet de basculer facilement vers les données de l’API réelle pour un usage en conditions production.",
    stack: [{ name: "React" }, { name: "Recharts" }, { name: "Axios" }, { name: "React Router" },],
    image: "/assets/work/thumb11.png",
    live: "https://sport-see-front-one.vercel.app/",
    github: "https://github.com/RodolpheACHY/SportSeeFront",
  },
  {
    num: "09",
    category: "frontend",
    title: "HRnet",
    description: "Projet visant à migrer une application d’entreprise de jQuery vers React. J’ai refondu un plugin jQuery en plusieurs composants React réutilisables, dont l’un a été publié en package npm. L’objectif était de mettre en place un environnement front moderne et d’optimiser l’application via une analyse des performances avant et après migration.",
    stack: [{ name: "React" }, { name: "React Router" }, { name: "Zustand" }, { name: "TanStack Table" },],
    image: "/assets/work/thumb12.png",
    live: "https://h-rnet-beige.vercel.app/",
    github: "https://github.com/RodolpheACHY/HRnet",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} 
      }} 
      className="min-h[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              {/* project description*/}
              <p className="text-white/60">{project.description}</p>
              {/* stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group  flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        fill 
                        className="object-cover" 
                        alt="" 
                      />
                    </div>
                  </div>
                </SwiperSlide>;
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work
