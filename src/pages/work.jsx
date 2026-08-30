import projects from "../data/projects";
import SiteNav from "../components/SiteNav";
import { motion } from "framer-motion";
import { ease } from "../lib/motion";

const CASE_GRID =
  "grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-x-16";

function AsideLabel({ children }) {
  return (
    <motion.div
      className="mb-2 font-mono text-[11px] tracking-[0.07em] text-fg-muted"
      whileHover={{ x: 5, color: "var(--accent)" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function Case({ project, first, index }) {
  const {
    id,
    num,
    title,
    meta,
    role,
    stack,
    links,
    preview,
    lede,
    body,
    metricsHeading,
    metrics,
  } = project;

  return (
    <motion.section
      id={id}
      className={`scroll-mt-5 py-18 ${first ? "" : "border-t border-line"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: ease.expo,
      }}
    >
      {/* head — numeral beside title, baselines aligned */}
      <motion.div
        className={`${CASE_GRID} mb-10 items-end gap-y-2 md:gap-y-4`}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-[64px] leading-[0.9] font-semibold text-ghost md:text-[clamp(64px,9vw,128px)]"
          variants={{
            hidden: { opacity: 0, scale: 0.5, rotate: -10 },
            show: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            color: "var(--accent)",
            transition: { duration: 0.3 },
          }}
        >
          {num}
        </motion.div>
        <div>
          <motion.h2
            className="m-0 text-[clamp(32px,4.4vw,54px)] leading-[1.04] tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-3 font-mono text-[13px] text-fg-muted"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {meta}
          </motion.p>
        </div>
      </motion.div>

      {/* preview plate */}
      {preview && (
        <motion.div
          className="mb-11 flex aspect-16/7 items-end rounded-card border border-line bg-diagonal p-5.5"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.span
            className="font-mono text-[11.5px] text-fg-faint"
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {preview}
          </motion.span>
        </motion.div>
      )}

      <div className={`${CASE_GRID} gap-y-9`}>
        {/* aside */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div className="mb-6" whileHover={{ x: 5 }}>
            <AsideLabel>ROLE</AsideLabel>
            <motion.div
              className="text-base leading-normal text-fg-soft"
              whileHover={{ color: "var(--fg-bright)" }}
            >
              {role}
            </motion.div>
          </motion.div>

          <motion.div className="mb-6" whileHover={{ x: 5 }}>
            <AsideLabel>STACK</AsideLabel>
            <motion.div
              className="flex flex-wrap gap-1.75"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {stack.map((s) => (
                <motion.span
                  key={s}
                  className="chip"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "var(--accent)",
                    color: "var(--accent-ink)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }}>
            <AsideLabel>LINKS</AsideLabel>
            <motion.div
              className="flex flex-col gap-1.5 text-[15px]"
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
              {links.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-accent transition-colors hover:text-accent-hover"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.aside>

        {/* narrative */}
        <motion.div
          className="max-w-[64ch]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.p
            className="mb-5 text-[17px] leading-[1.65] text-fg-bright"
            whileHover={{
              color: "var(--fg)",
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
            {lede}
          </motion.p>
          <motion.p
            className="mb-7.5 text-base leading-[1.65] text-fg-dim"
            whileHover={{ color: "var(--fg-soft)" }}
          >
            {body}
          </motion.p>

          <motion.h3
            className="mb-4 text-[19px] tracking-[-0.01em]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              x: 5,
              color: "var(--accent)",
              transition: { duration: 0.2 },
            }}
          >
            {metricsHeading}
          </motion.h3>

          <motion.ul
            className="m-0 flex list-none flex-col gap-3.25 p-0"
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
            {metrics.map(({ fig, text }) => (
              <motion.li
                key={fig}
                className="flex gap-4 text-base leading-[1.55]"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "4px",
                  paddingLeft: "8px",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="min-w-16 font-semibold text-accent"
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent-hover)",
                  }}
                >
                  {fig}
                </motion.span>
                <motion.span whileHover={{ color: "var(--fg)" }}>
                  {text}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function Work() {
  return (
    <motion.div
      className="min-h-screen bg-canvas text-fg antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SiteNav />

      <div className="shell">
        {/* hero */}
        <motion.header
          className="max-w-225 pt-19 pb-13"
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
            SELECTED WORK · 2022—2026
          </motion.div>
          <motion.h1
            className="m-0 text-[clamp(42px,6.2vw,84px)] leading-[1.03] font-semibold tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: ease.expo }}
          >
            Things I've built.
          </motion.h1>
          <motion.p
            className="mt-6.5 max-w-[60ch] text-[19px] leading-[1.6] text-fg-dim"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: ease.expo }}
          >
            A few projects I've worked on — some for clients, some for myself.
            Each one taught me something new about building for the web.
          </motion.p>
        </motion.header>

        {/* index strip */}
        <motion.div
          className="flex flex-wrap gap-8 border-y border-line py-5 font-mono text-[13.5px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{
            backgroundColor: "rgba(255,255,255,0.02)",
            transition: { duration: 0.3 },
          }}
        >
          {projects.map(({ id, num, title }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className="text-accent transition-colors hover:text-accent-hover"
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-accent"
                whileHover={{
                  color: "var(--accent-hover)",
                  fontSize: "1.1em",
                }}
              >
                {num}
              </motion.span>
              <motion.span
                className="ml-2 text-fg"
                whileHover={{ color: "var(--fg-bright)" }}
              >
                {title}
              </motion.span>
            </motion.a>
          ))}
          <motion.span
            className="ml-auto text-fg-muted"
            whileHover={{
              color: "var(--accent)",
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Frontend · Backend · Full-stack
          </motion.span>
        </motion.div>

        {/* cases */}
        {projects.map((p, i) => (
          <Case key={p.id} project={p} first={i === 0} index={i} />
        ))}

        {/* close */}
        <motion.section
          className="border-t border-line pt-16 pb-22"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: ease.expo }}
        >
          <motion.h2
            className="mb-4 max-w-[20ch] text-[clamp(26px,3.4vw,40px)] tracking-[-0.02em]"
            whileHover={{
              x: 5,
              color: "var(--accent)",
              transition: { duration: 0.3 },
            }}
          >
            Always building something new.
          </motion.h2>
          <motion.p
            className="mb-7 max-w-[56ch] text-[17px] leading-[1.6] text-fg-dim"
            whileHover={{ color: "var(--fg-soft)" }}
          >
            I'm constantly working on new projects and learning new
            technologies. Check my GitHub for the latest, or reach out if you
            want to see something specific.
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
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="rounded-btn bg-accent px-5 py-3 font-mono text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#"
              className="rounded-btn border border-line-soft px-5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-line-hover hover:text-fg"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "var(--accent)",
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Résumé ↓
            </motion.a>
            <motion.a
              href="https://github.com/Tobennaaustin"
              className="rounded-btn border border-line-soft px-5 py-3 font-mono text-[13px] text-fg-soft transition-colors hover:border-line-hover hover:text-fg"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "var(--accent)",
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub →
            </motion.a>
          </motion.div>
        </motion.section>

        {/* footer */}
        <motion.footer
          className="flex flex-wrap justify-between gap-3 border-t border-hairline pt-7.5 pb-12 font-mono text-[12.5px] text-fg-muted"
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
              href="https://github.com/Tobennaaustin"
              className="hover:text-accent-hover"
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
              href="https://x.com/"
              className="hover:text-accent-hover"
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
              className="hover:text-accent-hover"
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
      </div>
    </motion.div>
  );
}