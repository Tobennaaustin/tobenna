import { motion } from "framer-motion";
import SiteNav from "../components/SiteNav";
import {
  reveal,
  revealZoom,
  revealLeft,
  revealRight,
  stagger,
  staggerFast,
  hoverScale,
  hoverLift,
  hoverGlow,
  fade,
  rise,
  zoomIn,
  slideLeft,
  slideRight,
  transition,
  ease,
  springTransition,
  bounceTransition,
  pulse,
} from "../lib/motion";

const articles = [
  {
    date: "JUL 2025",
    title:
      "Best Projects to Build with Firebase (And Why It’s Perfect for Them)",
    description:
      "Explore the most effective ways to leverage Firebase for your next project.",
    tag: "Frontend",
    href: "https://medium.com/@tobennaaustin/best-projects-to-build-with-firebase-and-why-its-perfect-for-them-d61b8bf7a787",
  },
  {
    date: "JUL 2025",
    title: "How to Secure Your Firebase App and Firestore Database",
    description:
      "Learn how to secure your Firebase app and Firestore database with best practices, including authentication, authorization, and security rules.",
    tag: "Backend",
    href: "https://medium.com/@tobennaaustin/how-to-secure-your-firebase-app-and-firestore-database-b6d7912ee068",
  },
  {
    date: "JUL 2025",
    title:
      "How to Use Firebase in Your Web App — Pros, Cons, and Code Examples",
    description:
      "Learn how to use Firebase in your web app, including its pros and cons, and see code examples for authentication, database, and hosting.",
    tag: "Backend",
    href: "https://medium.com/@tobennaaustin/how-to-use-firebase-in-your-web-app-pros-cons-and-code-examples-e659f33b6d1e",
  },
];

