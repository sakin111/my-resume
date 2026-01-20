import { personalDetails } from "@/data/personal";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get In Touch</h2>
                <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm">
                    <div className="grid md:grid-cols-1 gap-8 text-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                                <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <span className="text-blue-600 dark:text-blue-400 mb-2">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </span>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                                    <a href={`mailto:${personalDetails.email}`} className="text-blue-600 hover:underline">{personalDetails.email}</a>
                                </div>

                                <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <span className="text-green-600 dark:text-green-400 mb-2">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </span>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                                    <a href={`tel:${personalDetails.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600">{personalDetails.phone}</a>
                                </div>

                                <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <span className="text-green-500 mb-2">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.894-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                    </span>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</h4>
                                    <a href={`https://wa.me/${personalDetails.whatsapp.replace(/[^0-9]/g, '')}`} className="text-gray-600 dark:text-gray-400 hover:text-green-600">{personalDetails.whatsapp}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
