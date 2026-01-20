import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/personal";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 w-full group">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                        href={`/projects/${project.id}`}
                        className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                </p>
                <Link
                    href={`/projects/${project.id}`}
                    className="inline-block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                    View More / Details
                </Link>
            </div>
        </div>
    );
}
