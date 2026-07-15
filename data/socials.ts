import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiReaddotcv } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { portfolioData } from "./portfolio";

export interface socialLink {
    name: string;
    url: string;
    icon: IconType
}

export const socialLinks: socialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/akshitakoladiya",
        icon: SiGithub,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/akshita-koladiya-b28977140",
        icon: SlSocialLinkedin,
    },
    {
        name: "Email",
        url: "mailto:akshitakoladiya9697@gmail.com",
        icon: MdEmail,
    },
    {
        name: "Resume",
        url: portfolioData.profile.resume,
        icon: SiReaddotcv,
    },
];