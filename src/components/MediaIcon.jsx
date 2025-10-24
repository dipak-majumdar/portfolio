import React from "react";
import media from "../consts/media";

// Import the icons
import discordIcon from '../assets/images/icons/discord.svg';
import githubIcon from '../assets/images/icons/github.svg';
import emailIcon from '../assets/images/icons/email.svg';
import figmaIcon from '../assets/images/icons/figma.svg';
import dribbleIcon from '../assets/images/icons/dribble.svg';
import telegramIcon from '../assets/images/icons/telegram.svg';
import twitterIcon from '../assets/images/icons/twitter.svg';
import linkedinIcon from '../assets/images/icons/linkedin.svg';

const iconMap = {
    discord: discordIcon,
    github: githubIcon,
    email: emailIcon,
    figma: figmaIcon,
    dribble: dribbleIcon,
    telegram: telegramIcon,
    twitter: twitterIcon,
    linkedin: linkedinIcon
};

export default function MediaIcon({ name }) {
    return (
        <a 
            href={media[name]} 
            className="media"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img 
                src={iconMap[name]} 
                alt={name} 
                className="media__icon"
            />
        </a>
    );
}