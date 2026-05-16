import {
  CalendarClock,
  FolderKanban,
  Globe,
  LayoutGrid,
  Linkedin,
  Mail,
  Plane,
  Receipt,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Support Systems", href: "#support-systems" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/** Core competencies for Skills section. */
export const primarySkills = [
  { name: "Inbox management", icon: Mail },
  { name: "Calendar management", icon: CalendarClock },
  { name: "Project coordination", icon: FolderKanban },
  { name: "Travel planning", icon: Plane },
  { name: "Expense tracking", icon: Receipt },
  { name: "Administrative support", icon: Users },
];

/**
 * Executive Support Systems — each entry is a distinct sample of operational work.
 * sampleUrl: external link (Google Drive, Notion, etc.) when available; otherwise opens in-site showcase.
 */
export const executiveSupportSystems = [
  {
    slug: "inbox-email",
    name: "Inbox & email management",
    sampleTitle: "Inbox & Email Management",
    icon: Mail,
    sampleDescription: "Inbox cleanup, labels, reply templates, and follow-up tracking.",
    sampleImage: "/samples/sample-1-research.png",
    sampleDeliverables: [
      "Inbox triage and folders",
      "Priority labels",
      "Reply templates",
      "Weekly summary",
    ],
    sampleUrl: "",
  },
  {
    slug: "calendar-scheduling",
    name: "Calendar & scheduling",
    sampleTitle: "Calendar & Scheduling Coordination",
    icon: CalendarClock,
    sampleDescription: "Meeting scheduling, holds, confirmations, reminders, and prep.",
    sampleImage: "/samples/sample-2-calendar-email.png",
    sampleDeliverables: [
      "Scheduling and confirmations",
      "Calendar blocks",
      "Reminder checklists",
      "Time-zone tracker",
    ],
    sampleUrl: "",
  },
  {
    slug: "project-coordination",
    name: "Project coordination",
    sampleTitle: "Project Coordination",
    icon: FolderKanban,
    sampleDescription: "Task boards, timelines, assignments, and status updates.",
    sampleImage: "/samples/sample-4-project-management.png",
    sampleDeliverables: [
      "Timeline and milestones",
      "Task board",
      "Status updates",
      "Action log",
    ],
    sampleUrl: "",
  },
  {
    slug: "travel-planning",
    name: "Travel planning",
    sampleTitle: "Travel Planning & Itineraries",
    icon: Plane,
    sampleDescription: "Trip options, itineraries, booking checklists, and logistics.",
    sampleImage: "/samples/sample-3-travel.png",
    sampleDeliverables: [
      "Trip options",
      "Itinerary",
      "Booking checklist",
      "Expense prep",
    ],
    sampleUrl: "",
  },
  {
    slug: "expense-tracking",
    name: "Expense tracking",
    sampleTitle: "Expense Tracking & Reporting",
    icon: Receipt,
    sampleDescription: "Expense logs, receipt categories, and summary reports.",
    sampleImage: "/samples/sample-6-expense-tracking.png",
    sampleDeliverables: [
      "Expense log",
      "Receipt categories",
      "Summary report",
      "Export for reimbursement",
    ],
    sampleUrl: "",
  },
  {
    slug: "workspace-productivity",
    name: "Workspace & productivity",
    sampleTitle: "Workspace & Productivity Systems",
    icon: LayoutGrid,
    sampleDescription: "Google Workspace, Microsoft Office, and organized file structures.",
    sampleImage: "/samples/sample-5-google-workspace.png",
    sampleDeliverables: [
      "Folder structure",
      "Docs and Sheets templates",
      "Workspace setup",
      "SOP documentation",
    ],
    sampleUrl: "",
  },
];

export const additionalSkillTags = [
  "Meeting notes",
  "Research",
  "SOPs",
  "Data entry",
  "Time zones",
];

export const services = [
  {
    title: "Executive Virtual Assistant",
    description: "Day-to-day business operations support for founders, CEOs, and busy professionals.",
    items: [
      "Inbox Management",
      "Calendar Management",
      "Project Coordination",
      "Travel Planning",
      "Expense Tracking",
      "Administrative & Personal Support",
    ],
  },
];

export const upworkUrl = "https://www.upwork.com/";

export const contacts = [
  { label: "Email", value: "winrose.berita@email.com", icon: Mail, href: "mailto:winrose.berita@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/beritawinnie", icon: Linkedin, href: "https://www.linkedin.com/" },
  { label: "Upwork", value: "Invite me on Upwork", icon: Globe, href: upworkUrl },
];
