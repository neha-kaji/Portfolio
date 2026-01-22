import { motion } from "framer-motion"

export default function Leadership() {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Leadership & Community</h2>

      <div style={styles.card}>
        <h3>Google Developer Group on Campus – Organizer</h3>
        <p style={styles.text}>
          Led and scaled campus-level GDG initiatives by organizing technical
          workshops, awareness programs, and collaborations. Engaged over 500+
          students while coordinating speakers, logistics, and execution.
        </p>
      </div>

      <div style={styles.card}>
        <h3>Microsoft Learn Student Ambassador – Vice President</h3>
        <p style={styles.text}>
          Selected as an MLSA and later promoted to Vice President, where I led
          technical initiatives, mentored student ambassadors, and collaborated
          with Microsoft programs to drive developer engagement.
        </p>
      </div>

      <div style={styles.card}>
        <h3>Prabal – National Hackathon Event Manager</h3>
        <p style={styles.text}>
          Managed a national-level hackathon with 500+ participants, coordinated
          with major GDG communities, handled sponsorships worth ₹1 lakh, and
          led cross-functional teams for smooth execution.
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
  background: "#ffffff",
  borderRadius: "20px",
  border: "1px solid #e2e8f0",
  padding: "26px",
  marginTop: "26px",
  boxShadow: "0 14px 40px rgba(15,23,42,0.08)",
  transition: "all 0.3s ease"
},

  text: {
    marginTop: "10px",
    lineHeight: "1.7",
    color: "#29406d"
  }
}
