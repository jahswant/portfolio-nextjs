import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface ProjectsState {
  list: Project[];
}

const initialState: ProjectsState = {
  list: [
    {
      id: uuid(),
      title: "GiveItAway",
      description:
        "Une plateforme communautaire pour donner des objets gratuitement aux personnes dans le besoin.",
      technologies: ["React", "TailwindCSS", "Redux"],
      image: "/images/giveitaway.jpg",
    },
    {
      id: uuid(),
      title: "EduConnect",
      description:
        "Application de gestion de classes virtuelles avec forum, quiz, et suivi de progression.",
      technologies: ["Next.js", "TypeScript", "Firebase"],
      image: "/images/educonnect.jpg",
    },
    {
      id: uuid(),
      title: "GreenMarket",
      description:
        "Marketplace local pour acheter des produits écoresponsables directement auprès des producteurs.",
      technologies: ["Vue", "Node.js", "MongoDB"],
      image: "/images/greenmarket.jpg",
    },
    {
      id: uuid(),
      title: "Portfolio Pro",
      description:
        "Générateur de portfolios personnalisés pour développeurs en début de carrière.",
      technologies: ["Next.js", "SCSS", "Supabase"],
      image: "/images/portfolio-pro.jpg",
    },
    {
      id: uuid(),
      title: "FitTrack",
      description:
        "Application de suivi d’entraînement avec historique, plans personnalisés et intégration smartwatch.",
      technologies: ["React Native", "TailwindCSS", "Redux Toolkit"],
      image: "/images/fittrack.jpg",
    },
    {
      id: uuid(),
      title: "Bookify",
      description:
        "Application de réservation de livres en bibliothèque avec avis et recommandations basées sur l’IA.",
      technologies: ["Angular", "NestJS", "PostgreSQL"],
      image: "/images/bookify.jpg",
    },
    {
      id: uuid(),
      title: "SnapScan",
      description:
        "Outil de reconnaissance de texte OCR pour convertir des documents scannés en texte modifiable.",
      technologies: ["Python", "Tesseract", "TailwindCSS"],
      image: "/images/snapscan.jpg",
    },
    {
      id: uuid(),
      title: "CodeTogether",
      description:
        "Éditeur de code collaboratif en temps réel avec chat et sauvegarde dans le cloud.",
      technologies: ["Next.js", "Socket.io", "Express"],
      image: "/images/codetogether.jpg",
    },
    {
      id: uuid(),
      title: "ZenTask",
      description:
        "Gestionnaire de tâches minimaliste basé sur la méthode Zen pour rester concentré.",
      technologies: ["React", "Zustand", "Framer Motion"],
      image: "/images/zentask.jpg",
    },
    {
      id: uuid(),
      title: "Travelogue",
      description:
        "Journal de voyage numérique avec géolocalisation, photos et récits organisés par itinéraire.",
      technologies: ["Vue", "Firebase", "Leaflet"],
      image: "/images/travelogue.jpg",
    },
    {
      id: uuid(),
      title: "EcoDash",
      description:
        "Tableau de bord pour suivre l’empreinte carbone personnelle et proposer des alternatives écologiques.",
      technologies: ["Next.js", "Chart.js", "Tailwind"],
      image: "/images/ecodash.jpg",
    },
    {
      id: uuid(),
      title: "LanguaLearn",
      description:
        "Application gamifiée pour l’apprentissage des langues avec mini-jeux, quiz, et IA conversationnelle.",
      technologies: ["React", "Redux", "OpenAI API"],
      image: "/images/langualearn.jpg",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.list.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
