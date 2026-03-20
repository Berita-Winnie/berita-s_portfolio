import {
  Calendar,
  CalendarCheck2,
  CodeXml,
  FileText,
  Folder,
  FolderKanban,
  Github,
  Globe,
  LayoutTemplate,
  Linkedin,
  Mail,
  MonitorCog,
  Search,
  SquareTerminal,
} from 'lucide-react'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contsct', href: '#contact' },
]

export const frontendskills = [
  {
    name: 'HTML',
    icon: CodeXml,
  },
  {
    name: 'CSS / Tailwind',
    icon: LayoutTemplate,
  },
  {
    name: 'JavaScript',
    icon: SquareTerminal,
  },
  {
    name: 'React',
    icon: MonitorCog,
  },
]

export const assistantSkills = [
  {
    name: 'Email management',
    icon: Mail,
  },
  {
    name: 'Calendar management',
    icon: Calendar,
  },
  {
    name: 'Research',
    icon: Search,
  },
  {
    name: 'Documentation',
    icon: FileText,
  },
  {
    name: 'Organization  systems',
    icon: Folder,
  },
]

export const projects = [
  {
    title: 'Plant Care Website',
    description:
      'A clean and calming web experience for plant lovers to track routines, care tips, and reminders.',
    tech: ['React', 'Tailwind Css', 'JavaScript'],
    liveurl: '#',
    githubUrl: '#',
  },

  {
    title: 'Resource Management System',
    description:
      'A practical dashboard focused on clarity helping teams organize resources, timelines, and daily operations',
    tech: ['React', 'Tailwind Css', 'JavaScript'],
    liveurl: '#',
    githubUrl: '#',
  },

  {
    title: 'Creative Ui Experiments',
    description:
      'A collection of modern interface concepts combining  expressive typograpghy, layout rhythm, and subtle motion.',
    tech: ['React', 'Tailwind Css', 'JavaScript'],
    liveurl: '#',
    githubUrl: '#',
  },
]

export const services = [
  {
    title: 'Virtual Assistant',
    description:
      'Reliable operational support with strong communication, practical organization, and calm execution.',
    items: [
      'Organization & Prioritization',
      'Calendar & Email Management',
      'Research',
      'Travel Planning',
      'Project Management',
      'Meeting & Administrative Support',
    ],
  },
  {
    title: 'Frontend Development',
    description:
      'Building responsive websites with React and Tailwind CSS, focused on usability and simple, elegant design.',
    items: [
      'Responsive Design',
      'React & Tailwind Development',
      'Clean UI Implementation',
    ],
  },
]

export const contacts = [
  {
    label: 'Email',
    value: 'w.berita.a@gmail.com',
    icon: Mail,
    href: 'mailto:w.berita.a@gmail.com',
  },
  {
    label: 'Github',
    value: 'github.com/beritawinnie',
    icon: Github,
    href: 'https://www.linkedin.com/',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/beritawinnie',
    icon: Linkedin,
    href: 'https://www.linkedin.com/',
  },
  {
    label: 'Portfolio',
    value: 'berita.dev',
    icon: Globe,
    href: '#',
  },
]
