import {
  mobile,
  backend,
  web,
  npv_cover,
  note_cover,
  tripguide,
  proEv,
  iRoid,
  android,
  androidLogo,
  reactLogo,
  backendLogo,
  my_banks,
  sign_in,
  sign_up,
  home_page,
  transactions,
  transfer_money,
  add_banks,
  ni_home,
  ni_search,
  ni_image_upload,
  ni_reminder,
  ni_light_theme,
  sd_home,
  sd_graph1,
  sd_graph2,
  sd_graph3,
  qq_home,
  qq_result,
  qq_ans_right,
  qq_ans_wrong,
  qq_last_score,
  sd_post,
} from "../assets";

export const heroImgList = [androidLogo, reactLogo, backendLogo];

export const navLinks = [
  {
    id: "hero",
    title: "",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: android,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Manufacturing Technician (Team Leader)",
    company_name: "ProEV",
    icon: proEv,
    iconBg: "#383E56",
    date: "Jun 2023 - May 2024",
    points: [
      "As a skilled Manufacturing Technician, I specialize in assembling high-voltage cables from inception, overseeing the process from scratch to completion.",
      "Delivering and enhancing new and current solutions and applications throughout the full project life cycle.",
      "Enhancing the end-user experience by finding scalable solutions and effectively communicating with both technical and non-technical clients.",
      "Adeptly managing a dynamic team of 10 members, providing necessary tools and equipment, training and fostering a collaborative environment to enhance work efficiency.",
      "Recognized for leadership in driving continuous improvement initiatives, optimizing processes, and ensuring a safe and compliant working environment.",
      "Skills: Technical Proficiency, Quality Assurance, Team Leadership, Process Optimization, Safety Compliance, Continuous Improvement.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "iRoid Solutions",
    icon: iRoid,
    iconBg: "#E6DEDD",
    date: "Dec 2018 - Jan 2021",
    points: [
      "Worked on development of Android Applications using Java and Kotlin.",
      "Primarily responsible for creating new applications, implementing new features in existing applications, and improving the performance of applications under strict deadlines.",
      "Collaborated with the team to improve end user experience, troubleshoot and fix bugs.",
      "Proficiently engage with clients to discern their inquiries and adeptly articulate technical methodologies in a layman's terms, demonstrating a skillful blend of communication and technical prowess.",
      "Became familiar with and used design patterns such as MVVM/MVC in application architecture.",
      "Used various technologies and APIs like RxJava, Koin, Room, RESTful apis, Google apis, Firebase services, etc. to improve code quality and enhance app performance.",
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
    name: "NVP Banking System",
    brief_description:
      "This web application offers a comprehensive solution for individuals seeking to simplify their financial management. By consolidating accounts, streamlining transactions, and providing valuable financial insights, this platform empowers users to take control of their financial well-being.",
    description: [
      "• Developed a secure online banking system using Next.js and TypeScript for a seamless user experience.",
      "• Implemented user authentication and secure ID technology for safe and efficient money transfers.",
      "• Integrated Tailwind CSS for responsive design and a modern user interface.",
      "• Consolidated all transaction information into a centralized platform using Chart.js for data visualization.",
      "• Utilized various cutting-edge technologies Plaid, Dwolla, appwrite, sentry (for security) to ensure optimal performance and scalability.",
      "• Project demonstrates strong proficiency in front-end development, data visualization, and secure user authentication.",
    ],
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
    ],
    image: npv_cover,
    screen_shots: [
      sign_in,
      sign_up,
      home_page,
      my_banks,
      transactions,
      transfer_money,
      add_banks,
    ],
    source_code_link: "https://github.com/pranav5601/VPN-BankingSystem",
  },
  {
    name: "Note It",
    brief_description:
      "This secure local note-taking application empowers users to capture, organize, and access critical information effectively. The focus on data privacy, offline functionality, reminder features to ensure timely follow-up, and multimedia integration caters to users seeking a reliable and feature-rich note-taking solution for their desktop environment.",
    description: [
      "• Similar UI with similar functionality such as save notes transforming them into convenient reminders.",
      "• Data sync with servers, made using Node.JS, Express and MongoDB and data caching with Room DB relations.",
      "• Capture moments with integrated photo functionality, adding visual context to your notes.",
      "• Unleash creativity by drawing directly within the notes for a personalized touch.",
      "• Built with Kotlin, Room Database, MVVM architecture, Koin (DI), and Coroutines for a seamless and robust user experience.",
    ],
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
    image: note_cover,
    screen_shots: [
      ni_home,
      ni_search,
      ni_image_upload,
      ni_reminder,
      ni_light_theme,
    ],
    source_code_link: "https://github.com/pranav5601/FlashNotes",
  },
  {
    name: "Stock Details",
    brief_description:
      "A basic stock App which can help you to get the line chart of the stock progress.",
    description: [
      "• A dynamic Android application developed in Kotlin using Jetpack Compose for a modern and intuitive user interface.",
      "• Provides a curated display of all stocks listed in the market, offering users easy access to vital information.",
      "• Empowers users to swiftly locate specific stocks with search functionality, enhancing the app's usability and efficiency.",
      "• Utilizes Canvas and Paint classes to create interactive and visually appealing graphs, offering users insightful representations of stock performance.",
    ],
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "JetpackCompose",
        color: "green-text-gradient",
      },
      {
        name: "Coroutine",
        color: "pink-text-gradient",
      },
    ],
    image: sd_post,
    screen_shots: [sd_home, sd_graph1, sd_graph2, sd_graph3],
    source_code_link: "https://github.com/pranav5601/StockDetails",
  },
  {
    name: "Quick Quiz",
    brief_description:
      "A quiz app which helps your infants to keep them on their toe. with previous score comparision you can keep track of your progress.",
    description: [
      "• Android application for fun and engaging learning.",
      "• Built with MVVM architecture for maintainable and scalable code.",
      "• Utilizes Jetpack Navigation for a seamless user experience.",
      "• Allows users to track their last scores and monitor progress",
      "• Backed by Firebase for robust backend support.",
      "• Includes local database synchronization for offline capabilities.",
      "• Perfect for anyone looking to challenge themselves and enhance their learning.",
    ],
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Jetoack Navigation",
        color: "green-text-gradient",
      },
      {
        name: "Coroutine",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    screen_shots: [
      qq_home,
      qq_last_score,
      qq_ans_right,
      qq_ans_wrong,
      qq_result,
    ],
    source_code_link: "https://github.com/pranav5601/QuickQuiz",
  },
];

export { services, experiences, testimonials, projects };
