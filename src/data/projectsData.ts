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
    ],
};

export const mvcTailwindTemplate: Project = {
    title: "Lazt.MvcTailwind.Template",
    subtitle: "ASP.NET MVC + TailwindCSS Starter",
    previewLink: "https://www.nuget.org/packages/Lazt.MvcTailwind.Template/",
    repoLink: "https://github.com/blazo-dev/mvclazt/",
    description:
        "A ready-to-use ASP.NET MVC template fully integrated with TailwindCSS. Designed as a solid starting point for modern web applications, it provides a clean MVC structure, responsive UI, and hot reload support. Published on NuGet for quick installation and project setup.",
    icon: "fa-solid fa-code",
    technologies: [
        { name: ".NET 8", bg: "bg-purple-700", text: "text-white" },
        { name: "ASP.NET MVC", bg: "bg-indigo-600", text: "text-white" },
        { name: "TailwindCSS", bg: "bg-sky-400", text: "text-slate-900" },
        { name: "Node.js", bg: "bg-green-600", text: "text-white" },
    ],
    features: [
        {
            icon: "fa-solid fa-bolt",
            title: "Hot Reload",
            description:
                "Run your app with `dotnet watch run` and see changes instantly.",
        },
        {
            icon: "fa-solid fa-terminal",
            title: "CLI Ready",
            description:
                "Install from NuGet and scaffold projects directly with the .NET CLI.",
        },
    ],
};

export const projectsData: Project[] = [geoClientProject, mvcTailwindTemplate];
