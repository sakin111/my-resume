import { personalDetails } from "@/data/personal";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">My Journey</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {personalDetails.about.journey}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">My Personality</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {personalDetails.about.personality}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hobbies & Interests</h3>
                        <div className="flex flex-wrap gap-3">
                            {personalDetails.about.hobbies.map((hobby) => (
                                <span key={hobby} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
