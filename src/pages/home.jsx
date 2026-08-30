import SiteNav from "../components/SiteNav";
import { motion } from "framer-motion";
import {
  reveal,
  revealLeft,
  revealRight,
  float,
  ease,
} from "../lib/motion";

const STATS = [
  { value: "3+", label: "years building" },
  { value: "15+", label: "projects shipped" },
  { value: "10+", label: "happy clients" },
  { value: "∞", label: "cups of coffee" },
];

const PROJECTS = [
  {
    name: "Classmate",
    tags: "React  · Firebase  · Supabase",
    desc: "Create a group, drop your notes, and actually get through the syllabus — together. Classmates is a platform that allows students to collaborate on their coursework, share resources, and stay organized.",
    caption: (<img src="/classmate.png" alt="Classmate product shot" className="w-full h-full object-cover" />),
    featured: true,
  },
  {
    name: "Educonnect",
    tags: "React · Firebase · Tailwind",
    desc: "EduConnect offers curated tools, books, and courses to support students and lifelong learners. Discover, contribute, and grow with EduConnect..",
    caption: (<img src="/educonnect.png" alt="Educonnect product shot" className="w-full h-full object-cover" />),
  },
  {
    name: "CleanLink",
    tags: "React · Firebase · Tailwind",
    desc: "Book vetted cleaners and laundry providers in minutes. Pay securely, track your booking live, get results you can actually see.",
    caption: (<img src="/cleanlink.png" alt="CleanLink product shot" className="w-full h-full object-cover" />),
  },
];

const STACK = [
  "TypeScript",
  "React",
  "MongoDB",
  "Firebase",
  "Docker",
  "Kubernetes",
  "Node",
  "Bash",
  "Git",
  "Linux",
  "AWS",
  "Terraform",
  "CI/CD",
  "Grafana",
  "Sentry",
  "Figma",
];

const EXPERIENCE = [
  {
    company: "Spotlium",
    period: "2025 — now",
    role: "CTO  + Co-founder · full-stack",
  },
  {
    company: "3Line Limited",
    period: "JUN 2025 — NOV 2025",
    role: "Technical Support · internal tools",
  },
  {
    company: "Freelance Developer",
    period: "2025 — now",
    role: "Engineering · internal tools",
  },
];

function Hero() {
  return (
    <motion.div
      className="max-w-225 pt-19 pb-13"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: ease.expo }}
    >
      <motion.div
        className="t-label text-accent mb-0.5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        SOFTWARE ENGINEER | DEVOPS
      </motion.div>

      <motion.h1
        className="m-0 text-[clamp(42px,6.2vw,84px)] leading-[1.03] font-semibold tracking-[-0.03em]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: ease.expo }}
      >
        Teddy-Austin Tobenna
      </motion.h1>

      <motion.p
        className="mt-6.5 mb-8.5 max-w-160 t-lede"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: ease.expo }}
      >
        I build web applications from front to back. React, Tailwind, Firebase,
        Node etc.. whatever gets the job done. Currently learning DevOps and
        open to internship opportunities. Available for freelance work.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.a
          href="/work"
          className="rounded-btn bg-accent px-5 py-3 font-mono text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          View work
        </motion.a>
        <motion.a
          href="/TOBENNA TEDDY-AUSTIN.pdf"
          className="rounded-btn border border-line-soft px-5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-accent"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Résumé ↓
        </motion.a>
        <motion.a
          href="/contact"
          className="rounded-btn border border-line-soft px-5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-accent"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Get in touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

