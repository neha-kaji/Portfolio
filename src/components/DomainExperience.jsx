import { motion } from "framer-motion"

export default function DomainExperience() {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Experience Across Domains</h2>

      <div style={styles.grid}>
        <Card
          title="Mobile Development"
          text="Designed and built Android and Flutter applications with authentication, real-time data, and production-ready features."
        />
        <Card
          title="Web Development"
          text="Worked on ERP systems and e-commerce platforms using React, REST APIs, and backend services to support real business workflows."
        />
        <Card
          title="IoT & Embedded Systems"
          text="Developed IoT-based solutions integrating hardware sensors, microcontrollers, and mobile applications for real-time monitoring."
        />
        <Card
          title="Community & Mentorship"
          text="Mentored juniors in Android and DSA, organized technical events, and helped students navigate real-world development practices."
        />
      </div>
    </motion.section>
  )
}

function Card({ title, text }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.text}>{text}</p>
    </div>
  )
}

const styles = {
  section: {
    padding: "90px 40px",
    maxWidth: "1100px",
    margin: "auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
  background: "#ffffff",
  borderRadius: "20px",
  border: "1px solid #e2e8f0",
  padding: "26px",
  boxShadow: "0 14px 40px rgba(15,23,42,0.08)",
  transition: "all 0.3s ease"
},
  text: {
    marginTop: "10px",
    color: "#29406d",
    lineHeight: "1.6"
  }
}
