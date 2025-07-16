export interface WosPhase {
    title: string;
    icon: string;
    content: string;
}

export interface WosData {
    title: string;
    partners: string[];
    description: string;
    phases: WosPhase[];
    quote: string;
}
