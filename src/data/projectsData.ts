import type { Project } from "../types/projectsTypes";

export const geoClientProject: Project = {
    title: "GeoClient",
    subtitle: "Hybrid CRM with schedule and maps",
    description:
        "GeoClient is a CRM platform built with Next.js, React, and Supabase. It helps field and door-to-door salespeople register clients, plan visits, and generate optimized routes on an interactive map. The stack leverages React Query for data management, Tailwind for styling, and Supabase for authentication and database.",
    previewLink: "https://meet-geoclient.pages.dev/",
    repoLink: "https://github.com/Lazt-Solutions/geoclient/",
    icon: "fa-solid fa-map-pin",
    technologies: [
        { name: "Next.js", bg: "bg-black", text: "text-white" },
        { name: "React", bg: "bg-cyan-400", text: "text-gray-900" },
        { name: "TypeScript", bg: "bg-blue-600", text: "text-white" },
        { name: "Supabase", bg: "bg-emerald-500", text: "text-white" },
        { name: "React Query", bg: "bg-rose-500", text: "text-white" },
        { name: "TailwindCSS", bg: "bg-sky-400", text: "text-slate-900" },
        { name: "ShadCN UI", bg: "bg-gray-100", text: "text-gray-900" },
    ],
    features: [
        {
            icon: "fa-solid fa-users",
            title: "Client management",
            description:
                "Register unlimited clients and keep their data organized in one place.",
        },
        {
            icon: "fa-solid fa-calendar-days",
            title: "Visit scheduling",
            description:
                "Plan visits or recurring maintenance tasks and receive timely reminders.",
        },
        {
            icon: "fa-solid fa-map",
            title: "Interactive map",
            description:
                "View all client locations on a dynamic and accessible map.",
        },
        {
            icon: "fa-solid fa-route",
            title: "Automatic routes",
            description:
                "Generate optimized routes from the first to the last client to maximize efficiency.",
        },
        {
            icon: "fa-solid fa-bell",
            title: "Notifications",
            description:
                "Get alerts for upcoming visits and clients requiring follow-up.",
        },
    ],
};

export const projectsData: Project[] = [geoClientProject];
