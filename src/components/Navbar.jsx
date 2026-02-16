export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Neha Kaji</h2>
      <div style={styles.links}>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #111827",
    background: "rgba(15,23,42,0.9)",
    backdropFilter: "blur(8px)"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
}
