import { motion } from "framer-motion"

export default function ProjectCard({ project }) {
  return (
    <motion.div
      style={styles.card}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div style={styles.tags}>
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div style={styles.actions}>
  <a href={project.apk} download style={styles.apkBtn}>
    ⬇ Download APK
  </a>
</div>

<p style={styles.apkNote}>
  ⚠ {project.apkNote}
</p>
    </motion.div>
  )
}

const styles = {
  card: {
  background: "#ffffff",
  borderRadius: "20px",
  border: "1px solid #e2e8f0",
  padding: "26px",
  boxShadow: "0 14px 40px rgba(15,23,42,0.08)",
  transition: "all 0.3s ease"
},
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    margin: "16px 0"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  apkBtn: {
    padding: "10px 16px",
    background: "#d690b6",
    color: "#1f022c",
    borderRadius: "10px",
    fontWeight: "600"
  },
  badge: {
    fontSize: "12px",
    color: "#38bdf8"
  },
  apkNote: {
  marginTop: "12px",
  fontSize: "13px",
  color: "#94a3b8",
  lineHeight: "1.4"
}

}
