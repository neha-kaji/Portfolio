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
    textAlign: "center",
    color: "#f9fafb"
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
    background: "#0b1220",
    border: "1px solid #1e293b",
    borderRadius: "20px",
    boxShadow: "0 14px 30px rgba(2,6,23,0.6)",
    fontSize: "14px",
    fontWeight: "500"
  }
}
