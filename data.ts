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
        image_path: '/skills/javascript.png', 
    },
    {
        name: 'React',
        image_path: '/skills/react.png', 
    },
    {
        name: 'Node',
        image_path: '/skills/nodejs.png', 
    },
    // {
    //     name: 'MongoDB',
    //     image_path: '/../public/skills/Mongo.png', 
    // },
    {
        name: 'HTML',
        image_path: '/skills/html.png', 
    },
    {
        name: 'TypeScript',
        image_path: '/skills/typescript.png', 
    },
    {
        name: 'CSS',
        image_path: '/skills/css.png', 
    },
    {
        name: 'GitHub',
        image_path: '/skills/github.png', 
    },
    {
        name: 'Next',
        image_path: '/skills/nextjs.png', 
    },
    {
        name: 'Tailwind',
        image_path: '/skills/tailwind.png', 
    },
]

export const projects:IProject[] = [
    {
        id: 1,
        name: "Example Ecommerce Site",
        description: 'A dummy Ecommerce store for selling electronics. Each product is labeled with a price.\n' +
        'Clicking on the product will redirect you to the product page which displays product information like the\n' +
        'products rating, details, image, and price. Choose the product quantity you want and add it to the cart or choose\n' +
        'buy now which will redirect you to the shopping cart where I use a dummy stripe account to process the purchase.\n' +
        'Click on the website logo to redirect back to the home page.',
        image_path: '/img/EXAMPLE_ECOMMERCE_SITE.png',
        projectUrl: 'ecommerce',
        deployed_url: 'https://ecommerce-site-eight.vercel.app',
        github_url: 'https://github.com/TheTwistedDev/ecommerce-site',
        category: ["react", "express", "node",],
        key_techs: ["React", "Next", "Sanity", "Stripe", "Tailwind"],
    }, 
    {
        id: 2, 
        name: "Example Blog Site",
        description: 
        'This project is basic blogging site that can create blog posts for readers to read and comment on.\n' +
        'To create a post I update the Sanity backend with a new blog post and then it gets pushed onto the front end to display to readers\n' +
        'The readers can then add comments and in order for the comments to be seen I have to verify them for appropriateness once I verify them\n' +
        'the comments can then be viewed by everyone visiting the site. The navbar is currently only using the site logo as a way to redirect to\n' +
        'the home page.',
        image_path: '/img/EXAMPLE_BLOG_SITE.png',
        projectUrl: 'blog',
        deployed_url: "https://blog-site-with-sanity.vercel.app",
        github_url: "https://github.com/TheTwistedDev/blog-site-with-sanity",
        category: ["react", "typescript", "node"],
        key_techs:["React", "Next", "Sanity", "Typescript","Tailwind"],
    },
    // {
    //     id: 3,
    //     name: "NFT MarketPlace",
    //     description: 
    //     'This app is a Test NFT MarketPlace',
    //     image_path: '/img/NFT_MarketPlace.png',
    //     projectUrl: 'nftmarketplace',
    //     deployed_url: 'https://nft-challenge-xi.vercel.app',
    //     github_url: 'https://github.com/TheTwistedDev/nft-challenge',
    //     category: ["react", "express", "node", "typescript"],
    //     key_techs: ["React", "Next", "ThirdWeb", "Sanity", "Typescript", "Next-Auth", "Tailwind"],
    // },
]