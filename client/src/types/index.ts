export type navItemType = {
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

export type slideType = {
    id: number;
    title: string;
    img: string;
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
