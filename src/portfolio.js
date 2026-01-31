/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sneha",
  title: "Hi all, I'm Sneha 👋",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience in building React Applications and Backend architectures with JavaScript / Reactjs / Nodejs / Go lang / AWS Cloud / Postgres SQL and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1n6fWLuZddlvXCLKFr7Qxt8KjSkAE67By/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Snehamohan2k",
  linkedin: "https://www.linkedin.com/in/snehamohan-profile/",
  gmail: "snehamohan2k@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    emoji("⚡ Build backend REST API's in Nodejs / Go lang"),
    emoji(
      "⚡ Integration of cloud services such as AWS S3, AWS EC2, AWS Lambda, etc"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
softwareSkills: [
  {
    skillName: "React.js",
    fontAwesomeClassname: "devicon-react-original colored"
  },
  {
    skillName: "Go lang",
    fontAwesomeClassname: "devicon-go-original-wordmark colored"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "devicon-nodejs-plain colored"
  },
  {
    skillName: "AWS Cloud",
    fontAwesomeClassname: "devicon-amazonwebservices-plain-wordmark colored"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "devicon-html5-plain colored"
  },
  {
    skillName: "CSS",
    fontAwesomeClassname: "devicon-css3-plain colored"
  },
  {
    skillName: "SCSS",
    fontAwesomeClassname: "devicon-sass-original colored"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "devicon-javascript-plain colored"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "devicon-npm-original-wordmark colored"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "devicon-postgresql-plain colored"
  },
  // {
  //   skillName: "AWS S3",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "AWS EC2",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "AWS Lambda",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "AWS SQS",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "AWS SNS",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "CloudFront",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "Amplify",
  //   fontAwesomeClassname: "fab fa-aws"
  // }
],
  // softwareSkills: [
  //   {
  //     skillName: "html-5",
  //     fontAwesomeClassname: "fab fa-html5"
  //   },
  //   {
  //     skillName: "css3",
  //     fontAwesomeClassname: "fab fa-css3-alt"
  //   },
  //   {
  //     skillName: "sass",
  //     fontAwesomeClassname: "fab fa-sass"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   // {
  //   //   skillName: "swift",
  //   //   fontAwesomeClassname: "fab fa-swift"
  //   // },
  //   {
  //     skillName: "npm",
  //     fontAwesomeClassname: "fab fa-npm"
  //   },
  //   {
  //     skillName: "postgres sql -database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   // {
  //   //   skillName: "firebase",
  //   //   fontAwesomeClassname: "fas fa-fire"
  //   // },
  //   // {
  //   //   skillName: "python",
  //   //   fontAwesomeClassname: "fab fa-python"
  //   // },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Saveetha Engineering College",
      logo: require("./assets/images/saveethaclg.jpeg"),
      subHeader: "Bachelors of Engineering - Computer Science and Engineering",
      duration: "August 2019 - May 2023",
      desc: "Technical Team Lead and Event Co-ordinator of Saveetha Coding Club. Participated in various coding competitions and hackathons.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Anna Adarsh Matriculation Higher Secondary School",
      logo: require("./assets/images/annaAdarsh.png"),
      subHeader: "High School - Computer Science",
      duration: "June 2016 - March 2019",
      desc: "Achieved academic excellence awards and secured top positions in board exams.",
      descBullets: ["LIC Student of the year", "School Topper in HSLC", "Sri Ratna Devi Award for Academic Excellence"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "92%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Qube Cinema Technologies",
      companylogo: require("./assets/images/Qubelogo.jpg"),
      date: "Aug 2023 – Present",
      desc: "Developing and maintaining end-to-end product applications using React.js, Go lang and Node.js . Collaborating with cross-functional teams to define, design, and ship new features.",
      descBullets: [
        "Built uploader application React, Redux, GO lang and AWS S3 which is used to upload digital cinema packages to cloud.",
        "Built Monitoring dashboard with Vite.js, used caching techniques to improve performance and monitoring of bookings",
        "Used Postgres DB and dyanmoDB based on use cases for different applications."
      ]
    },
    {
      role: "Junior Software Engineer Intern",
      company: "Qube Cinema Technologies",
      companylogo: require("./assets/images/Qubelogo.jpg"),
      date: "Feb 2023 – Aug 2023",
      desc: "Hash verification tool using React.js, web workers for processing large files.",
      descBullets: [ "Implemented file chunking and parallel processing to efficiently compute hashes for large files, improving performance and user experience.",
        "Integrated AWS S3 for secure file storage and retrieval, ensuring data integrity during the verification process.",
        "Maintain multiple DB status syncs with migrations"
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Excellence in Product Engineering - Nominee (DhanyaRajagopalan Award)",
      subtitle:
        "Honoured to be nominated for excellence in product engineering. This recognition reflects the dedication and constantly demonstrating a willingness to learn new things.",
      image: require("./assets/images/Qubelogo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Award Letter",
          url: "https://media.licdn.com/dms/image/v2/D562DAQEOTyomOEumCw/profile-treasury-image-shrink_800_800/B56ZV1Ua0IHoAU-/0/1741430043155?e=1770462000&v=beta&t=gR_AM_vOYP1ldQugOHWe00mzDyhJHX2NBY-xuYBEPYU"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "IBM Hack Challenge Award - 2021 (Special Jury Prize)",
      subtitle:
        "The IBM HACK CHALLENGE 2021 is a National Level Competition in which I participated as a Team and won The Special Jury Award from esteemed panel of judges who were professional industrial icons from various domains.",
      image: require("./assets/images/logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "IBM Hack Challenge Winner Announcement",
          url: require("./assets/images/ibmbanner.jpeg")
        },
        {
          name: "Winners Video Speech",
          url: "https://youtu.be/U7tgoxeZga8?si=gHzItlR-2EVBwp29"
        }
      ]
    },
    {
      title: "Cambridge University of English",
      subtitle:
        "Business English Preliminary exam- Entry Level Certificate in ESOL International",
      image: require("./assets/images/exam.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "IBM Hack Challenge Winner Announcement",
        //   url: require("./assets/images/ibmbanner.jpeg")
        // },
        // {
        //   name: "Winners Video Speech",
        //   url: "https://youtu.be/U7tgoxeZga8?si=gHzItlR-2EVBwp29"
        // }
      ]
    },
    {
      title: "LIC Student of the Year - 2015",
      subtitle: "LIC STUDENT OF THE YEAR AWARD for excellence in academics throughout the year.",
      image: require("./assets/images/LICLOGO.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://syntaxsymphony01.blogspot.com/search/label/Javascript",
      title: "Javascript - The Unexplored Parts",
      description:
        "Javascript needs no introduction, but the wierd parts of javascript are often overlooked. In this blog, we will explore some of the lesser-known features of javascript."
    },
    {
      url: "https://syntaxsymphony01.blogspot.com/search/label/AWS",
      title: "Why AWS everywhere? Let's discuss",
      description:
        "AWS is everywhere these days, and for a good reason. In this blog, we will discuss why AWS is so popular and what makes it stand out from the rest of the cloud providers."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "snehamohan2k@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
