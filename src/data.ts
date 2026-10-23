export const profile = {
  name: 'Virendra Prajapati',
  initials: 'VP',
  title: 'Aspiring Software Engineer',
  location: 'Ambedkar Nagar, Uttar Pradesh, India',
  email: 'virendraprajapati7607@gmail.com',
  phone: '+91 81768 26486',
  github: 'https://github.com/virenK0211',
  linkedin: 'https://www.linkedin.com/in/virendra-prajapati-284664257/',
  resume: '/resume.pdf',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  {
    category: 'Programming languages',
    items: ['C', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'Frontend development',
    items: ['HTML', 'CSS'],
  },
  {
    category: 'Backend development',
    items: ['FastAPI'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB · basic'],
  },
  {
    category: 'AI & data',
    items: ['OpenAI API', 'Machine learning · basic', 'Pandas', 'NumPy'],
  },
  {
    category: 'Tools & platforms',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter', 'Google Colab', 'PyCharm'],
  },
]

export const projects = [
  {
    number: '01',
    title: 'AI CRM Agent',
    category: 'AI · Backend',
    description:
      'An AI-powered CRM assistant that analyzes customer conversations and meeting notes to surface useful client context.',
    highlights: [
      'Extracts sentiment, product mentions, and client insights from text.',
      'Built backend APIs with FastAPI and integrated the OpenAI API.',
      'Explored prompt design and practical AI-assisted workflows.',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI API'],
    repository: 'https://github.com/virenK0211/ai-crm-agent',
    preview: 'crm',
  },
  {
    number: '02',
    title: 'Hotel Booking Analysis',
    category: 'Data analysis',
    description:
      'A notebook-based analysis of hotel booking data, focused on cleaning records and exploring booking patterns.',
    highlights: [
      'Handled missing values and formatted the dataset with Pandas.',
      'Used NumPy for statistical and numerical analysis.',
      'Visualized booking trends, cancellations, and customer segments.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    repository: 'https://github.com/virenK0211/Hotel-Booking',
    preview: 'analytics',
  },
]

export const experience = [
  {
    role: 'Volunteer',
    organization: 'Google Developer Students Club',
    detail: 'Volunteered with the campus developer community.',
  },
  {
    role: 'Coordinator',
    organization: 'The Systematic Society',
    detail: 'Contributed as a coordinator and developed teamwork and leadership skills.',
  },
  {
    role: 'Participant',
    organization: 'College Hackathon',
    detail: 'Participated in a college hackathon.',
  },
]

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'Bundelkhand Institute of Engineering and Technology, Jhansi',
  years: '2022 – 2026',
  result: '7.04 CGPA',
}

export const achievements = [
  'Solved 100+ problems on GeeksforGeeks and 300+ on CodeChef.',
  'Achieved a 4-star rating on HackerRank.',
  'Prequalified for the AWS AI & ML Scholarship Program 2024.',
  'Completed the Google Cloud Study Jam program.',
  'Completed Postman API Fundamentals.',
]

export const certification = {
  name: 'Deloitte Australia Data Analytics Job Simulation',
  provider: 'Forage · June 2025',
  details: [
    'Created a data dashboard using Tableau.',
    'Used Excel to classify data and draw business conclusions.',
  ],
}