export default function Writing() {
  return (
    <motion.div
      className="min-h-screen bg-canvas text-fg antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SiteNav />

      <main className="mx-auto max-w-shell px-[clamp(22px,5vw,64px)]">
        {/* Hero */}
        <motion.header
          className="max-w-200 py-18 pb-13"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.expo }}
        >
          <motion.div
            className="mb-5.5 font-mono text-[12.5px] tracking-[0.08em] text-accent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            WRITING
          </motion.div>

          <motion.h1
            className="m-0 text-[clamp(42px,6vw,80px)] font-semibold leading-[1.04] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: ease.expo }}
          >
            Things I'm learning.
          </motion.h1>

          <motion.p
            className="mt-6.5 max-w-[56ch] text-[19px] leading-[1.6] text-fg-dim"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: ease.expo }}
          >
            I write about what I'm learning, React, Tailwind, Firebase, DevOps,
            and everything in between. Mostly for myself, but hopefully useful
            to someone else too.
          </motion.p>
        </motion.header>

        {/* Latest */}
        <motion.section
          className="border-t border-line py-11 pb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease.expo }}
        >
          <motion.div
            className="mb-6 font-mono text-[11.5px] tracking-[0.08em] text-accent"
            whileHover={{ x: 5, color: "var(--accent-hover)" }}
          >
            LATEST
          </motion.div>

          <motion.a
            href="https://medium.com/@tobennaaustin/a-complete-guide-to-firebase-authentication-building-secure-auth-for-your-app-fd3a453fec6a"
            className="group grid grid-cols-1 items-center gap-8 text-inherit no-underline md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-x-15"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              <motion.h2
                className="mb-4 text-[clamp(28px,3.8vw,46px)] leading-[1.1] tracking-[-0.02em] transition-colors duration-150 group-hover:text-accent-hover"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                A Complete Guide to Firebase Authentication: Building Secure
                Auth for Your App
              </motion.h2>

              <motion.p
                className="mb-4.5 max-w-[56ch] text-[17px] leading-[1.6] text-fg-dim"
                whileHover={{ color: "var(--fg-soft)" }}
              >
                Learn how to implement Firebase Authentication in your web or
                mobile app, including email/password, social logins, and custom
                authentication methods. We'll cover best practices for security
                and user experience.
              </motion.p>

              <motion.span
                className="font-mono text-[12.5px] text-fg-muted"
                whileHover={{ color: "var(--accent)" }}
              >
                JUL 2025 · 12 MIN ·{" "}
                <motion.span
                  className="text-accent"
                  whileHover={{
                    color: "var(--accent-hover)",
                    fontSize: "1.05em",
                  }}
                >
                  FRONTEND
                </motion.span>
              </motion.span>
            </div>

            <motion.figure
              className="order-first m-0 aspect-4/3 rounded-[14px] border border-line  md:order-0"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
            >
              <motion.img
                className="h-full w-full flex items-center justify-center text-fg-faint font-mono text-sm"
                src="/write.png"
                alt="Writing illustration"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </motion.figure>
          </motion.a>
        </motion.section>

        {/* Archive */}
        <motion.section
          className="pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-2 font-mono text-[11.5px] tracking-[0.08em] text-fg-muted"
            whileHover={{ x: 5, color: "var(--accent)" }}
          >
            ARCHIVE
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.href}
                className={`group grid grid-cols-1 gap-2 py-6.5 text-inherit no-underline md:grid-cols-[120px_1fr_auto] md:items-baseline md:gap-7 ${
                  index === articles.length - 1
                    ? "border-y border-line"
                    : "border-t border-line"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  x: 8,
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "8px",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="font-mono text-[12.5px] text-fg-muted"
                  whileHover={{
                    color: "var(--accent)",
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {article.date}
                </motion.span>

                <div>
                  <motion.h3
                    className="mb-2 text-[23px] tracking-[-0.01em] transition-colors duration-150 group-hover:text-accent-hover"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {article.title}
                  </motion.h3>

                  <motion.p
                    className="m-0 max-w-[64ch] text-[15.5px] leading-[1.6] text-fg-nav"
                    whileHover={{ color: "var(--fg-soft)" }}
                  >
                    {article.description}
                  </motion.p>
                </div>

                <motion.span
                  className="justify-self-start rounded-pill border border-[rgba(79,224,208,0.18)] bg-[rgba(79,224,208,0.08)] px-2.25 py-0.75 font-mono text-[11px] text-accent-soft md:justify-self-end"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(79,224,208,0.15)",
                    borderColor: "var(--accent)",
                    color: "var(--accent-hover)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {article.tag}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Newsletter */}
        <motion.section
          className="grid grid-cols-1 gap-6 py-16 pb-22 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: ease.expo }}
        >
          <motion.h2
            className="m-0 text-[clamp(24px,3vw,34px)] tracking-[-0.02em]"
            whileHover={{
              x: 5,
              color: "var(--accent)",
              transition: { duration: 0.3 },
            }}
          >
            Get new essays by email.
          </motion.h2>

          <div>
            <motion.p
              className="mb-5 max-w-[52ch] text-[16px] leading-[1.6] text-fg-dim"
              whileHover={{ color: "var(--fg-soft)" }}
            >
              I write only on Medium. Subscribe to my Medium account to get my
              latest write ups.
            </motion.p>

            <motion.div
              className="flex max-w-110 flex-wrap items-center gap-3"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                type="submit"
                onClick={() =>
                  window.open("https://medium.com/@tobennaaustin", "_blank")
                }
                className="cursor-pointer rounded-[8px] border-none bg-accent px-4.5 py-3 font-mono text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(79,224,208,0.2)",
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="flex flex-wrap justify-between gap-3 border-t border-hairline py-7.5 pb-12 font-mono text-[12.5px] text-fg-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            whileHover={{
              color: "var(--accent)",
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
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
              whileHover={{
                scale: 1.1,
                color: "var(--accent)",
                transition: { type: "spring", stiffness: 300 },
              }}
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
              whileHover={{
                scale: 1.1,
                color: "var(--accent)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              twitter
            </motion.a>

            <motion.a
              href="/contact"
              className="transition-colors hover:text-accent"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.1,
                color: "var(--accent)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              email
            </motion.a>
          </motion.span>
        </motion.footer>
      </main>
    </motion.div>
  );
}