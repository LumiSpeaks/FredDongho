
import React from 'react';
import { Project, Experience } from './types';

export const RESUME_DATA = {
  name: "Fred Dongho Tsobjio",
  phone: "(512)-902-1422",
  email: "officialfredbiz@gmail.com",
  // Professional headshot - place your photo at public/images/fred-headshot.jpg
  headshot: "/images/fred-headshot.jpg", 
  linkedin: "https://www.linkedin.com/in/freddongho",
  summary: "Business student with a hands-on, research-driven approach shaped by building and marketing an AI-powered study app designed to help students ace their classes. Strong analytical skills applied to user research, product decisions, and data-informed marketing.",
  education: {
    school: "University of Texas At San Antonio",
    gpa: "3.78",
    degree: "Bachelors of Business Administration",
    graduation: "Expected May 2028",
    honors: ["UTSA Honors College", "Executive Director @ NABA", "UTSA Dean’s List", "NSCS Member"]
  },
  project: {
    title: "AceStudy",
    subtitle: "AI-Powered Study Assistant",
    platform: "React & AI Technologies",
    period: "Dec 2025 – June 2026",
    details: [
      "Designed and researched an AI-powered study assistant grounded in evidence-based learning principles like active recall and focused study blocks.",
      "Developed 'Brain Boost' feature, combining flashcards and quizzing simultaneously to reinforce understanding.",
      "Translated research-backed study strategies into product direction and feature positioning.",
      "Led data-informed marketing across TikTok, Instagram, and Reddit, generating thousands of weekly views."
    ]
  },
  journey: [
    {
      company: "National Association of Black Accountants (NABA)",
      role: "Executive Director",
      period: "Sept 2025 - Present",
      type: "Leadership",
      description: [
        "Primary contact for members, regional leadership, and external partners.",
        "Oversees programs and initiatives to ensure chapter success.",
        "Executes strategies aligning with NABA's mission to support professionals."
      ]
    },
    {
      company: "Chipotle",
      role: "Operations & Culinary Lead",
      period: "July 2025 – Aug 2025",
      type: "Experience",
      description: [
        "Maintained high standards of operational efficiency and sanitation.",
        "Collaborated in fast-paced environments to ensure consistent quality."
      ]
    },
    {
      company: "Voice-Over Business",
      role: "Founder / Client Relations",
      period: "Aug 2020 – Feb 2023",
      type: "Experience",
      description: [
        "Delivered high-quality recordings for 100+ clients with 4.9/5 satisfaction.",
        "Managed project delivery and client expectations for global campaigns.",
        "Supported advertising strategies that increased conversion rates."
      ]
    }
  ],
  skills: [
    "Project Management", "Product Strategy", "User Research", 
    "AI-Driven Feature Design", "Growth & Content Marketing", 
    "Data-Informed Decision Making", "Cross-Functional Collaboration", 
    "Excel & Microsoft Office"
  ]
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "AceStudy", href: "#acestudy" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
