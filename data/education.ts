
export interface Degree {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    location: string;
    description: string;
}

export interface Certification {
    title: string;
    issuer: string;
    year?: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface CurrentLearning {
    title: string;
}

export interface Education {
    degrees: Degree[];
    certifications: Certification[];
    languages: Language[];
    currentLearnings: CurrentLearning[];
}

export const education: Education = {
    degrees: [{
        id: 1,
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Veer Narmad South Gujarat University",
        duration: "May 2014 – April 2017",
        location: "Surat, Gujarat, India",
        description: "Focused on software engineering, algorithms, databases and web technologies."
    }],
    certifications: [
        {
            title: "Goethe-Zertifikat A2: Fit in Deutsch",
            issuer: "Goethe-Institut e.V.",
            year: 'Aug 2025'
        },
        {
            title: "Goethe-Zertifikat A1: Start Deutsch 1",
            issuer: "Goethe-Institut e.V.",
            year: 'Apr 2025'
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            issuer: "Veer Narmad South Gujarat University (VNSGU)",
            year: 'Aug 2017'
        },
    ],

    languages: [
        { name: "English", level: "Professional" },
        { name: "German", level: "A2 => B1" },
        { name: "Hindi", level: "Native" },
        { name: "Gujarati", level: "Native" }
    ],
    currentLearnings: [
        { title: "Advanced System Design" },
        { title: "Microservices Architecture" },
        { title: "Docker & Containerization" },
        { title: "Kubernetes Fundamentals" },
        { title: "Next.js & Server Components" },
        { title: "AI-assisted Development Workflows" },
        { title: "Cloud Architecture (AWS)" },
        { title: "Scalable Frontend Architecture" },
        { title: "System Design" },
        { title: "Design Patterns in JavaScript & TypeScript" },
        { title: "Secure Enterprise Application Development" },
    ],
}