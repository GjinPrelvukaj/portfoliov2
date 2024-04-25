import { link } from "fs";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Wordpress",
    Image: "/wordpress.png",
    width: 80,
    height: 80,
  },
  {
    name: "MySQL",
    Image: "/mysql.png",
    width: 80,
    height: 80,
  },
  {
    name: "PHP",
    Image: "/php.png",
    width: 80,
    height: 80,
  },
  {
    name: "Python",
    Image: "/python.png",
    width: 80,
    height: 80,
  },

];

export const Socials = [
  {
    name: "Github",
    src: "/github-mark-white.svg",
    link: 'https://github.com/GjinPrelvukaj'
    
  },
  {
    name: "LinkedIn",
    src: "/linkedin-white.svg",
    link: 'https://www.linkedin.com/in/gjin-prelvukaj-3bab5b23a/'
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: 'https://www.instagram.com/gjinprelvukaj/'
  },
];
export const Projects = [
  {
    title: "Portfolio ",
    text: "This was the first portfolio i have ever made using React.js , ChackraUI and Tailwind ",
    src: "/portfolio.png",
    link: 'https://github.com/GjinPrelvukaj/Portfolio'
  },
  {
    title: "Balkatour",
    text: "I was part of a team which we participated on a race with the whole balkan for the best project",
    src: "/balkatour.png",
    link: "https://github.com/lirikrexhepi/Balkatour"
  },
  {
    title: "Stress Free Corner",
    text: "A project which i made called 'Stress Free Corner' , which i created and managed using wordpress",
    src: "/sfc.png",
    link: 'https://stressfreecorner.co/'
  },
  {
    title: "Fix My Downloads",
    text: "A website and a software i made using python to help organize your Downloads folder",
    src: "/fmd.png",
    link: 'https://fmd-website-zeta.vercel.app/'
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];