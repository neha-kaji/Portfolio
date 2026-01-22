const skills = [
  "Android (Java)",
  "Flutter",
  "Firebase Auth & Firestore",
  "REST API Integration",
  "App Architecture (MVVM)",
  "Play Store Builds",
  "Realtime Systems",
  "UI/UX for Mobile"
]


export default function Skills() {
  return (
    <section style={styles.section}>
      <h2>Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, i) => (
          <div key={i} style={styles.skillCard}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: "80px 40px",
    textAlign: "center"
  },
  grid: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px"
  },
  skillCard: {
    padding: "12px 18px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    boxShadow: "0 14px 40px rgba(15,23,42,0.08)",
    fontSize: "14px",
    fontWeight: "500"
  }
}
