import { skills } from "@/data/personal";

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Technical Skills</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                                <span className="text-sm text-gray-500">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{skill.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
