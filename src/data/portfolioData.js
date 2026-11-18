/**
 * Central Portfolio Data Configuration
 * 
 * ============================================================================
 * RULE: DESIGN FIRST. PERSONAL CONTENT LATER.
 * ============================================================================
 * All personal information is intentionally kept as clean placeholders.
 * When you are ready to personalize your portfolio for submission or presentation,
 * you can edit this single file!
 */

export const portfolioConfig = {
  // Personal Identity
  personal: {
    monogram: "EP",
    logo: "/images/elizalde_ep_logo_hd.png",
    name: "Elizalde Jr. B. Pelaez",
    namePlaceholder: "Elizalde Jr. B. Pelaez",
    profilePhoto: "/profile.jpg",
    rolePlaceholder: "4th-Year BS Computer Science Student",
    institution: "Biliran Province State University (BiPSU)",
    taglinePlaceholder: "Aspiring Web Designer & Frontend Developer",
    locationPlaceholder: "Naval, Biliran, Philippines",
    availabilityPlaceholder: "Available for Projects & Collaboration",
  },

  // About Me Section
  about: {
    bioParagraphs: [
      "Hello! I'm a fourth-year Bachelor of Science in Computer Science student at Biliran Province State University (BiPSU).",
      "I'm interested in UI design and frontend development, particularly in creating interfaces that are visually appealing, organized, and easy to use. I enjoy exploring different design ideas, experimenting with layouts and colors, and learning how to turn creative concepts into functional websites.",
      "I'm still growing and developing my skills through academic projects and hands-on experience. I believe that every project brings a new opportunity to learn, improve, and discover what I'm capable of creating.",
    ],
    philosophy: {
      title: "Every Lesson Has a Meaning.",
      eyebrow: "MY PERSONAL PHILOSOPHY",
      paragraph1: "Every lesson, every failure, and every problem carries a deeper meaning in life. Each experience teaches us something, shapes who we become, and reminds us that growth comes from the journey, not just the destination.",
      paragraph2: "I believe that every challenge is an opportunity to learn, every mistake is a chance to improve, and every experience is a step toward becoming a better version of myself.",
      closing: "Still learning. Still growing. Still becoming.",
    },
    interests: [
      "[ Interest 1: e.g. Algorithms & Data Structures ]",
      "[ Interest 2: e.g. Modern Web Architecture ]",
      "[ Interest 3: e.g. UI/UX & Interaction Design ]",
      "[ Interest 4: e.g. Open Source Collaboration ]",
    ],
    goals: [
      "[ Goal 1: Complete Computer Programming NC-IV with high remarks ]",
      "[ Goal 2: Master modern full-stack web architectures ]",
      "[ Goal 3: Build impactful open-source applications ]",
      "[ Goal 4: Contribute to enterprise-scale systems ]",
    ],
    stats: [
      { label: "[ Total Projects ]", value: "00+" },
      { label: "[ Code Repositories ]", value: "00+" },
      { label: "[ Certifications ]", value: "00" },
      { label: "[ Academic Year ]", value: "NC-IV" },
    ],
  },

  // Technical Skills Categories (6 Categorized Areas)
  skills: [
    {
      id: "programming-languages",
      title: "Programming Languages",
      categoryBadge: "Core Logic",
      description: "Foundational and modern programming languages.",
      items: [
        { name: "[ Language 1 ]", tag: "Primary" },
        { name: "[ Language 2 ]", tag: "Core" },
        { name: "[ Language 3 ]", tag: "Academic" },
        { name: "[ Language 4 ]", tag: "Scripting" },
      ],
    },
    {
      id: "frontend-development",
      title: "Frontend Development",
      categoryBadge: "Client-Side",
      description: "Modern web interfaces, responsive layouts, and reactivity.",
      items: [
        { name: "[ Framework 1 ]", tag: "UI" },
        { name: "[ Styling Tool ]", tag: "CSS" },
        { name: "[ Animation Tool ]", tag: "Motion" },
        { name: "[ State / Tool ]", tag: "Frontend" },
      ],
    },
    {
      id: "backend-development",
      title: "Backend Development",
      categoryBadge: "Server-Side",
      description: "Server architectures, RESTful APIs, and business logic.",
      items: [
        { name: "[ Backend Runtime ]", tag: "Server" },
        { name: "[ API Framework ]", tag: "REST" },
        { name: "[ Authentication ]", tag: "Security" },
        { name: "[ Middleware ]", tag: "Architecture" },
      ],
    },
    {
      id: "database",
      title: "Database",
      categoryBadge: "Persistence",
      description: "Relational and document storage, schemas, and queries.",
      items: [
        { name: "[ SQL Database ]", tag: "Relational" },
        { name: "[ NoSQL Database ]", tag: "Document" },
        { name: "[ ORM / ODM ]", tag: "Data Access" },
        { name: "[ Query Language ]", tag: "Queries" },
      ],
    },
    {
      id: "development-tools",
      title: "Development Tools",
      categoryBadge: "Workflow",
      description: "Version control, build pipelines, and development utilities.",
      items: [
        { name: "[ Version Control ]", tag: "Git" },
        { name: "[ Package Manager ]", tag: "CLI" },
        { name: "[ Code Editor ]", tag: "IDE" },
        { name: "[ Testing / API Tool ]", tag: "QA" },
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      categoryBadge: "Creative",
      description: "Design systems, user interface prototyping, and user journeys.",
      items: [
        { name: "[ Design Tool 1 ]", tag: "Prototyping" },
        { name: "[ Design System ]", tag: "Components" },
        { name: "[ Responsive Design ]", tag: "Layouts" },
        { name: "[ Accessibility ]", tag: "WCAG" },
      ],
    },
  ],

  // Featured Projects Showcase
  projects: [
    {
      id: "numify",
      title: "NUMIFY",
      subtitle: "Teacher-Assisted Gamified Numeracy Assessment System",
      category: "Education • Gamification",
      badge: "Flagship Web Application",
      targetAudience: "Junior High School (Grades 7–10)",
      summary: "A web-based mathematics assessment platform that helps teachers manage assessments and monitor student progress while engaging Grades 7–10 learners through interactive question formats, points, badges, and parallel assessments.",
      description: "NUMIFY is a web-based mathematics assessment system designed for Junior High School students in Grades 7–10. It helps teachers generate, review, and publish curriculum-based assessments while allowing students to answer online through different interactive question formats. The system automatically checks responses, provides immediate results, and awards points and badges to encourage student engagement. It also tracks learning progress through proficiency levels and provides parallel assessments to help students practice and improve their mathematics skills.",
      technologies: ["Education", "Web Application", "Gamification", "Mathematics", "Analytics"],
      image: "/projects/numify-preview.jpg",
      liveUrl: "https://gamified-system.onrender.com/",
      repoUrl: "#",
      featured: true,
      features: [
        {
          title: "Assessment Generation and Management",
          description: "Allows teachers to generate, review, edit, and publish mathematics assessments based on grade level, term, assessment type, and topic.",
        },
        {
          title: "Automated Checking and Gamified Learning",
          description: "Automatically checks student answers and provides instant scores while awarding points and badges for correct responses.",
        },
        {
          title: "Interactive Assessment Formats",
          description: "Supports Multiple Choice, Drag & Drop, Fill in the Blank, and Math Duel.",
        },
        {
          title: "Student Performance Monitoring",
          description: "Provides assessment results, topic performance, proficiency levels, and class performance analytics to help teachers monitor learning progress.",
        },
        {
          title: "Parallel Assessments",
          description: "Provides additional assessment opportunities for students who need further practice based on their post-test performance.",
        },
      ],
    },
    {
      id: "kaumahan-harvest",
      title: "Kaumahan Harvest Market",
      subtitle: "Web-Based Agricultural Marketplace",
      category: "Agriculture • E-Commerce",
      badge: "Full-Stack Web Application",
      targetAudience: "Local Farmers, Buyers, & Administrators",
      summary: "A web-based agricultural marketplace connecting local farmers directly with buyers. Features multi-role access, direct product listing, COD/GCash payment processing, delivery tracking, and administrative reporting.",
      description: "Kaumahan Harvest Market is a web-based agricultural marketplace developed to connect local farmers directly with buyers through an accessible online platform. It allows farmers to showcase and manage their agricultural products while giving buyers a convenient way to browse products, place orders, and purchase fresh goods online.\n\nThe system supports three user roles: Administrator, Farmer/Seller, and Buyer. Farmers can manage their product listings and customer orders, while buyers can explore available products, submit orders, and choose payment options such as Cash on Delivery (COD) and GCash. It also includes order and delivery management, location tracking, payment processing, and report generation to help organize marketplace operations.\n\nDeveloped using Python, Django, and MySQL, the project aims to make agricultural buying and selling more convenient while providing local farmers with an additional platform to promote and sell their products.",
      technologies: ["Python", "Django", "MySQL", "Web Application", "E-Commerce"],
      image: "/projects/kaumahan-harvest.jpg",
      liveUrl: null,
      repoUrl: "#",
      featured: true,
      features: [
        {
          title: "Product Management",
          description: "Allows farmers to add, update, and manage their agricultural product listings.",
        },
        {
          title: "Online Shopping and Ordering",
          description: "Enables buyers to browse available products and place orders through the platform.",
        },
        {
          title: "Multiple User Roles",
          description: "Provides separate functionalities for administrators, farmers/sellers, and buyers.",
        },
        {
          title: "Order and Payment Management",
          description: "Supports order processing and payment options, including Cash on Delivery (COD) and GCash.",
        },
        {
          title: "Delivery Management",
          description: "Includes delivery monitoring and location tracking.",
        },
        {
          title: "Reports Generation",
          description: "Helps organize and review marketplace transactions and activities.",
        },
      ],
    },
  ],

  // Education Timeline Placeholders
  education: [
    {
      id: 1,
      institution: "[ Institution / University Name Placeholder ]",
      degree: "[ Bachelor of Science in Computer Science ]",
      period: "[ 202X - Present ]",
      badge: "Current Studies",
      description: "[ Academic focus, notable coursework in Computer Programming NC-IV, algorithms, and software engineering. ]",
      achievements: [
        "[ Coursework / Academic Milestone 1 ]",
        "[ Coursework / Academic Milestone 2 ]",
      ],
    },
    {
      id: 2,
      institution: "[ Senior High / Previous School Placeholder ]",
      degree: "[ TVL / ICT or STEM Strand ]",
      period: "[ 202X - 202X ]",
      badge: "Graduated",
      description: "[ Foundation in computer hardware, basic programming languages, and technical problem solving. ]",
      achievements: [
        "[ Foundation Honor / Recognition 1 ]",
        "[ Technical Project Milestone 2 ]",
      ],
    },
  ],

  // Certificates & Achievements
  certificates: [
    {
      id: 1,
      title: "Thesis Preparation with Trending Tools and Industry Practices",
      issuer: "Biliran Province State University (BiPSU) — STCS & CS Society",
      recipient: "Elizalde B. Pelaez Jr.",
      date: "October 6-7, 2025",
      category: "Academic & Research",
      credentialId: "BiPSU-STCS-CSS-2025",
      image: "/certificates/cert-thesis.jpg",
      highlight: "Completed at BiPSU Student Center",
      skillsCovered: ["Thesis Preparation", "Trending Dev Tools", "Industry Practices", "Computer Science"],
    },
    {
      id: 2,
      title: "Introduction to AI Literacy and Responsible Use",
      issuer: "CHED • Mapúa University (with Arizona State Univ.) • ACHIEVE",
      recipient: "Elizalde Pelaez",
      date: "September 14, 2026",
      category: "Artificial Intelligence",
      credentialId: "WB4XG3LYVVZVD",
      image: "/certificates/cert-ai-literacy.jpg",
      highlight: "Micro-credentials Course",
      skillsCovered: ["AI Literacy", "Responsible AI Use", "Ethical AI", "Technology Innovation"],
    },
    {
      id: 3,
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      recipient: "Elizalde Pelaez",
      date: "May 26, 2026",
      category: "Networking & Systems",
      credentialId: "73f86c47-bf54-4706-9ef1-3f467bd69953",
      image: "/certificates/cert-cisco-networking.jpg",
      highlight: "Cisco Networking Academy Program",
      skillsCovered: ["Networking Protocols", "Network Architecture", "IP Addressing", "Network Security"],
    },
  ],

  // Contact Information
  contact: {
    email: "elizaldepelaez0@gmail.com",
    location: "Naval, Biliran, Philippines",
    availability: "Open to Learning Opportunities and Collaborations",
    socials: [
      {
        name: "Facebook",
        handle: "Elizalde B. Pelaez Jr.",
        url: "https://www.facebook.com/profile.php?id=61577365681852",
      },
      {
        name: "Instagram",
        handle: "@ittz_eliizh",
        url: "https://www.instagram.com/ittz_eliizh/",
      },
      {
        name: "Email",
        handle: "elizaldepelaez0@gmail.com",
        url: "mailto:elizaldepelaez0@gmail.com",
      },
    ],
  },
};
