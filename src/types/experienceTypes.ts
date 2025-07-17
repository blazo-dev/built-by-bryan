export interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    mode: "Remote" | "On-site" | "Hybrid";
    startDate: string;
    endDate: string | "Present";
    responsibilities: string[];
    icon: string;
}
