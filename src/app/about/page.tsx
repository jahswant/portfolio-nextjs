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
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950`}
    >
      <img
        src="/images/profile.jpg"
        alt="Photo de Jahswant"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg mb-6"
      />

      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4 leading-tight">
        À propos de moi
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        Je m'appelle Jahswant, étudiant passionné en programmation informatique et fervent défenseur de la technologie accessible à tous. Mon aventure dans le monde du développement a commencé bien avant mes études : curieux de nature, je démontais des ordinateurs pour comprendre comment ils fonctionnaient, avant de découvrir la magie du code. Ce qui était au départ une simple curiosité est devenu une véritable vocation.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        Aujourd’hui, je construis des applications web modernes avec des technologies comme <strong>React</strong>, <strong>Next.js</strong> et <strong>Tailwind CSS</strong>. J’ai une approche centrée sur l’utilisateur : j’aime que les choses soient simples, fluides et agréables à utiliser. Je mets un point d’honneur à écrire un code propre, lisible et bien organisé — car la qualité ne se voit pas toujours, mais se ressent.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        Ma vision du développement
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        Le développement web, pour moi, est une manière de résoudre des problèmes concrets et d'améliorer la vie des gens. Que ce soit en facilitant la navigation sur un site, en optimisant des performances ou en développant une interface accessible aux personnes en situation de handicap, chaque détail compte.
        J’accorde également beaucoup d’importance à la sécurité, à la performance et à l’accessibilité.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        Soft skills et collaboration
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        En dehors de la technique, je suis aussi quelqu’un qui aime travailler en équipe. J’ai appris à communiquer clairement, à écouter les autres et à proposer des solutions tout en restant humble. J’apprécie les retours constructifs, et je crois qu’un bon développeur est avant tout un bon collaborateur.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        Un peu plus sur moi
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
        En dehors du code, je suis passionné par la musique, les jeux de stratégie, les podcasts tech et l'apprentissage des langues. J’aime aussi prendre du temps pour faire du bénévolat, aider mes camarades à comprendre certaines notions techniques, ou encore participer à des hackathons.
      </p>

      <a
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Voir mes projets
      </a>
    </section>
  );
}
