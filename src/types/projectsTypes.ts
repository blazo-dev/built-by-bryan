export interface Technology {
    name: string;
    bg: string;
    text: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    technologies: Technology[];
    features: Feature[];
    repoLink: string;
    previewLink: string;
}
