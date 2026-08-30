import { ReactNode } from "react";


 const Projects = [
   {
     id: "RIMS",
     num: "01",
     title: "RIMS",
     meta: "Inventory management system  · 2026",
     role: "Full Stack + DevOps",
     stack: [
       "React",
       "Nodejs",
       "Javascript",
       "Mongodb",
       "Docker",
       "Kubernetes",
     ],
     links: [
       { label: "Live product →", href: "https://rims-fullstack.vercel.app/" },
     ],
     preview: (<img src="/rims.png" alt="RIMS product shot" className="w-full h-full object-cover rounded" />),
     lede: "A full-stack inventory management system built with React, Node.js, and MongoDB. It features a responsive UI, real-time updates, and robust backend services for managing inventory data.",
     body: "The system allows users to add, update, and delete inventory items, track stock levels, and generate reports. It also includes user authentication and role-based access control to ensure data security. The application is containerized using Docker and deployed on Kubernetes for scalability and reliability.",
     metricsHeading: "What shipped",
     metrics: [
       {
         fig: "<100ms",
         text: "Real-time updates for inventory changes, ensuring users always see the latest data.",
       },
       {
         fig: "40 live instruments",
         text: "The system supports a wide range of inventory items, allowing for comprehensive management of various products.",
       },
       {
         fig: "50%",
         text: "Reduced operational overhead by automating inventory tracking and reporting, freeing up time for staff to focus on other tasks.",
       },
     ],
   },
   {
     id: "Spotlium",
     num: "02",
     title: "Spotlium",
     meta: "Spotlium — Spotlighting  · 2025",
     role: "CTO & Co-founder.",
     stack: ["Nodejs", "React", "MongoDB", "Docker", "Kubernetes"],
     links: [{ label: "Live product →", href: "https://spotlium.vercel.app/" }],
     lede: "A platform that discovers and spotlights talented university students across Nigeria & Africa connecting them with recruiters, brands, and sponsors.",
     body: "Spotlium is designed to bridge the gap between talented students and potential employers or sponsors. It features a user-friendly interface where students can create profiles, showcase their skills, and apply for opportunities. Recruiters and brands can easily search for candidates based on specific criteria, making the hiring process more efficient.",
     metricsHeading: "What shipped",
     metrics: [
       {
         fig: "−60%",
         text: "deploy configuration removed across a dozen services.",
       },
       {
         fig: "1 day",
         text: "onboarding for a new service, down from a week of tickets.",
       },
     ],
   },
   {
     id: "CleanLink",
     num: "03",
     title: "CleanLink",
     meta: <>Cleaning Service Booking Platform · 2026</>,
     role: "FullStack Developer.",
     stack: ["React", "Javascript", "Firebase", "Paystack"],
     links: [
       { label: "Live Product →", href: "https://cleanlink-seven.vercel.app/" },
     ],
     lede: "CleanLink is a platform that allows users to book vetted cleaners and laundry providers in minutes. It offers secure payment options, live booking tracking, and ensures high-quality service delivery.",
     body: "The platform simplifies the process of finding and booking cleaning services. Users can browse through a list of verified service providers, read reviews, and select the one that best fits their needs. The application integrates with Paystack for secure payments and provides real-time updates on the status of bookings, ensuring transparency and reliability.",
     metricsHeading: "",
     metrics: [
       { fig: "", text: "" },
       {
         fig: "",
         text: "",
       },
     ],
   },
 ];

export default Projects