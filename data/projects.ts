export interface Project {
    id: number;
    featured: boolean;
    title: string;
    company: string;
    client?: string;
    role: string;
    domain: string;
    duration: string;
    challenge: string;
    solution: string;
    contributions: string[];
    technologies: string[];
    architecture: string[];
    metrics: string[];
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        featured: true,
        title: "Axis Bank MSME Corprate",
        company: "Xebia IT Architects India Private Limited",
        client: "Axis Bank",
        role: "Senior Consultant",
        duration: "2023 - 2025",
        domain: "Banking",
        challenge: "Axis Bank's MSME corporate banking portal required modernization to improve maintainability, scalability, and user experience. The existing frontend had duplicated code, inconsistent UI patterns, and a growing number of production issues that impacted development efficiency.",
        solution: "Working with a team of four developers, we delivered the redesigned solution within 1.5 months. The initiative reduced production bugs by approximately 90%, improved frontend scalability and maintainability, accelerated feature development, and enhanced the overall enterprise banking user experience.",
        contributions: [
            "I led the development of a scalable corporate banking portal using React and microfrontend architecture.",
            "I redesigned the dashboard by creating reusable and responsive component libraries, standardized development practices, conducted code reviews, and mentored team members through pair programming sessions.",
            "I also drove frontend optimization initiatives to reduce code duplication and improve maintainability across modules."
        ],
        architecture: ["React Microfrontend Architecutire",],
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Redux-saga"],
        metrics: [
            "Enterprise Banking", "Secure Transactions", "Agile Team",
        ],
        image: "/images/projects/axis-bank.png",
    },
    {
        id: 2,
        featured: true,
        title: "GrowKarma Inc",
        company: "ScaleTeam Technologies PVT LTD",
        client: "GrowKarma",
        role: "Senior Consultant",
        duration: "2023 - 2025",
        domain: "SAAS",
        challenge: "Growkama is a global webinar and meeting platform serving users across multiple countries and time zones. The platform required reliable virtual event management, large-scale video conferencing, calendar integrations, multi-tenant support, and payment processing for different organizations.",
        solution: "The platform successfully supported global users with accurate meeting scheduling, scalable webinar delivery, and streamlined subscription management. The DST fixes eliminated scheduling inconsistencies, while the multi-tenant architecture enabled organizations to operate independently under their own branded environments.",
        contributions: [
            "Integrated Jitsi and Zoom to support online meetings, webinars, and virtual sessions.",
            "Implemented a multi-tenant SaaS architecture using custom subdomains for different organizations with Integrated Stripe for organization-level subscription and payment management.",
            "Standardized meeting scheduling using UTC to improve timezone consistency and Used Moment.js for accurate timezone conversion across different regions.",
            "Resolved Daylight Saving Time (DST) issues by developing scripts to correct affected historical records also Built custom backend-based `.ics` calendar generation to provide reliable meeting invitations across platforms like Google Calendar, Outlook, and Apple Calendar.",
        ],
        architecture: ["Monolithic Architecutire",],
        technologies: ["React.js", "Node.js", "Apollo GraphQL", "MongoDB", "Jitsi", "Zoom", "TypeScript"],
        metrics: [
            "Enterprise Banking", "Secure Transactions", "Agile Team",
        ],
        image: "/images/projects/grow-karma.png",
    },
    {
        id: 3,
        featured: false,
        title: "Ship My Shopping",
        company: "ScaleTeam Technologies PVT LTD",
        client: "Cargo Atlantic Concierge",
        role: "Senior Full Stack Engineer",
        duration: "2021",
        domain: "Logistic",
        challenge: "The company's cargo logistics platform had become difficult to scale and maintain. The system was built on PHP with a complex database structure consisting of more than 35 schemas, lacked real-time capabilities, and needed modernization while continuing to support daily operations handling over 1,000 orders.",
        solution: "Over a period of 1 year and 3 months, I successfully delivered a modern logistics platform covering web, mobile applications, and the admin portal. The new architecture improved scalability, simplified maintenance, increased processing speed, enabled real-time operations, and supported the management and reporting of 1,000+ daily cargo orders without service disruption or data loss.",
        contributions: [
            "I led the architecture and technology selection process, migrating the frontend from PHP-based architecture to React and implementing Node.js services to support real-time operations.",
            "I redesigned and normalized the database structure, consolidating more than 10 schemas into a cleaner and more maintainable architecture. To ensure business continuity, I built a migration pipeline that converted legacy SQL data into MongoDB using XML-to-JSON transformation through scheduled cron jobs, allowing both systems to run in parallel during the transition.",
            "I also developed reporting dashboards and logistics management features to support operational visibility and decision-making."
        ],
        architecture: ["Monolithic"],
        technologies: [
            "Next.js", "React.js", "Node.js", "React-native", "MongoDB", "Apollo GraphQL"
        ],
        metrics: [],
        image: "/images/projects/healthcare.png",
    },
    {
        id: 4,
        featured: false,
        title: "NexusZ - Logistics Management System",
        company: "ScaleTeam Technologies PVT LTD",
        client: "NexusZ",
        role: "Senior Full Stack Engineer",
        duration: "2021",
        domain: "Logistic",
        challenge: "I worked on a large-scale logistics management platform called NexusZ, which handled millions of import and export records, vessel tracking, and shipment planning. Over time, users started experiencing significant performance issues, especially when loading dashboards and shipment data. The application was built using Meteor, and the heavy use of the Pub/Sub mechanism was causing slow page loads and unnecessary data transfers.",
        solution: "The optimizations significantly improved application performance and user experience: 1. Reduced unnecessary data transfer and subscription overhead. 2. Improved dashboard load times and overall application responsiveness. 3. Enabled users to analyze millions of logistics records efficiently through visual analytics. 4. Increased operational visibility through real- time tracking, company - level filtering, and shipment flow analysis. 5. Provided management teams with actionable insights for planning and decision - making, leading to faster operational reporting and better resource allocation.",
        contributions: [
            "I conducted a detailed analysis of the Meteor Pub/Sub architecture and discovered that several subscriptions were publishing large datasets that were not required by the active user views.",
            "Refactored the Pub/Sub implementation to publish only the data required for specific screens and user actions.",
            "Optimized database queries and reduced unnecessary reactive updates.",
            "Built a centralized monitoring dashboard that allowed users to:",
            "Filter import and export records by company.",
            "Monitor vessel movements and shipment status.",
            "View logistics operations across multiple regions.",
            "Developed an interactive map visualization to track vessel routes and shipment history in real time.",
            "Created a Sankey chart to visualize dependencies and flow relationships between ports, companies, and shipping routes.",
            "Designed planning and analytics dashboards using line and bar charts to help stakeholders track shipment volumes, operational trends, and progress across millions of import/export records.",
            "Implemented performance monitoring to measure the impact of the optimizations and identify future bottlenecks.",

        ],
        architecture: ["Monolithic"],
        technologies: [
            "Meteor.js", "React.js", "Node.js", "MongoDB"
        ],
        metrics: [],
        image: "/images/projects/healthcare.png",
    },
    {
        id: 5,
        featured: false,
        title: "Follow up 2.0",
        company: "ScaleTeam Technologies PVT LTD",
        client: "FollowUp Solutions, a Canadian software company",
        role: "Senior Full Stack Engineer",
        duration: "2021",
        domain: "Healthcare",
        challenge: "The Patient Management System needed to support data collection and follow-up processes for more than 450 diseases. Each disease had different data requirements, which would traditionally require creating and maintaining hundreds of separate database schemas, leading to high development and maintenance overhead.",
        solution: "The solution reduced the need for maintaining 450+ individual schemas to a single scalable schema, significantly decreasing development and maintenance effort. It improved system flexibility, accelerated onboarding of new disease workflows, and provided doctors and administrators with a streamlined process for managing patient follow-ups and tracking case progress.",
        contributions: [
            "Instead of creating 450+ separate database schemas, I implemented Form.io to build dynamic, configurable forms that stored disease-specific data through a single scalable schema. This allowed new disease forms and fields to be configured without database redesigns or code changes. ",
            "I also developed a patient follow-up ticket management workflow integrated with Jira, enabling doctors and administrators to track, assign, and manage patient cases through defined status transitions.",
        ],
        architecture: ["Monolithic"],
        technologies: [
            "Meteor.js", "React.js", "Node.js", "MongoDB", "Form.io", "Jira"
        ],
        metrics: [],
        image: "/images/projects/healthcare.png",
    },
    {
        id: 6,
        featured: false,
        title: "LayAwayCard",
        company: "ScaleTeam Technologies PVT LTD",
        client: "The Mulling Group",
        role: "Senior Full Stack Engineer",
        duration: "2021",
        domain: "Finance",
        challenge: "TMG required the development and maintenance of multiple customer-facing applications, including a layaway savings platform and several React/Meteor-based mobile applications. The organization also needed a reliable process for releasing and maintaining applications across Android and iOS platforms.",
        solution: "Successfully delivered and maintained multiple production applications, streamlined mobile release processes, and ensured reliable deployments across platforms while supporting ongoing business and user requirements.",
        contributions: [
            "I developed a layaway card system that enabled users to save funds toward future purchases through a structured savings model.",
            "I maintained and enhanced multiple applications built with Meteor and React Hybrid technologies, including CLEPT, IFFLY, and HourHealth. ",
            "Additionally, I managed the complete mobile release process, including application configuration, build generation, testing, TestFlight distribution, Play Store readiness, and deployment coordination for both Android and iOS platforms."
        ],
        architecture: ["Monolithic"],
        technologies: [
            "Meteor.js", "React.js", "Node.js", "MongoDB", "Xcode", "TestFlight"
        ],
        metrics: [],
        image: "/images/projects/healthcare.png",
    }
];