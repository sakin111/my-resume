import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/personal";

interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Projects
                </Link>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{project.name}</h1>

                <div className="flex flex-wrap gap-4 mb-8">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors flex items-center gap-2"
                    >
                        View Live
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium rounded-full transition-colors flex items-center gap-2"
                    >
                        GitHub Repo
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Description</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Challenges Faced</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.challenges}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Potential Improvements</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.improvements}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.mainStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
