export default function AndroidStats() {
  return (
    <section style={styles.section}>
      <h2>Android Experience</h2>

      <div style={styles.grid}>
        <Stat title="5+" desc="Production Apps Built" />
        <Stat title="Firebase" desc="Auth · DB · Realtime" />
        <Stat title="APK" desc="Direct Builds & Distribution" />
        <Stat title="End-to-End" desc="Idea → Build → Deploy" />
      </div>
    </section>
  )
}

function Stat({ title, desc }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const styles = {
  section: {
    padding: "80px 40px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
  background: "#0b1220",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  padding: "26px",
  boxShadow: "0 14px 30px rgba(2,6,23,0.6)",
  transition: "all 0.3s ease"
}

}
