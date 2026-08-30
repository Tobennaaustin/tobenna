import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Contact() {
  const [topic, setTopic] = useState("Full-time");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a mailto: link so the user's email client opens with the message pre-filled
    const to = "tobennaaustin@gmail.com";
    const subject = encodeURIComponent(`${topic} enquiry from ${formData.name || formData.email || "Website visitor"}`);
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company}`,
      `Topic: ${topic}`,
      "",
      `${formData.message}`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    // Open the user's mail client
    window.location.href = mailto;

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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
          className="max-w-215 py-18 pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.expo }}
        >
          <motion.div
            className="mb-5 font-mono text-[12.5px] tracking-[0.08em] text-accent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            CONTACT ·{" "}
            <motion.span
              className="text-accent"
              animate={{
                opacity: [1, 0.7, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              AVAILABLE FOR NEW ROLES
            </motion.span>
          </motion.div>

          <motion.h1
            className="m-0 text-[clamp(42px,6.2vw,84px)] font-semibold leading-[1.02] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: ease.expo }}
          >
            Let's build something.
          </motion.h1>

          <motion.p
            className="mt-6.5 max-w-[56ch] text-[19px] leading-[1.6] text-fg-dim"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: ease.expo }}
          >
            Open to freelance work, internship opportunities, or just a good
            conversation about tech. I reply to everything within a day.
          </motion.p>
        </motion.header>

        {/* Contact Grid */}
        <motion.section
          className="grid grid-cols-1 items-start gap-14 py-15 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-x-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5.5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.h2
              className="m-0 text-[clamp(22px,2.6vw,30px)] tracking-[-0.015em]"
              whileHover={{ x: 5, color: "var(--accent)" }}
            >
              Send a note
            </motion.h2>

            {/* Name + Email */}
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="flex flex-col gap-1.75"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.label
                  htmlFor="name"
                  className="font-mono text-[11.5px] tracking-wider text-fg-nav"
                  whileHover={{ x: 5, color: "var(--accent)" }}
                >
                  YOUR NAME
                </motion.label>

                <motion.input
                  id="name"
                  type="text"
                  placeholder="Jane Recruiter"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-[8px] border border-line-soft bg-surface px-3.25 py-2.75 text-[15px] text-fg outline-none placeholder:text-fg-muted focus:border-accent"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(79,224,208,0.1)",
                    transition: { duration: 0.2 },
                  }}
                  whileHover={{
                    borderColor: "var(--accent)",
                    transition: { duration: 0.2 },
                  }}
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-1.75"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.label
                  htmlFor="email"
                  className="font-mono text-[11.5px] tracking-wider text-fg-nav"
                  whileHover={{ x: 5, color: "var(--accent)" }}
                >
                  EMAIL
                </motion.label>

                <motion.input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[8px] border border-line-soft bg-surface px-3.25 py-2.75 text-[15px] text-fg outline-none placeholder:text-fg-muted focus:border-accent"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(79,224,208,0.1)",
                    transition: { duration: 0.2 },
                  }}
                  whileHover={{
                    borderColor: "var(--accent)",
                    transition: { duration: 0.2 },
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Company */}
            <motion.div
              className="flex flex-col gap-1.75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.label
                htmlFor="company"
                className="font-mono text-[11.5px] tracking-wider text-fg-nav"
                whileHover={{ x: 5, color: "var(--accent)" }}
              >
                COMPANY <span className="text-fg-muted">(optional)</span>
              </motion.label>

              <motion.input
                id="company"
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-[8px] border border-line-soft bg-surface px-3.25 py-2.75 text-[15px] text-fg outline-none placeholder:text-fg-muted focus:border-accent"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(79,224,208,0.1)",
                  transition: { duration: 0.2 },
                }}
                whileHover={{
                  borderColor: "var(--accent)",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            {/* Enquiry Type */}
            <motion.div
              className="flex flex-col gap-1.75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.label
                className="font-mono text-[11.5px] tracking-wider text-fg-nav"
                whileHover={{ x: 5, color: "var(--accent)" }}
              >
                WHAT'S THIS ABOUT?
              </motion.label>

              <motion.div
                role="radiogroup"
                aria-label="Enquiry type"
                className="flex flex-wrap overflow-hidden rounded-[8px] border border-line-soft"
                whileHover={{ borderColor: "var(--accent)" }}
              >
                {["Full-time", "Contract", "Something else"].map(
                  (item, index) => (
                    <motion.label
                      key={item}
                      className={`min-w-27.5 flex-1 cursor-pointer px-2.5 py-2.75 text-center font-mono text-[12.5px] transition-colors ${
                        topic === item
                          ? "bg-accent font-semibold text-accent-ink"
                          : "text-fg-soft hover:bg-[#11151a]"
                      }`}
                      whileHover={{
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <input
                        type="radio"
                        name="topic"
                        value={item}
                        checked={topic === item}
                        onChange={() => setTopic(item)}
                        className="sr-only"
                      />
                      {item}
                    </motion.label>
                  ),
                )}
              </motion.div>
            </motion.div>

            {/* Message */}
            <motion.div
              className="flex flex-col gap-1.75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.label
                htmlFor="message"
                className="font-mono text-[11.5px] tracking-wider text-fg-nav"
                whileHover={{ x: 5, color: "var(--accent)" }}
              >
                MESSAGE
              </motion.label>

              <motion.textarea
                id="message"
                placeholder="A line or two about the role, the team, and what you're building."
                value={formData.message}
                onChange={handleChange}
                className="min-h-35 w-full resize-y rounded-[8px] border border-libe-soft bg-surface px-3.25 py-2.75 text-[15px] leading-normal text-fg outline-none placeholder:text-fg-muted focus:border-accent"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(79,224,208,0.1)",
                  transition: { duration: 0.2 },
                }}
                whileHover={{
                  borderColor: "var(--accent)",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                type="submit"
                className="cursor-pointer rounded-[8px] border-none bg-accent px-5.5 py-3.25 font-mono text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(79,224,208,0.2)",
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      ✓ Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.span
                className="text-[14px] text-fg-muted"
                whileHover={{ color: "var(--fg-soft)" }}
              >
                Or email me directly — details on the right.
              </motion.span>
            </motion.div>
          </motion.form>

          {/* Aside */}
          <motion.aside
            className="flex flex-col gap-9"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {/* Direct */}
            <motion.div whileHover={{ x: 5 }}>
              <motion.div
                className="mb-4 font-mono text-[11px] tracking-[0.07em] text-fg-muted"
                whileHover={{ x: 5, color: "var(--accent)" }}
              >
                DIRECT
              </motion.div>

              <div className="flex flex-col gap-3.25">
                <motion.a
                  href="mailto:tobennaaustin@gmail.com"
                  className="text-[20px] font-semibold tracking-[-0.01em] text-accent transition-colors hover:text-accent-hover"
                  whileHover={{
                    scale: 1.03,
                    x: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  tobennaaustin@gmail.com
                </motion.a>

                <motion.a
                  href="https://github.com/Tobennaaustin"
                  className="text-[15.5px] text-accent transition-colors hover:text-hover"
                  whileHover={{
                    x: 8,
                    color: "var(--accent-hover)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  github.com/Tobennaaustin →
                </motion.a>

                <motion.a
                  href="https://x.com/AustinTobenna"
                  className="text-[15.5px] text-accent transition-colors hover:text-hover"
                  whileHover={{
                    x: 8,
                    color: "var(--accent-hover)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  x.com/AustinTobenna →
                </motion.a>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              className="border-t border-line pt-7.5"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="mb-4 font-mono text-[11px] tracking-[0.07em] text-fg-muted"
                whileHover={{ x: 5, color: "var(--accent)" }}
              >
                DETAILS
              </motion.div>

              <dl className="m-0 flex flex-col gap-3.25 text-[15.5px]">
                {[
                  { label: "Based in", value: "Lagos, Nigeria" },
                  { label: "Timezone", value: "WAT (UTC+1)" },
                  { label: "Remote", value: "Yes, happily" },
                  { label: "Reply time", value: "1—2 days" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex justify-between gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(255,255,255,0.02)",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <dt className="text-fg-muted">{item.label}</dt>
                    <dd className="m-0 text-fg-soft">{item.value}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>

            {/* Resume */}
            <motion.div
              className="border-t border-line pt-7.5"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="mb-4 font-mono text-[11px] tracking-[0.07em] text-fg-muted"
                whileHover={{ x: 5, color: "var(--accent)" }}
              >
                PREFER PAPER?
              </motion.div>

              <motion.a
                href="/TOBENNA TEDDY-AUSTIN.pdf"
                className="block rounded-[8px] border border-line-soft px-3.25 py-3.25 text-center font-mono text-[13px] text-fg-soft transition-colors hover:border-accent hover:text-accent"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                Download résumé (PDF) ↓
              </motion.a>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* Closing Statement */}
        <motion.section
          className="border-t border-line py-13 pb-22"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: ease.expo }}
        >
          <motion.p
            className="m-0 max-w-[38ch] text-[clamp(22px,2.6vw,32px)] font-medium leading-[1.35] tracking-[-0.015em]"
            whileHover={{
              scale: 1.02,
              color: "var(--accent)",
              x: 5,
              transition: { duration: 0.3 },
            }}
          >
            I respond to every message. If I can't help, I'll tell you — and
            usually point you to someone who can.
          </motion.p>
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
              href="mailto:teddy@example.com"
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