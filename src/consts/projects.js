
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        name: "Fastlinky",
        links: {
            live: "deplos.github.io",
            github: "Deplos/deplos.github.io"
        },
        techs: ["PHP", "MySql", "JS", "Bootstrap"],
        hasImage: true,
    },
    {
        name: "Viacon",
        links: {
            live: "pixelbattle.fun",
            github: "pixelate-it/pixelbattle-frontend",
        },
        techs: ["Laravel", "JS", "MySql", "Bootstrap"],
        hasImage: true
    },
    {
        name: "MSOLS Int",
        links: {
            github: "Feedrum-Project/feedrum-next",
            figma: "1314605686829534158"
        },
        techs: ["HTML", "CSS", "JS", "Tailwind"],
        hasImage: true,
    },
    {
        name: "LeeLija",
        links: {
            figma: "1149829028455305659",
        },
        techs: ["Laravel", "JS", "MySql", "Bootstrap"],
        hasImage: true,
    },
    {
        name: "Sona Group",
        techs: ["PHP", "MySql", "JS", "Bootstrap"],
        links: {
            figma: "1168662007492356291",
        },
        hasImage: true,
    },
    {
        name: "Stock Nova",
        techs: ["Django", "React", "Sqlite", "Bootstrap"],
        links: {
            live: "khanswers.vercel.app",
            github: "/kahoot-answers",
        },
        hasImage: true,
    },
    {
        name: "Sundaram",
        techs: ["Django", "MySql", "JS", "Tailwind"],
        links: {
            live: "kotikbot.github.io",
            github: "kotikbot/kotikbot.github.io",
        },
        hasImage: true,
    },
    {
        name: "Medicy",
        techs: ["PHP", "MySql", "React", "JS", "Bootstrap"],
        links: {
            figma: "1164933568884615740",
            github: "/EliasDevis.github.io",
            live: "eliasdevis.github.io"
        },
        hasImage: true,
    },
];

export default projects;