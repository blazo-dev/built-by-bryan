export const portfolioData = {
    personalInfo: {
        title: "Full-Stack Developer",
        name: "Bryan Lazo",
        formalImage: "/images/me.png",
        imageAlt: "Bryan Lazo, Full-Stack Developer",
        headline: "Hey, I'm Bryan Lazo",
        summary:
            "+3 years of experience building scalable web apps & software solutions",
        description:
            "Portfolio of Bryan Lazo, a Full-Stack Developer showcasing professional experience, technical skills, and full-stack projects. Includes work history, education, personal projects, and training through the WOS & ACE Technical Talent Program.",
    },
    workExperience: [
        {
            role: "IT Technician III",
            company: "Reconext",
            period: "January 2025 - Present",
            description:
                "Performed quality assurance testing on VR headsets to ensure optimal functionality. Conducted diagnostics to identify hardware and software issues, executed full data wipes and factory resets, and verified device performance before distribution. Collaborated with the technical team to improve quality control processes and documented all detected issues during testing.",
        },
        {
            role: "Sales Representative",
            company: "Royal Prestige",
            period: "October 2023 - January 2025",
            description:
                "Developed communication and negotiation skills by interacting with diverse clients. This role helped me understand customer needs and reinforced my ability to deliver tailored solutions under tight deadlines.",
        },
        {
            role: "Java Software Engineer",
            company: "Group Consiti",
            period: "June 2023 - October 2023",
            description:
                "Developed scalable software solutions using Java, Spring Boot, and Oracle SQL. Optimized ETL processes and automated tasks with UC4, improving efficiency by 20%. Led a training program where 6 developers were successfully hired. Contributed to enterprise applications deployed in cloud environments like AWS.",
        },
        {
            role: "Angular Developer",
            company: "Applaudo Studios",
            period: "November 2022 - April 2023",
            description:
                "Designed and implemented responsive web interfaces using Angular, ensuring a seamless experience across devices. Collaborated with backend teams to integrate APIs and resolve cross-browser compatibility issues, boosting application performance and user satisfaction.",
        },
    ],
    projects: [
        {
            title: "Billify - Customer & Invoice Management (In Progress)",
            technologies: [
                { label: "Java" },
                { label: "Spring Boot" },
                { label: "Angular" },
                { label: "MySQL" },
            ],
            description:
                "Billify is a full-stack business application for managing customers and invoices. It features user authentication, role-based authorization, activity logging, two-factor authentication, PDF and Excel report generation, and a secure multi-role dashboard. Built using Java and Spring Boot for the backend, Angular for the frontend, and MySQL as the relational database.",
            imageAlt:
                "Screenshot of the Billify application showing customer and invoice management UI",
            imageUrl: "/projects/billify.webp", // TODO: Set real image
            links: [
                {
                    label: "Preview",
                    url: "https://github.com/blazo-dev/billify-customer-invoice-management",
                }, // TODO: Add real preview link
                {
                    label: "Code",
                    url: "https://github.com/blazo-dev/billify-customer-invoice-management",
                },
            ],
        },
    ],
    about: {
        title: "About Me",
        imageUrl: "/images/about-me.png",
        imageAlt:
            "Bryan Lazo receiving his Systems Engineering degree during graduation ceremony",
        content: [
            {
                text: "I'm Bryan Lazo, ",
                emphasis: null,
            },
            {
                text: "a software developer from El Salvador 🇸🇻.\n",
                emphasis: null,
            },
            {
                text: "I began my programming journey in high school ",
                emphasis: null,
            },
            {
                text: "and later pursued an Associate Degree in Systems Engineering.\n",
                emphasis: "strong",
            },
            {
                text: "Since then, ",
                emphasis: null,
            },
            {
                text: "I've contributed to impactful projects,\n",
                emphasis: null,
            },
            {
                text: "mentored junior developers,\n",
                emphasis: "strong",
            },
            {
                text: "and grown into a full-stack engineer ",
                emphasis: null,
            },
            {
                text: "working with companies across Latin America and the U.S.\n",
                emphasis: "strong",
            },
        ],
        highlightCards: [
            {
                title: "Education",
                description: "Associate Degree in Systems Engineering",
            },
            {
                title: "Experience",
                description: "Companies across Latin America and the U.S.",
            },
            {
                title: "Mentorship",
                description: "Mentored and trained 6 developers",
            },
            {
                title: "Current Project",
                description:
                    "WOS Training Program focused on full-stack development.",
            },
        ],
    },
    skills: {
        title: "Skills",
        categories: [
            {
                title: "Technologies",
                icons: [
                    { label: "Java", iconClass: "fab fa-java text-red-600" },
                    {
                        label: "C#",
                        iconClass: "fas fa-hashtag text-purple-600",
                    },
                    {
                        label: "Angular",
                        iconClass: "fab fa-angular text-red-600",
                    },
                    {
                        label: "Spring Boot",
                        iconClass: "fas fa-leaf text-green-600",
                    },
                    { label: "React", iconClass: "fab fa-react text-blue-500" },
                    {
                        label: "SQL",
                        iconClass: "fas fa-database text-blue-600",
                    },
                    {
                        label: "Python",
                        iconClass: "fab fa-python text-yellow-600",
                    },
                    {
                        label: "Git",
                        iconClass: "fab fa-git-alt text-orange-600",
                    },
                    { label: "AWS", iconClass: "fab fa-aws text-orange-500" },
                ],
            },
            {
                title: "Development",
                items: [
                    { label: "Clean Code Practices", iconClass: "fas fa-code" },
                    { label: "Debugging & Testing", iconClass: "fas fa-bug" },
                    { label: "Agile Methodologies", iconClass: "fas fa-sync" },
                    {
                        label: "MVC Architecture",
                        iconClass: "fas fa-layer-group",
                    },
                    {
                        label: "ETL Processes",
                        iconClass: "fas fa-exchange-alt",
                    },
                    { label: "UC4 Automation", iconClass: "fas fa-robot" },
                ],
            },
            {
                title: "Soft Skills",
                items: [
                    {
                        label: "Mentoring & Training",
                        iconClass: "fas fa-chalkboard-teacher",
                    },
                    { label: "Communication", iconClass: "fas fa-comments" },
                    { label: "Teamwork", iconClass: "fas fa-users" },
                    { label: "Problem Solving", iconClass: "fas fa-lightbulb" },
                    { label: "Time Management", iconClass: "fas fa-clock" },
                    {
                        label: "Continuous Learning",
                        iconClass: "fas fa-chart-line",
                    },
                ],
            },
        ],
    },
    footer: "Bryan Lazo",
    sections: [
        {
            id: "home",
            label: "Home",
            path: "/#home",
            showInNav: true,
        },
        {
            id: "experience",
            label: "Experience",
            path: "/#experience",
            showInNav: true,
        },
        {
            id: "projects",
            label: "Projects",
            path: "/#projects",
            showInNav: true,
        },
        {
            id: "wos",
            label: "WOS",
            path: "/#wos",
            showInNav: true,
        },
        {
            id: "about",
            label: "About",
            path: "/#about",
            showInNav: true,
        },
        {
            id: "skills",
            label: "Skills",
            path: "/#skills",
            showInNav: true,
        },
        {
            id: "contact",
            label: "Contact",
            path: "/#contact",
            showInNav: true,
        },
        {
            id: "blog",
            label: "Blog",
            path: "/blog",
            showInNav: false,
        },
    ],
};
