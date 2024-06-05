export const ACHIEVEMENT_LIST = [
  {
    metric: "Projects",
    value: 5,
    postfix: "+",
    href: "#projects",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 15,
  },
  {
    metric: "Certifications",
    value: 3,
    href: "#about",
  },
  {
    metric: "Years",
    value: 2,
    postfix: "+",
    href: "https://www.famlam.ca/about/me",
  },
]

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Tools and Technologies</li>
        <div className="text-muted-foreground">
          Proxmox VE - Linux - CentOS - Ubuntu - MySQL - Git - GitHub - Docker
        </div>
        <br />
        <li>Programming Languages</li>
        <div className="text-muted-foreground">
          JavaScript - TypeScript - HTML - CSS - Bash
        </div>
        <br />
        <li>Frameworks and Libraries</li>
        <div className="text-muted-foreground">
          React - Next.js - Node.js - Tailwind CSS - Shadcn/ui
        </div>
        <br />
        <li>Networking</li>
        <div className="text-muted-foreground">
          TCP/IP - DNS - DHCP - Network Security
        </div>
        <br />
        <li>Other</li>
        <div className="text-muted-foreground">
          System Administration - Virtualization - Automation - Troubleshooting
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BCIT</li>
        <div className="text-muted-foreground">
          Computer Information Systems Administration (CISA)
        </div>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fortinet</li>
        <div className="text-muted-foreground">
          NSE4- Fortinet Certified Associate
        </div>
        <br />
        <li>Palo Alto Networks</li>
        <div className="text-muted-foreground">
          EDU- 120 Firewall Essentials
        </div>
        <br />
        <li>Amazon Web Services (AWS)</li>
        <div className="text-muted-foreground">
          AWS Academy Graduate - AWS Academy Cloud Architecting
        </div>
      </ul>
    ),
  },
]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Humble Home Network",
    description:
      "A home lab hobby web project using Next.js 14 for friends and family.",
    imgUrl: "/images/projects/hhn.png",
    tag: ["all", "web", "homelab"],
    repoUrl: "https://github.com/famlam-ca/hhn",
    previewUrl: "https://www.famlam.ca/about",
  },
  {
    id: 2,
    title: "HHN Documentaion",
    description: "HHN Documentation project using Nextra for HHN projects.",
    imgUrl: "/images/projects/docs.png",
    tag: ["all", "web", "homelab"],
    repoUrl: "https://github.com/famlam-ca/hhn-documentation",
    previewUrl: "https://docs.famlam.ca",
  },
  {
    id: 3,
    title: "HHN Next.js Boilerplate",
    description: "A boilerplate web template using Next.js for HHN projects.",
    imgUrl: "/images/projects/boilerplate.png",
    tag: ["all", "web"],
    repoUrl: "https://github.com/famlam-ca/next-14-template",
    previewUrl: "https://www.famlam.ca",
  },
  {
    id: 4,
    title: "Server Hosting",
    description:
      "A game server hosting project using Pterodactyl for friends and family.",
    imgUrl: "https://pterodactyl.io/logos/pterry.svg",
    tag: ["all", "hosting", "homelab"],
    repoUrl: "https://github.com/pterodactyl/panel",
    previewUrl: "https://panel.famlam.ca",
  },
  {
    id: 5,
    title: "Twitch Clone",
    description:
      "A Twitch clone project using Next.js and LiveKit, for learning purposes.",
    imgUrl: "/images/projects/twitch.svg",
    tag: ["all", "web", "learning"],
    repoUrl: "https://github.com/SlickYeet/twitch-clone",
    previewUrl: "#projects",
  },
  {
    id: 6,
    title: "Quill",
    description:
      "A learning project that lets you chat with any PDF document using OpenAI.",
    imgUrl: "/images/projects/quill.png",
    tag: ["all", "web", "learning"],
    repoUrl: "https://github.com/SlickYeet/quill",
    previewUrl: "#projects",
  },
  {
    id: 7,
    title: "Network Deisgn Proposal",
    description: "Comprehensive Campus Network Implementation Project.",
    imgUrl: "/images/projects/project2023.png",
    tag: ["all", "networking", "learning"],
    repoUrl: "#projects",
    previewUrl: "https://www.famlam.ca/projects/EnergyConnections.pdf",
  },
  {
    id: 8,
    title: "Enterprise Network Projects 2024",
    description:
      "These projects have been completed. More information will be available soon.",
    imgUrl: "https://placehold.co/600x400?text=Hello+World",
    tag: ["all", "networking", "learning"],
    repoUrl: "/",
    previewUrl: "https://www.famlam.ca/projects/EnterpriseNetworkProjects.pdf",
  },
]
