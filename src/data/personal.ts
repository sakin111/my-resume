
export interface Project {
  id: string;
  name: string;
  image: string; // URL or local path
  description: string;
  mainStack: string[];
  liveLink: string;
  repoLink: string; // client
  challenges: string;
  improvements: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Soft Skills";
  level: number; // 0-100
}

export const personalDetails = {
  name: "Your Name", // Placeholder
  designation: "Frontend Developer",
  email: "your.email@example.com", // Placeholder
  phone: "+880 1234 567 890", // Placeholder
  whatsapp: "+880 1234 567 890", // Placeholder
  address: "Dhaka, Bangladesh", // Placeholder
  photo: "https://placehold.co/400x400/1a1a1a/ffffff?text=ME", // Placeholder
  resumeLink: "/resume.pdf", // Placeholder
  about: {
    introduction: "I am a passionate Frontend Developer with a knack for building beautiful and responsive web applications. My journey started with a curiosity for how websites work, and it has evolved into a full-blown career where I craft seamless user experiences.",
    journey: "I started coding in 2023, diving deep into HTML, CSS, and JavaScript. Over time, I mastered React and Next.js, building various projects that solve real-world problems.",
    hobbies: ["Photography", "Traveling", "Gaming"],
    personality: "I am a detail-oriented person who loves to solve complex problems. I believe in continuous learning and always strive to improve my skills.",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export const skills: Skill[] = [
  { name: "HTML/CSS", category: "Frontend", level: 95 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "React / Next.js", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Node.js", category: "Backend", level: 60 },
  { name: "Git / GitHub", category: "Tools", level: 80 },
  { name: "Figma", category: "Tools", level: 70 },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University Name",
    year: "2020 - 2024",
    description: "Graduated with honors. Focused on Web Technologies and Software Engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "College Name",
    year: "2018 - 2020",
    description: "Science Group.",
  },
];

export const experience = [
  {
    position: "Junior Frontend Developer",
    company: "Tech Company Ltd.",
    year: "2024 - Present",
    description: "Working on maintaining and upgrading the company's main product dashboard.",
  },
];

export const projects: Project[] = [
  {
    id: "travel-buddy",
    name: "Travel Buddy",
    image: "https://placehold.co/600x400/0070f3/ffffff?text=Travel+Buddy",
    description: "A Travel Buddy website to connect with travelers worldwide and find your perfect exploring partner. Features include finding verified travelers, browsing travel plans, and creating unforgettable memories together.",
    mainStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://last-app-client.vercel.app/",
    repoLink: "https://github.com/yourusername/travel-buddy",
    challenges: "Implementing real-time chat functionality and ensuring user data privacy were significant challenges. Optimizing database queries for finding nearby travelers was also complex.",
    improvements: "Plan to add an AI-based recommendation system for travel partners and integrate a payment gateway for booking shared trips.",
  },
  {
    id: "wallet-app",
    name: "Wallet App",
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Wallet+App",
    description: "A secure and efficient wallet application for managing personal finances. (Details scraped from provided link were minimal, assummed generic wallet features).",
    mainStack: ["React", "Vite", "Tailwind CSS"],
    liveLink: "https://wallet-111.netlify.app/",
    repoLink: "https://github.com/yourusername/wallet-app",
    challenges: "Ensuring secure state management for transaction data and creating a responsive dashboard that works seamlessly on mobile devices.",
    improvements: "Adding visualization charts for expenses and income, and integrating with actual bank APIs for real-time tracking.",
  },
  {
    id: "blog-app",
    name: "Blog App",
    image: "https://placehold.co/600x400/eab308/ffffff?text=Blog+App",
    description: "A modern blogging platform featuring categories like Technology, Design, and Business. Users can read featured posts and explore topics.",
    mainStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://blog-app-pied-three.vercel.app/",
    repoLink: "https://github.com/yourusername/blog-app",
    challenges: "Handling dynamic routing for blog posts and optimizing image loading for better performance (LCP).",
    improvements: "Implementing a comment system, user authentication for authors, and a newsletter subscription feature.",
  },
];