function Stats() {
  return (
    <motion.div
      className="grid md:grid-cols-4 grid-cols-2 border-y border-hairline"
      {...reveal}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      }}
    >
      {STATS.map(({ value, label }, i) => (
        <motion.div
          key={label}
          className={`py-6.5 ${i === 0 ? "px-12" : "px-7.5"} ${
            i < STATS.length - 1 ? "border border-r border-hairline" : ""
          }`}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            className="text-[30px] font-semibold text-fg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {value}
          </motion.div>
          <div className="mt-1 font-mono text-[11.5px] text-fg-muted">
            {label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProjectCard({ name, tags, desc, caption, featured, index }) {
  return (
    <motion.div
      className={`overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-line-hover ${
        featured ? "md:col-span-2 col-span-1" : ""
      }`}
      
    >
      <motion.div
        className={`flex items-center justify-center bg-diagonal ${
          featured ? "h-52.5" : "h-37.5"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className={`font-mono text-fg-faint ${
            featured ? "text-xs" : "text-[11px]"
          }`}
          animate={featured ? float.animate : {}}
        >
          {caption}
        </motion.span>
      </motion.div>
      <div className={featured ? "px-6.5 py-6" : "px-6 py-5.5"}>
        <div className="flex items-baseline justify-between">
          <motion.span
            className={`font-semibold text-fg ${
              featured ? "text-[22px]" : "text-[19px]"
            }`}
            whileHover={{ color: "#var(--accent)" }}
          >
            {name}
          </motion.span>
          <span
            className={`font-mono text-fg-muted ${
              featured ? "text-xs" : "text-[11px]"
            }`}
          >
            {tags}
          </span>
        </div>
        <p
          className={`text-fg-dim ${
            featured
              ? "mt-2.5 max-w-180 text-[15px] leading-[1.6]"
              : "mt-2.25 text-sm leading-[1.6]"
          }`}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <motion.div id="work" {...reveal}>
      <div className="mb-7 section-y flex items-baseline justify-between">
        <motion.h2
          className="m-0 text-2xl font-semibold tracking-[-0.01em] text-fg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected work
        </motion.h2>
        <motion.span
          className="font-mono text-xs text-fg-muted"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          03 projects
        </motion.span>
      </div>
      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 gap-4.5"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {PROJECTS.map((p, index) => (
          <ProjectCard key={p.name} {...p} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div {...revealLeft}>
      <motion.h2
        className="m-0 mb-4.5 text-2xl font-semibold tracking-[-0.01em] text-fg"
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        About
      </motion.h2>
      <motion.p
        className="m-0 mb-4 text-base leading-[1.75] text-fg-dim"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a full-stack developer who actually enjoys both sides of the stack.
        I work with React and Tailwind on the frontend, Firebase, MongoDb and Node on the
        backend. Right now I'm diving deep into DevOps, learning how to automate deployment,
        scale, and manage infrastructure properly.
      </motion.p>
      <motion.div
        className="mt-1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="mb-2.5 font-mono text-[11.5px] tracking-[0.06em] text-fg-muted">
          STACK
        </div>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.03, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {STACK.map((s) => (
            <motion.span
              key={s}
              className="rounded-pill border border-line-soft px-2.75 py-1.25 font-mono text-[11.5px] text-fg-soft"
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                show: { opacity: 1, scale: 1, rotate: 0 },
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "var(--accent)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Experience() {
  return (
    <motion.div {...revealRight}>
      <motion.h2
        className="m-0 mb-4.5 text-2xl font-semibold tracking-[-0.01em] text-fg"
        whileHover={{ scale: 1.02, x: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Experience
      </motion.h2>
      {EXPERIENCE.map(({ company, period, role }, i) => (
        <motion.div
          key={company}
          className={`py-4 ${
            i < EXPERIENCE.length - 1 ? "border-b border-hairline" : ""
          }`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{
            x: 10,
            backgroundColor: "rgba(255,255,255,0.02)",
            borderRadius: "8px",
            paddingLeft: "12px",
            transition: { duration: 0.2 },
          }}
        >
          <div className="flex items-baseline justify-between">
            <motion.span
              className="text-base font-semibold text-fg-bright"
              whileHover={{ color: "var(--accent)" }}
            >
              {company}
            </motion.span>
            <span className="font-mono text-[11.5px] text-fg-muted">
              {period}
            </span>
          </div>
          <div className="mt-1 text-sm text-fg-nav">{role}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div
      className="border-t border-hairline px-12 pt-18 pb-22 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: ease.expo }}
    >
      <motion.h2
        className="m-0 text-[40px] font-semibold tracking-[-0.02em] text-fg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.1,
        }}
        whileHover={{ scale: 1.02 }}
      >
        Let's build something.
      </motion.h2>
      <motion.p
        className="mt-3.5 mb-7.5 text-base text-fg-dim"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Open to mid / senior roles across frontend, backend, and full-stack.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.a
          href="#"
          className="rounded-btn bg-accent px-5.5 py-3 font-mono text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          tobennaaustin@gmail.com
        </motion.a>
        <motion.a
          href="https://github.com/Tobennaaustin"
          className="rounded-btn border border-line-soft px-5.5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-accent"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{
            scale: 1.05,
            borderColor: "var(--accent)",
            boxShadow: "0 5px 20px rgba(255,255,255,0.05)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          github
        </motion.a>
        <motion.a
          href="https://x.com/AustinTobenna"
          className="rounded-btn border border-line-soft px-5.5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-accent"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{
            scale: 1.05,
            borderColor: "var(--accent)",
            boxShadow: "0 5px 20px rgba(255,255,255,0.05)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          twitter
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden shadow-float">
      <div className="min-h-screen bg-canvas text-fg antialiased">
        <SiteNav />
        <div className="shell">
          <Hero />
          <Stats />
          <Work />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-14 section-y">
            <About />
            <Experience />
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}