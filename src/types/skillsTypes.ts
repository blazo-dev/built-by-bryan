export interface SkillItem {
    label: string;
    iconClass: string;
}

export interface SkillCategory {
    title: string;
    icons?: SkillItem[];
    items?: SkillItem[];
}
