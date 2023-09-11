import {
    graphic,
    video,
    game,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    premiere,
    git,
    photoshop,
    next,
    threejs,
    freelance,
    realtyone,
    toyota,
    youtube,
    hammerGame,
    recipeBook,
    shoppingCart
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experiece",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "review",
      title: "Review",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: game,
    },
    {
      title: "Graphic Designer",
      icon: graphic,
    },
    {
      title: "Video Editor",
      icon: video,
    },
  ];
        
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "premiere",
      icon: premiere,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "next",
      icon: next,
    },
  ];
  
  const experiences = [
    {
      title: "Real Estate Agent",
      company_name: "Realty One Group",
      icon: realtyone,
      iconBg: "#383E56",
      date: "Mar 2014 - Apr 2019",
      points: [
        "Provided unwavering support and patience to meet client needs.",
        "Actively collaborated with professionals for successful transactions.",
        "Maintained timely and reliable client communication.",
        "Skillfully resolved negotiations for positive outcomes.",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "Autonation Toyota",
      icon: toyota,
      iconBg: "#E6DEDD",
      date: "Apr 2019 - Feb 2022",
      points: [
        "Provided exceptional service by listening to customer needs and offering tailored solutions.",
        "Demonstrated patience in addressing inquiries and concerns, ensuring customer satisfaction.",
        "Resolved issues creatively, ensuring a smooth and satisfactory buying experience.",
        "Maintained up-to-date knowledge of Toyota products for informed customer guidance. "
       ],
    },
    {
      title: "Content Creator",
      company_name: "Youtube",
      icon: youtube,
      iconBg: "#383E56",
      date: "Sep 2021 - Feb 2023",
      points: [
        "Engaged 50k+ subscribers, creating content based on their feedback and building a strong online community.",
        "Produced captivating videos, fostering a loyal viewership through imaginative content.",
        "Committed to ongoing learning in content creation to stay current with trends and tools.",
        "Overcame production challenges through creative solutions, ensuring top-notch content quality.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancer",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Present",
      points: [
        "Committed to continuous learning and creative problem-solving in web development.",
        "Actively involved in open source projects, sharing knowledge and enhancing skills.",
        "Crafted custom games and websites as gifts, showcasing a personal touch in my work.",
        "Proficient in creative problem-solving to deliver efficient web solutions for clients.",
      ],
    },
  ];
  
  const reviews = [
    {
      review:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      position: "CFO",
      company: "Acme Co",
    },
    {
      review:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      position: "COO",
      company: "DEF Corp",
    },
    {
      review:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      position: "CTO",
      company: "456 Enterprises",
    },
  ];
  
  const projects = [
    {
      name: "Whac-A-Mole",
      description:
        "Web-based game that allows users to customize characters by uploading imge, providing joyful game play experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: hammerGame,
      source_code_link: "https://github.com/feihuan1/customImageWhackMoleGame",
      live_demo_link:'https://feihuan1.github.io/customImageWhackMoleGame/'
    },
    {
      name: "Recipe Book",
      description:
        "Web application that renders random recipe from food API, Each recipe pride a link to the detail on how to prepare it.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: recipeBook,
      source_code_link: "https://github.com/feihuan1/recipebook",
      live_demo_link:'https://feihuan1.github.io/recipebook/'
    },
    {
      name: "Fashion Store",
      description:
        "A fully functional e-com site with shopping cart feature, allow user to add, modify and delete item from their cart.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: shoppingCart,
      source_code_link: "https://github.com/feihuan1/ShopppingCart",
      live_demo_link:'https://feihuan1.github.io/ShopppingCart/'
    },
  ];
  
  export { services, technologies, experiences, reviews, projects };