import { motion } from "framer-motion"

export default function Education() {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Academic Journey</h2>

      <div style={styles.card}>
        <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>
        <p style={styles.meta}>Sanjay Ghodawat University · India · 2022 – 2026</p>
        <p style={styles.text}>
          Built a strong foundation in computer science while actively focusing
          on practical software development. Alongside coursework, I worked on
          real-world Android, web, and IoT projects that strengthened my
          engineering mindset beyond academics.
        </p>
      </div>

      <div style={styles.card}>
        <h3>Semester Exchange – Computer Science (Hons.)</h3>
        <p style={styles.meta}>
          INTI International University · Malaysia · 2025
        </p>
        <p style={styles.text}>
          Gained international exposure and collaborated with students from
          diverse technical backgrounds. This experience strengthened my
          problem-solving skills, adaptability, and global perspective on
          software engineering.
        </p>
      </div>
    </motion.section>
  )
}

const styles = {
  section: {
    padding: "90px 40px",
    maxWidth: "1000px",
    margin: "auto"
  },
  card: {
    background: "#0b1220",
    borderRadius: "20px",
    border: "1px solid #1e293b",
    padding: "26px",
    marginTop: "26px",
    boxShadow: "0 14px 30px rgba(2,6,23,0.6)",
    transition: "all 0.3s ease"
  },
  meta: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#9ca3af"
  },
  text: {
    marginTop: "14px",
    lineHeight: "1.7",
    color: "#cbd5e1"
  }
}
