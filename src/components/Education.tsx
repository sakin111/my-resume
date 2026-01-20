import { education, experience } from "@/data/personal";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education & Experience</h2>

                <div className="grid md:grid-cols-2 gap-12">
                   
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400 border-b pb-2">Education</h3>
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 mb-4">{edu.year}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

    
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400 border-b pb-2">Experience</h3>
                        <div className="space-y-12">
                            {experience.length > 0 ? (
                                experience.map((exp, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h4>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                                        <p className="text-sm text-gray-500 mb-4">{exp.year}</p>
                                        <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 italic">Open to opportunities!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
