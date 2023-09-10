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
    freelance,
    realtyone,
    toyota,
    youtube,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };