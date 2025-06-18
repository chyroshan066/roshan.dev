export type navLinkType = {
    name: string;
    href: string;
}

export type bentoSocialLinkType = {
    name: string;
    href: string;
    icon: string;
}

export type iconsListType = {
    name: string;
    image: string;
}

// export type slideType = {
//     id: number;
//     title: string;
//     img: string;
// }

export type projectType = {
    id: number;
    title: string;
    description?: string;
    img: string;
    technologies?: string[];
    category?: 'personal' | 'client';
    liveURL?: string;
    githubURL?: string;
}

export type testimonialType = {
    name: string;
    pos: string;
    review: string;
    imgPath: string;
    linkedinUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    tiktokUrl?: string;
    xUrl?: string;
}

export type footerIconListType = {
    name: string;
    href: string;
    icon: string;
}

export type formType = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type certificateType = {
    name: string;
    color: string;
}

export type workExperienceType = {
    id: number;
    title: string
    company: string
    period: string
    status: string
    logo: "🏛️",
    details: string[];
    certificates: certificateType[];
}

export type eduactionType = {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    status: string;
    description: string;
    year: string;
    position: number;
}

export type certificateType2 = {
    id: number;
    title: string;
    organization: string;
    date: string;
    image: string;
    description?: string;
    credentialUrl?: string;
}

type Technology = {
    name: string;
    icon: string;
    color?: string;
}

export type serviceType = {
    id: number;
    title: string;
    description: string;
    features: string[];
    technologies: Technology[];
    icon: string;
}

