"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950`}
    >

      <img
        src="/images/profile.jpg"
        alt="Photo de Jahswant"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-xl mb-6 hover:scale-105 transition-transform duration-300"
      />


      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 text-center leading-tight tracking-tight">
        À propos de moi
      </h1>


      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed text-center">
        Salut, je suis <strong>Jahswant Fodouop Takoguem</strong> — développeur web en devenir, passionné par la tech, et étudiant en <strong>programmation informatique</strong> à <em>Collège La Cité</em>, à Ottawa. 
        Mon parcours m’a mené du Cameroun au Canada, de la curiosité à la vocation, et chaque étape a renforcé ma conviction : la technologie peut responsabiliser, connecter et transformer.
      </p>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-6 leading-relaxed text-center">
        Je suis profondément motivé par l’idée de <strong>rendre la technologie accessible à tous</strong>. Dès mes débuts dans l’informatique au Cameroun, jusqu'à mes projets à La Cité, j’ai toujours cherché à créer des outils utiles, simples et inclusifs.
      </p>

      {/* Détails */}
      <div className="w-full max-w-3xl mt-8 space-y-10 text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            🚀 Ma vision du développement
          </h2>
          <p className="text-lg leading-relaxed">
            Le code n’est pas juste du texte. C’est une solution à un besoin, une réponse à une frustration, une expérience que l’on veut rendre fluide, intuitive, agréable. 
            J’aime <strong>construire des applications web modernes</strong> avec <strong>React</strong>, <strong>Redux</strong>, <strong>Next.js</strong> et <strong>Tailwind CSS</strong>, toujours dans une logique d’accessibilité, de performance et de clarté.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            📚 Mon parcours et mes projets
          </h2>
          <p className="text-lg leading-relaxed">
            De mes premières lignes de code autodidactes à mes projets d’équipe à La Cité — comme <strong>GiveItAway</strong>, ou encore les CRD React/Redux pour la gestion des départements, utilisateurs, équipements… — je me suis formé à travers la pratique et la collaboration. 
            J’aime les projets bien structurés, avec une navigation fluide, des formulaires robustes, et une logique claire côté Redux.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            🤝 Soft skills & état d’esprit
          </h2>
          <p className="text-lg leading-relaxed">
            Si je crois autant dans le code, c’est parce que je crois dans l’humain derrière. 
            Je suis quelqu’un de patient, bienveillant, ouvert aux retours, et toujours prêt à aider. J’ai à cœur de <strong>responsabiliser</strong> les autres, de transmettre, et d’évoluer dans un cadre sain et collaboratif. 
            Mon expérience dans le service à la clientèle (chez TD, Bell, GardaWorld) m’a appris à écouter, à m’adapter et à toujours viser la satisfaction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            🎯 Ce que je vise
          </h2>
          <p className="text-lg leading-relaxed">
            Intégrer une équipe dynamique où je pourrais mettre à profit mes compétences, apprendre continuellement, et surtout contribuer à des projets concrets, utiles, porteurs de sens. 
            Je cherche à évoluer comme développeur web, mais aussi comme personne, en construisant avec les autres des solutions qui font la différence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            🌱 En dehors du clavier...
          </h2>
          <p className="text-lg leading-relaxed">
            Je suis fan de <em>musique</em>, de <em>jeux de stratégie</em> (notamment ceux qui demandent logique et planification), de <em>podcasts tech</em> et d’<em>apprentissage des langues</em>. 
            J’aime aussi aider mes camarades dans leurs projets, participer à des hackathons, et faire du bénévolat pour partager un peu de ce que j’ai appris.
          </p>
        </div>
      </div>


      <a
        href="/projects"
        className="group mt-12 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
      >
        Voir mes projets
        <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
}
