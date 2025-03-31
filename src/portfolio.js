const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sukhveer-001.github.io/Portfolio',
  title: 'SS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sukhveer Singh',
  role: 'Front End Engineer',
  description:
    'Hi, I am Sukhveer Singh, a passionate Frontend Developer with a knack for creating responsive and dynamic web applications. I have hands-on experience with HTML, CSS, JavaScript, ReactJS, and Tailwind CSS, along with a growing understanding of backend technologies.',

  resume: '/resume.pdf', // if no resume, the button won't show up
  social: {
    linkedin: 'https://www.linkedin.com/in/sukhveer47',
    github: 'https://github.com/Sukhveer-001',
  },
}
const projects = [
  // Add, modify, or remove projects
  {
    name: 'HireHub',
    description:
      'A fully functional placement portal for students and administrators, with features such as user authentication, placement listings, and application tracking.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Express.js', 'MongoDB'],
    sourceCode: 'https://github.com/Sukhveer-001/HireHub',
    livePreview: 'https://hirehub.example.com', // Add live link if deployed
  },
  {
    name: 'Fit Flow',
    description:
      'A fitness workout generator application that helps users create personalized workout routines with just a few clicks.',
    stack: ['React', 'CSS', 'API'],
    sourceCode: 'https://github.com/Sukhveer-001/FitFlow',
    livePreview: 'https://fit-flow-react.netlify.app',
  },
  {
    name: 'To Do App',
    description:
      'A minimalist and responsive to-do list application to manage daily tasks efficiently with the ability to add, delete, and mark tasks as complete.',
    stack: ['React', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Sukhveer-001/To-Do-App',
    livePreview: 'https://react-cool-to-do-app.netlify.app',
  },
  // {
  //   name: 'Portfolio Website',
  //   description:
  //     'A clean and responsive portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience.',
  //   stack: ['React', 'Tailwind CSS', 'GitHub Pages'],
  //   sourceCode: 'https://github.com/Sukhveer-001/portfolio',
  //   livePreview: 'https://sukhveer-001.github.io/portfolio', // Add link if deployed
  // },
  // {
    // name: 'Placement Cell Admin Panel',
    // description:
      // 'An admin panel for managing student placements, applications, and recruiter listings with advanced filtering and reporting features.',
    // stack: ['React', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    // sourceCode: 'https://github.com/Sukhveer-001/placement-admin',
    // livePreview: 'https://admin.hirehub.com', // Add link if deployed
  // },
]

const skills = [
  // Core Frontend Skills
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Bootstrap', // ✅ Keep this since you can learn quickly if needed
  'Material UI', // ✅ Easy to learn for enterprise-level UIs

  // Version Control & Deployment
  'Git',
  'GitHub',
  'Vercel', // ✅ You’re deploying with Vercel, good to mention
  'Netlify', // ✅ Easy to use, another option for deployment

  // Backend & Database Basics (To Transition to Full Stack)
  'Node.js', // ✅ You’ll need this for full-stack freelancing
  'Express.js', // ✅ Often used with Node.js
  'MongoDB', // ✅ Basic NoSQL database, fast to learn and implement
  'REST APIs', // ✅ Essential to connect frontend with backend

  // Additional Programming Skills
  'C Programming',
  'Java',
  'C++',

  // Computer Science Fundamentals
  'Computer Networks',
  'Operating Systems',
  'Software Engineering',

  // Bonus (High Demand, Quick Learning Potential)
  'Next.js', // ✅ Boosts SEO + better performance for React apps
  'TypeScript', // ✅ Slightly advanced, but increases job offers
  'Firebase', // ✅ For quick backend & authentication in small projects
  'GraphQL', // ✅ Emerging API query language, lightweight, and powerful
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sukhveer.developer@mail.com',
}

export { header, about, projects, skills, contact }
