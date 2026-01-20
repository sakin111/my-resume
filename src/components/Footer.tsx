import { personalDetails } from "@/data/personal";

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Built with Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
