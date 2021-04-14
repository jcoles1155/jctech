import Mock from "../mock";

const database = {
  information: {
    name: 'JC Coles',
    aboutContent: "Full Stack Web Developer with a passion for creating great products.  When I'm not busy building websites you can catch me surfing in Ventura, CA with a guitar in one hand and a beer in the other.  Dive in and take a look at some of my work!",
    age: 26,
    phone: '6613192747',
    location: 'Ventura, CA',
    language: 'English',
    email: 'jcoles1155@gmail.com',
    address: '880 Buena Vista st 93001',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/jcoles1155/',
      twitter: 'https://twitter.com/jcoles1155',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/nicholas-jc-coles-314495a6/',
      dribbble: '',
      github: 'https://github.com/jcoles1155',
      instagram: 'https://www.instagram.com/jcoles1155/'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/winery-family.jpg',
    aboutImageLg: '/images/family-winery-large.jpg',
    cvfile: '/files/jc_coles_resume.pdf'
  },
  services: [
    {
      title: "Frontend Web Design",
      icon: 'color-pallet',
      details: "With a strong sense of common frontend technologies like SASS, Bootstrap, and JQuery, I know we can build something that looks great!"
    },
    {
      title: "Backend Web Development",
      icon: 'code',
      details: "Using modern backend tools built with Node like Express and MongoDB, as well as relational databases with PostgreSQL; I'm excited to work on projects that have larger and more complex codebases!"
    },
    {
      title: "Content Creation",
      icon: 'camera',
      details: "From videography to music production I've worked on enough projects to find a solution with the Adobe suite that could fit your next projects needs.  Check out my content and let's collaborate!"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "Javascript",
      value: 60
    },
    {
      title: "Express",
      value: 50
    },
    {
      title: "MongoDB",
      value: 50
    },
    {
      title: "SQL",
      value: 30
    },
    {
      title: "ReactJS",
      value: 50
    },
    {
      title: "Python",
      value: 40
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Gigboard",
      subtitle: "Simple yet fun React app on a Mongo database, using github to help collaborate on a 6 person team",
      imageUrl: "/images/gigboard.png",
      largeImageUrl: ["/images/gigboardLRG.png"],
      url: 'https://gig-board.herokuapp.com/'
    },
    {
      id: 2,
      title: "BeerFinder",
      subtitle: "Express app using MongoDB and mongoose to have full CRUD functionality.",
      imageUrl: "/images/beerfinder.png",
      largeImageUrl: [
        "/images/beerfinder.png"],
      url: 'https://arcane-tundra-61980.herokuapp.com/'
    },
    {
      id: 3,
      title: "Game of Pure Strategy",
      subtitle: "Card game built with jquery using common best practices and basic principles",
      imageUrl: "/images/GOPS.png",
      url: 'https://jcoles1155.github.io/GOPS/index.html'
    },
    // {
    //   id: 4,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 5,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // },
    // {
    //   id: 6,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    // },
    // {
    //   id: 7,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://twitter.com'
    // },
    // {
    //   id: 8,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    // },
    // {
    //   id: 9,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    // },
    // {
    //   id: 10,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 11,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 12,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 13,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 14,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // },
    // {
    //   id: 15,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    // },
    // {
    //   id: 16,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://twitter.com'
    // },
    // {
    //   id: 17,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    // },
    // {
    //   id: 18,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    // },
    // {
    //   id: 19,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 20,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 21,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 22,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 23,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Network Technician",
        company: "Surfline",
        details: "Install cameras and routers, as well as troubleshoot equipment in my region."
      },
      {
        id: 2,
        year: "2017 - Present",
        position: "Office Administrator, Machinist",
        company: "Coles Carbide Corporation",
        details: "Managed the implementation of the inventory and warehouse management systems and software.  Operate precision metalworking and laser etching machinery."
      },
      {
        id: 3,
        year: "2019 - 2020",
        position: "Cellar Person",
        company: "Madewest Brewing Company",
        details: "Facilitated cellar operations in preperation for and during brews, including the dry hopping of most of our beers.  Assisted in the packaging and canning of all beer manufactured."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Software Engineering Immersive",
        university: "General Assembly",
        details: "Software Engineering program with a focus in Javascript in the MERN stack.  Skills in React were supplemented with a knowledge of python in Django, and SQL in PostgreSQL"
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "General Education",
        university: "Ventura College",
        details: "Emphasis on computer science dabbling in java, python, and basic web technologies in the LAMP stack."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Deploying a React site on Netlify',
      featuredImage: '/images/netlify-logo.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "6",
      createMonth: 'April',
      createYear: "2021"
    },
    // {
    //   id: 2,
    //   title: 'Installing NodeJS on your device.',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/installing-nodejs-on-your-device.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 3,
    //   title: 'UI/UX design starter with Adobe XD.',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 4,
    //   title: 'Boost your post for increasing sales.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/boost-your-post-for-increasing-sales.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 5,
    //   title: 'Difference between GatsbyJS & NextJS.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 6,
    //   title: 'How to choose javascript framework for project.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 7,
    //   title: 'Web automation with python language.',
    //   featuredImage: '/images/blog-image-7.jpg',
    //   filesource: '../../blog/web-automation-with-python-language.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 8,
    //   title: 'Time to use latest technology for creating a website.',
    //   featuredImage: '/images/blog-image-8.jpg',
    //   filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 9,
    //   title: 'Think out of the box.',
    //   featuredImage: '/images/blog-image-9.jpg',
    //   filesource: '../../blog/think-out-of-the-box.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 10,
    //   title: 'Trending designs in 2020.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/trending-designs-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 11,
    //   title: 'How to get 10k instagram followers?',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/how-to-get-10k-instagram-followers.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 12,
    //   title: 'What NodeJS can do?',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/what-nodejs-can-do.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 13,
    //   title: 'Futures of javascript.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/future-of-javascript.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 14,
    //   title: 'Popular javascript library in 2020.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/popular-javascript-library-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 15,
    //   title: 'Promrammers must read books.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/programmers-must-read-books.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // }
  ],
  contactInfo: {
    phoneNumbers: ['661-319(2747)'],
    emailAddress: ['jcoles1155@gmail.com'],
    address: "880 Buena Vista st, 93001"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});