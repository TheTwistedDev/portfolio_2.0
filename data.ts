import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService, ISkill, IProject } from "./types";
import { BsCircleFill } from "react-icons/bs"

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'Build beautiful and scalable applications using <b> HTML </b>, <b> CSS </b> and <b> React.js </b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      "Handle database, server, and api's using <b> Express </b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API's using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Daily problem solver in <b>Leet Code</b> ",
  },
//   {
//     Icon: AiOutlineAntDesign,
//     title: "UI/UX designer",
//     about:
//       "Create stunning user interface designs using <b>Figma</b> and <b>Framer</b> ",
//   },
//   {
//     Icon: RiComputerLine,
//     title: "Whatever",
//     about:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
//   },
];

export const languages: ISkill  [] = [
    {
        name: 'JavaScript',
        image_path: '../public/skills/javascript.png', 
    },
    {
        name: 'React',
        image_path: '../public/skills/react.png', 
    },
    {
        name: 'Node',
        image_path: '../public/skills/nodejs.png', 
    },
    // {
    //     name: 'MongoDB',
    //     image_path: '/../public/skills/Mongo.png', 
    // },
    {
        name: 'HTML',
        image_path: '../public/skills/html.png', 
    },
    {
        name: 'TypeScript',
        image_path: '../public/skills/typescript.png', 
    },
    {
        name: 'CSS',
        image_path: '../public/skills/css.png', 
    },
    {
        name: 'GitHub',
        image_path: '../public/skills/github.png', 
    },
    {
        name: 'Next',
        image_path: '/../public/skills/nextjs.png', 
    },
    {
        name: 'Tailwind',
        image_path: '../public/skills/tailwind.png', 
    },
]

export const projects:IProject[] = [
    {
        id: 1,
        name: "Example Ecommerce Site",
        description: 
        'This app is an example ecommerce site',
        image_path: '/../public/img/EXAMPLE_ECOMMERCE_SITE.png',
        projectUrl: 'ecommerce',
        deployed_url: 'https://ecommerce-site-eight.vercel.app',
        github_url: 'https://github.com/TheTwistedDev/ecommerce-site',
        category: ["react", "express", "node",],
        key_techs: ["React", "Next", "Sanity", "Stripe", "Tailwind"],
    }, 
    {
        id: 2, 
        name: "Example Blog",
        description: 
        "This site is an example blog site",
        image_path: '/../public/img/EXAMPLE_BLOG_SITE.png',
        projectUrl: 'blog',
        deployed_url: "https://blog-site-with-sanity.vercel.app",
        github_url: "https://github.com/TheTwistedDev/blog-site-with-sanity",
        category: ["react", "typescript", "node"],
        key_techs:["React", "Next", "Sanity", "Typescript","Tailwind"],
    },
    {
        id: 3,
        name: "NFT MarketPlace",
        description: 
        'This app is a Test NFT MarketPlace',
        image_path: '/../public/img/NFT_MarketPlace.png',
        projectUrl: 'nftmarketplace',
        deployed_url: 'https://nft-challenge-xi.vercel.app',
        github_url: 'https://github.com/TheTwistedDev/nft-challenge',
        category: ["react", "express", "node", "typescript"],
        key_techs: ["React", "Next", "ThirdWeb", "Sanity", "Typescript", "Next-Auth", "Tailwind"],
    },
]