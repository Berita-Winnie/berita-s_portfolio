import {
  CalendarClock,
  FolderKanban,
  Globe,
  LayoutGrid,
  Linkedin,
  Mail,
  Search,
  Shield,
} from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Samples", href: "#va-samples" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/** Core skills shown in Skills + Sample work (grouped for clarity; VA focus). */
export const primarySkills = [
  {
    name: "Office & productivity",
    sampleTitle: "Research & Data Organization",
    icon: LayoutGrid,
    sampleDescription:
      "Deliverable: research brief with key findings and a clean, categorized data sheet.",
    sampleImage: "/samples/sample-1-research.png",
    sampleUrl: "#",
  },
  {
    name: "Calendar & scheduling",
    sampleTitle: "Email & Calendar Management + Scheduling & Coordination",
    icon: CalendarClock,
    sampleDescription:
      "Inbox cleanup, labels, weekly planning, meetings, reminders, tracking.",
    sampleImage: "/samples/sample-2-calendar-email.png",
    sampleUrl: "#",
  },
  {
    name: "Email & communication",
    sampleTitle: "Workspace & Productivity Tools",
    icon: Mail,
    sampleDescription: "Google Workspace, Microsoft Office & similar platforms.",
    sampleImage: "/samples/sample-5-google-workspace.png",
    sampleUrl: "#",
  },
  {
    name: "Records & files",
    sampleTitle: "Travel Planning & Itinerary Creation",
    icon: FolderKanban,
    sampleDescription: "Deliverable: travel options comparison, final itinerary, and booking checklist.",
    sampleImage: "/samples/sample-3-travel.png",
    sampleUrl: "#",
  },
  {
    name: "Research & briefs",
    sampleTitle: "Project Management",
    icon: Search,
    sampleDescription: "Deliverable: project timeline, task board, owner assignments, and status updates.",
    sampleImage: "/samples/sample-4-project-management.png",
    sampleUrl: "#",
  },
  {
    name: "Privacy & confidentiality",
    sampleTitle: "Expense Tracking",
    icon: Shield,
    sampleDescription: "Deliverable: monthly expense log, categorized receipts, and summary report.",
    sampleImage: "/samples/sample-6-expense-tracking.png",
    sampleUrl: "#",
  },
];

/** Short tags for skills merged out of the main grid; keeps the section scannable. */
export const additionalSkillTags = [
  "Attention to detail",
  "Meeting notes",
  "CRM & data hygiene",
  "SOPs & documentation",
  "Time zone coordination",
];

export const services = [
  {
    title: "Virtual Assistant",
    description: "Reliable day-to-day support with clear communication and practical organization.",
    items: [
      "Organization & Prioritization",
      "Calendar & Email Management",
      "Research",
      "Travel Planning",
      "Project Management",
      "Meeting & Administrative Support",
    ],
  },
];

export const contacts = [
  { label: "Email", value: "winrose.berita@email.com", icon: Mail, href: "mailto:winrose.berita@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/beritawinnie", icon: Linkedin, href: "https://www.linkedin.com/" },
  { label: "Portfolio", value: "beritawinnie.dev", icon: Globe, href: "#" },
];
