import Link from "next/link";

interface Props {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export default function ProjectCard({ id, title, description, technologies, image }: Props) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-[1.02] cursor-pointer">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <li
                key={idx}
                className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
