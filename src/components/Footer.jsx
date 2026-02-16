import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      style={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>Let’s build something impactful</h3>

      <p style={styles.subtitle}>
        DevOps engineer focused on CI/CD, cloud infrastructure, reliability, and developer velocity.
      </p>

      <a href="mailto:nehakaji1606@gmail.com" style={styles.email}>
        nehakaji1606@gmail.com
      </a>

      <div style={styles.links}>
        <motion.a
          href="https://linkedin.com/in/neha-kaji"
          target="_blank"
          whileHover={{ y: -3 }}
        >
          LinkedIn
        </motion.a>

        <motion.a
          href="https://github.com/neha-kaji"
          target="_blank"
          whileHover={{ y: -3 }}
        >
          GitHub
        </motion.a>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          whileHover={{ y: -3 }}
        >
          Resume
        </motion.a>
      </div>

      <p style={styles.copy}>
        Built from scratch · DevOps-focused · © 2026 Neha Kaji
      </p>
    </motion.footer>
  )
}

const styles = {
  footer: {
    padding: "80px 20px",
    textAlign: "center",
    borderTop: "1px solid #1e293b",
    marginTop: "100px",
    background:
      "linear-gradient(180deg, rgba(2,6,23,0.6), rgba(2,6,23,0.9))"
  },
  subtitle: {
    marginTop: "10px",
    color: "#94a3b8",
    fontSize: "15px"
  },
  email: {
    display: "inline-block",
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#38bdf8"
  },
  links: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    fontWeight: "600"
  },
  copy: {
    marginTop: "40px",
    color: "#64748b",
    fontSize: "13px"
  }
}
