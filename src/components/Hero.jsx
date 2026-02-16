import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      style={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        DevOps Engineer
        <span style={styles.highlight}> · CI/CD & Cloud</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        style={styles.description}
      >
        I design and operate reliable delivery pipelines, cloud infrastructure, and
        observability systems. Strong focus on automation, Infrastructure as Code,
        containerized workloads, and resilience—shipping features safely and often.
      </motion.p>

      <motion.div
        style={styles.buttons}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55 }}
      >
        <motion.a
          href="#projects"
          style={styles.primaryBtn}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore DevOps & Projects
        </motion.a>

        <motion.a
          href="/resume.pdf"
          style={styles.secondaryBtn}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "120px 20px 100px"
  },
  highlight: {
    background: "linear-gradient(90deg, #ec4899, #38bdf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  description: {
    maxWidth: "720px",
    margin: "20px auto 0",
    color: "#051a36",
    fontSize: "17px"
  },
  buttons: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap"
  },
 primaryBtn: {
    padding: "14px 28px",
    background: "linear-gradient(90deg, #ec4899, #38bdf8)",
    color: "#ffffff",
    borderRadius: "14px",
    fontWeight: "600",
    boxShadow: "0 12px 30px rgba(236,72,153,0.35)",
    cursor: "pointer"
  },
  secondaryBtn: {
    padding: "14px 28px",
    border: "2px solid #38bdf8",
    color: "#0284c7",
    borderRadius: "14px",
    cursor: "pointer"
  }
}
