
export interface Project {
  id: string;
  name: string;
  image: string; 
  description: string;
  mainStack: string[];
  liveLink: string;
  repoLink: string; 
  challenges: string;
  improvements: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Soft Skills"| "AI";
  level: number;
}

export const personalDetails = {
  name: "Sakin Malik", 
  designation: "Full Stack Developer",
  email: "maliksakin53@gmail.com",
  phone: "+880 1923533396",
  whatsapp: "+880 1923533396",
  address: "Sherpur,MymenShing, Bangladesh", 
  photo: "https://res.cloudinary.com/dmbf41o2r/image/upload/v1768897981/Gemini_Generated_Image_p27b7bp27b7bp27b_ehif7t.png", // Placeholder
  resumeLink: "https://drive.google.com/file/d/1O2tc7-F1LuIl3EAHRuwMgWbKz78qqUjs/view?usp=sharing", 
  about: {
    introduction: "I am a passionate Full Stack Developer with a knack for building beautiful and responsive web applications. My journey started with a curiosity for how websites work, and it has evolved into a full-blown career where I craft seamless user experiences.",
    journey: "I started coding in 2023, diving deep into HTML, CSS, and JavaScript. Over time, I mastered React and Next.js, building various projects that solve real-world problems.",
    hobbies: ["Traveling","Gaming","Cooking"],
    personality: "I am a detail-oriented person who loves to solve complex problems. I believe in continuous learning and always strive to improve my skills.",
  },
  socials: {
    github: "https://github.com/sakin111",
    linkedin: "https://www.linkedin.com/in/sakin-malik-171485254/",
    twitter: "https://x.com/sakin_malik",
    facebook: "https://www.facebook.com/share/1C2D1tptbz/",
  },
};

export const skills: Skill[] = [
  { name: "HTML/CSS", category: "Frontend", level: 95 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "Typescript", category: "Frontend", level: 90 },
  { name: "React / Next.js", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Shadcn", category: "Frontend", level: 90 },
  { name: "Redux", category: "Frontend", level: 80 },
  { name: "zod", category: "Frontend", level: 80 },
  { name: "TanStack Query", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 70 },
  { name: "SQL", category: "Backend", level: 70 },
  { name: "Git / GitHub", category: "Tools", level: 80 },
  { name: "Figma", category: "Tools", level: 70 },
  { name: "OpenAi", category: "AI", level: 70 },
  { name: "Gemini", category: "AI", level: 70 },
  { name: "Express js", category: "Backend", level: 70 },
  { name: "MongoDb", category: "Backend", level: 80 },
  { name: "Mongoose", category: "Backend", level: 80 },
  { name: "Postgres", category: "Backend", level: 80 },
  { name: "Prisma", category: "Backend", level: 80 },
  { name: "redis", category: "Backend", level: 80 },
  { name: "JWT", category: "Backend", level: 80 },
  { name: "Passport Js/OAuth", category: "Backend", level: 80 },
  { name: "Stripe", category: "Backend", level: 80 },
  { name: "SSlCommerz", category: "Backend", level: 80 },

];

export const education = [
  {
    degree: "Bachelor of Economics",
    institution: "Sherpur Government College",
    year: "2020 - Present",
    description: "Running final year.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sherpur Government College",
    year: "2018 - 2020",
    description: "Arts Group.",
  },
];

export const experience = [
  {
    position: "Fresher Frontend Developer",
    company: "No experience yet",
    year: "2023 - Present",
    description: "No Working Experience.",
  },
];

export const projects: Project[] = [
  {
    id: "travel-buddy",
    name: "Travel Buddy",
    image: "https://res.cloudinary.com/dmbf41o2r/image/upload/v1768899023/Screenshot_45_tr4bxt.png",
    description: "A Travel Buddy website to connect with travelers worldwide and find your perfect exploring partner. Features include finding verified travelers, browsing travel plans, and creating unforgettable memories together.",
    mainStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "https://last-app-client.vercel.app/",
    repoLink: "https://github.com/sakin111/last-app-client",
    challenges: "Implementing real-time chat functionality and ensuring user data privacy were significant challenges. Optimizing database queries for finding nearby travelers was also complex.",
    improvements: "Plan to add an AI-based recommendation system for travel partners and integrate a payment gateway for booking shared trips.",
  },
  {
    id: "wallet-app",
    name: "Wallet App",
    image: "https://res.cloudinary.com/dmbf41o2r/image/upload/v1768899119/Screenshot_40_f26f8j.png",
    description: "A secure and efficient wallet application for managing personal finances. (Details scraped from provided link were minimal, assummed generic wallet features).",
    mainStack: ["React", "Vite", "Tailwind CSS"],
    liveLink: "https://wallet-111.netlify.app/",
    repoLink: "https://github.com/sakin111/wallet-front",
    challenges: "Ensuring secure state management for transaction data and creating a responsive dashboard that works seamlessly on mobile devices.",
    improvements: "Adding visualization charts for expenses and income, and integrating with actual bank APIs for real-time tracking.",
  },
  {
    id: "blog-app",
    name: "Blog App",
    image: "https://res.cloudinary.com/dmbf41o2r/image/upload/v1768899627/Screenshot_46_yywfi8.png",
    description: "A modern blogging platform featuring categories like Technology, Design, and Business. Users can read featured posts and explore topics.",
    mainStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://blog-app-pied-three.vercel.app/",
    repoLink: "https://github.com/sakin111/blog-app",
    challenges: "Handling dynamic routing for blog posts and optimizing image loading for better performance (LCP).",
    improvements: "Implementing a comment system, user authentication for authors, and a newsletter subscription feature.",
  },
];
