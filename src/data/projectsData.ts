import type { Project } from "../types/projectsTypes";

export const projectsData: Project[] = [
    {
        title: "Billify",
        subtitle: "Customer & Invoice Management Platform",
        description:
            "A secure full-stack platform with role-based access, invoice management, 2FA, and PDF/Excel report exports. Built with modern technologies to provide a comprehensive business solution.",
        icon: "fas fa-file-invoice",
        technologies: [
            { name: "Java", bg: "bg-red-800", text: "text-red-300" },
            { name: "Spring Boot", bg: "bg-green-800", text: "text-green-300" },
            { name: "Angular", bg: "bg-red-800", text: "text-red-300" },
            { name: "MySQL", bg: "bg-blue-800", text: "text-blue-300" },
        ],
        features: [
            {
                icon: "fas fa-shield-alt",
                title: "Security Features",
                description: "Role-based access control and 2FA authentication",
            },
            {
                icon: "fas fa-file-export",
                title: "Export Options",
                description: "PDF and Excel report generation",
            },
        ],
    },
];
