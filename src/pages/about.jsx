import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SiteNav from "../components/SiteNav";
import {
  reveal,
  revealLeft,
  revealRight,
  revealZoom,
  stagger,
  staggerFast,
  hoverScale,
  hoverLift,
  hoverGlow,
  slideLeft,
  slideRight,
  zoomIn,
  fade,
  float,
  pulse,
  transition,
  ease,
  springTransition,
  bounceTransition,
} from "../lib/motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-canvas text-fg antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SiteNav />

      <main className="mx-auto max-w-shell px-[clamp(22px,5vw,64px)]">
        {/* HERO */}
        <motion.header
          className="grid grid-cols-1 items-center gap-x-15 gap-y-10 py-18 pb-15 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.expo }}
        >
          <motion.figure
            className="aspect-4/5 max-w-70 overflow-hidden rounded-[14px] border border-line sm:max-w-none"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.1,
            }}
            whileHover={{
              scale: 1.02,
              rotate: 1,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src="image.png"
              alt="Portrait"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.figure>

          <div>
            <motion.div
              className="mb-5 font-mono text-[12.5px] tracking-[0.08em] text-accent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ABOUT
            </motion.div>

            <motion.h1
              className="m-0 text-[clamp(36px,5vw,66px)] font-semibold leading-[1.06] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: ease.expo }}
            >
              Full-stack developer. Startup co-founder. DevOps learner.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[52ch] text-[18px] leading-[1.6] text-fg-dim"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: ease.expo }}
            >
              I'm a developer based in Lagos who builds web applications for
              clients and myself. I work with React and Tailwind to create clean
              frontends, and Firebase or Node for the backend. These days I'm
              diving into DevOps, learning how to actually deploy and manage
              applications properly.<br></br> I co-founded Spotlium — a digital
              ecosystem connecting students, brands, and recruiters.
            </motion.p>
          </div>
        </motion.header>

        {/* SHORT VERSION */}
        <motion.section
          className="grid grid-cols-1 gap-x-15 gap-y-6 border-t border-line py-15 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
          {...reveal}
        >
          <motion.h2
            className="m-0 self-start text-[clamp(24px,3vw,34px)] tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 },
            }}
          >
            The short version
          </motion.h2>

          <motion.div
            className="columns-1 gap-13 md:columns-2"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
          >
            {/* Paragraph 1 */}
            <motion.p
              className="mb-5 text-[16px] leading-[1.7] text-fg-soft"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{
                x: 5,
                color: "var(--fg)",
                transition: { duration: 0.2 },
              }}
            >
              I started building websites a few years ago, mostly for fun and
              small freelance gigs. I quickly realized I enjoyed the whole
              process — designing interfaces, writing the frontend code, and
              making the backend work. So I leaned into full-stack development.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              className="mb-5 text-[16px] leading-[1.7] text-fg-soft"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{
                x: 5,
                color: "var(--fg)",
                transition: { duration: 0.2 },
              }}
            >
              These days, I work with React and Tailwind for the frontend
              because they let me build fast and iterate quickly. For the
              backend, I use Firebase when I need something up and running fast,
              or Node when I need more control. I'm also learning Docker, CI/CD,
              and cloud infrastructure — basically all the DevOps stuff that
              makes deploying less painful.
            </motion.p>

            {/* Paragraph 3 - With the link */}
            <motion.p
              className="text-[16px] leading-[1.7] text-fg-soft"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{
                x: 5,
                color: "var(--fg)",
                transition: { duration: 0.2 },
              }}
            >
              Beyond coding, I co-founded{" "}
              <a
                href="https://spotlium.vercel.app"
                className="text-accent hover:text-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotlium
              </a>{" "}
              — a platform that brings students, brands, and recruiters together
              in one space. I've also held leadership roles, including serving
              as Deputy Chairman of the Student Electoral Committee at Crawford
              University. I'm passionate about teaching tech and have
              volunteered as a facilitator multiple times, helping others learn
              to code.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          className="grid grid-cols-1 gap-x-15 gap-y-6 border-t border-line py-15 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
          {...reveal}
        >
          <motion.h2
            className="m-0 self-start text-[clamp(24px,3vw,34px)] tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 },
            }}
          >
            Journey so far
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
          >
            {/* EXPERIENCE 1 */}
            <motion.div
              className="grid grid-cols-1 gap-1 pb-7.5 sm:grid-cols-[120px_1fr] sm:gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "8px",
                paddingLeft: "10px",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="pt-1 font-mono text-[12.5px] text-fg-muted"
                whileHover={{ scale: 1.05, color: "var(--accent)" }}
              >
                2025 &nbsp;—&nbsp; NOW
              </motion.div>

              <div>
                <motion.h3
                  className="mb-1.25 text-[21px] tracking-[-0.01em]"
                  whileHover={{ x: 5 }}
                >
                  CTO & Co-founder{" "}
                  <span className="font-normal text-fg-muted">. Spotlium</span>
                </motion.h3>

                <motion.p
                  className="max-w-[58ch] text-[15.5px] leading-[1.6] text-fg-dim"
                  whileHover={{ color: "var(--fg-soft)" }}
                >
                  Co-founded Spotlium. Spotlium is a digital ecosystem that
                  connects students, brands, and recruiters in one vibrant
                  space.. Built the web app using React, Tailwind, and Firebase,
                  and managed the backend and deployment.
                </motion.p>
              </div>
            </motion.div>

            {/* experience 2 */}
            <motion.div
              className="grid grid-cols-1 gap-1 border-t border-hairline py-7.5 sm:grid-cols-[120px_1fr] sm:gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "8px",
                paddingLeft: "10px",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="pt-1 font-mono text-[12.5px] text-fg-muted"
                whileHover={{ scale: 1.05, color: "var(--accent)" }}
              >
                AUG 2026 &nbsp;—&nbsp; AUG 2025
              </motion.div>

              <div>
                <motion.h3
                  className="mb-1.25 text-[21px] tracking-[-0.01em]"
                  whileHover={{ x: 5 }}
                >
                  Web Developer Tutor{" "}
                  <span className="font-normal text-fg-muted">
                    . JSCC Bootcamp
                  </span>
                </motion.h3>

                <motion.p
                  className="max-w-[58ch] text-[15.5px] leading-[1.6] text-fg-dim"
                  whileHover={{ color: "var(--fg-soft)" }}
                >
                  Taught students how to build websites from scratch using HTML,
                  CSS, and JavaScript. Led hands-on sessions, explained frontend
                  concepts, and guided students in building and presenting
                  real-world web projects.
                </motion.p>
              </div>
            </motion.div>

            {/* EXPERIENCE 3 */}
            <motion.div
              className="grid grid-cols-1 gap-1 border-t border-hairline py-7.5 sm:grid-cols-[120px_1fr] sm:gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "8px",
                paddingLeft: "10px",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="pt-1 font-mono text-[12.5px] text-fg-muted"
                whileHover={{ scale: 1.05, color: "var(--accent)" }}
              >
                JUNE - NOV 2025
              </motion.div>

              <div>
                <motion.h3
                  className="mb-1.25 text-[21px] tracking-[-0.01em]"
                  whileHover={{ x: 5 }}
                >
                  Technical Support Engineer{" "}
                  <span className="font-normal text-fg-muted">
                    . 3Line Limited
                  </span>
                </motion.h3>

                <motion.p
                  className="max-w-[58ch] text-[15.5px] leading-[1.6] text-fg-dim"
                  whileHover={{ color: "var(--fg-soft)" }}
                >
                  Managed transaction settlements, monitored payment activity,
                  assisted customers with transaction-related issues,
                  investigated discrepancies, and prepared reports to support
                  daily financial operations.
                </motion.p>
              </div>
            </motion.div>

            {/* EXPERIENCE 4 */}
            <motion.div
              className="grid grid-cols-1 gap-1 border-t border-hairline py-7.5 sm:grid-cols-[120px_1fr] sm:gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "8px",
                paddingLeft: "10px",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="pt-1 font-mono text-[12.5px] text-fg-muted"
                whileHover={{ scale: 1.05, color: "var(--accent)" }}
              >
                2024 — 2026
              </motion.div>

              <div>
                <motion.h3
                  className="mb-1.25 text-[21px] tracking-[-0.01em]"
                  whileHover={{ x: 5 }}
                >
                  Software Developer{" "}
                  <span className="font-normal text-fg-muted">
                    · Crawford University SEC
                  </span>
                </motion.h3>

                <motion.p
                  className="max-w-[58ch] text-[15.5px] leading-[1.6] text-fg-dim"
                  whileHover={{ color: "var(--fg-soft)" }}
                >
                  Built and improved voting systems for the university, adding
                  live election updates and optimizing performance for fast,
                  responsive interactions. The improved system achieved response
                  times of under 2ms in testing.
                </motion.p>
              </div>
            </motion.div>

            {/* Experience 5 */}
            <motion.div
              className="grid grid-cols-1 gap-1  border-t py-7.5 border-hairline sm:grid-cols-[120px_1fr] sm:gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "8px",
                paddingLeft: "10px",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="pt-1 font-mono text-[12.5px] text-fg-muted"
                whileHover={{ scale: 1.05, color: "var(--accent)" }}
              >
                2023 — now
              </motion.div>

              <div>
                <motion.h3
                  className="mb-1.25 text-[21px] tracking-[-0.01em]"
                  whileHover={{ x: 5 }}
                >
                  Freelance Full-stack Developer
                </motion.h3>

                <motion.p
                  className="max-w-[58ch] text-[15.5px] leading-[1.6] text-fg-dim"
                  whileHover={{ color: "var(--fg-soft)" }}
                >
                  Building web applications for clients, from simple landing
                  pages to full-featured web apps. Working with React, Tailwind,
                  Firebase, and Node. Managing projects from start to finish.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* TOOLS */}
        <motion.section
          className="grid grid-cols-1 gap-x-15 gap-y-6 border-t border-line py-15 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
          {...reveal}
        >
          <motion.h2
            className="m-0 self-start text-[clamp(24px,3vw,34px)] tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 },
            }}
          >
            Tools I reach for
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-x-11 gap-y-8 sm:grid-cols-2 md:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            <ToolGroup
              title="FRONTEND"
              items={[
                "TypeScript",
                "React & Next.js",
                "CSS & design systems",
                "Testing Library",
                "Canvas / WebGL",
                "WordPress & Shopify",
              ]}
            />

            <ToolGroup
              title="BACKEND"
              items={[
                "Firebase & Supabase",
                "Node.js",
                "MongoDb & Redis",
                "WebSockets",
              ]}
            />

            <ToolGroup
              title="INFRA"
              items={[
                "Docker",
                "GitHub Actions",
                "AWS",
                "Terraform (basics)",
                "Observability",
                "Kubernetes (basics)",
              ]}
            />
          </motion.div>
        </motion.section>

        {/* QUOTE */}
        <motion.section
          className="max-w-[34ch] border-t border-line py-19"
          {...revealZoom}
        >
          <motion.blockquote
            className="m-0 text-[clamp(24px,3.2vw,38px)] font-medium leading-[1.35] tracking-[-0.015em]"
            whileHover={{
              scale: 1.02,
              color: "var(--accent)",
              transition: { duration: 0.3 },
            }}
          >
            “Make it work, make it fast, then make it so boring nobody has to
            think about it again.”
          </motion.blockquote>

          <motion.p
            className="mt-5.5 font-mono text-[12.5px] text-fg-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ x: 10, color: "var(--accent)" }}
          >
            — the rule I actually build by
          </motion.p>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="border-t border-line py-15 pb-22"
          {...reveal}
        >
          <motion.h2
            className="mb-4 max-w-[22ch] text-[clamp(26px,3.4vw,40px)] tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Looking for an internship or freelance work.
          </motion.h2>

          <motion.p
            className="mb-7 max-w-[54ch] text-[17px] leading-[1.6] text-fg-dim"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            If you're looking for a developer who actually enjoys both frontend
            and backend work, or you need help with a project — let's talk. I'm
            especially interested in DevOps internships where I can learn from
            experienced engineers.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <NavLink
                to="/contact"
                className="rounded-lg bg-accent px-5 py-3 font-mono text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
                {...hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </NavLink>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <NavLink
                to="/work"
                className="rounded-lg border border-line-soft px-5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-accent hover:text-fg"
                {...hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                See the work
              </NavLink>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <a
                href="/TOBENNA TEDDY-AUSTIN.pdf"
                className="rounded-lg border border-line-soft px-5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-accent hover:text-fg"
                {...hoverScale}
                whileTap={{ scale: 0.95 }}
              >
                Résumé ↓
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          className="flex flex-wrap justify-between gap-3 border-t border-hairline py-7.5 pb-12 font-mono text-[12.5px] text-fg-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span whileHover={{ color: "var(--accent)", x: 5 }}>
            © 2026 Teddy-Austin Tobenna
          </motion.span>

          <motion.span
            className="flex gap-5"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="transition-colors hover:text-accent"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              github
            </motion.a>

            <motion.a
              href="#"
              className="transition-colors hover:text-accent"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              twitter
            </motion.a>

            <motion.a
              href="#"
              className="transition-colors hover:text-accent"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              email
            </motion.a>
          </motion.span>
        </motion.footer>
      </main>
    </motion.div>
  );
}

function ToolGroup({ title, items }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="mb-3.5 font-mono text-[11.5px] tracking-[0.07em] text-accent"
        whileHover={{
          scale: 1.05,
          x: 5,
          color: "var(--accent-hover)",
        }}
      >
        {title}
      </motion.div>

      <motion.ul
        className="m-0 list-none p-0 text-[16px] leading-[1.9] text-fg-soft"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { opacity: 0, x: -10 },
              show: { opacity: 1, x: 0 },
            }}
            whileHover={{
              x: 10,
              color: "var(--fg)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}