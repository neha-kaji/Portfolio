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
      <h2>DevOps Focus Areas</h2>

      <div style={styles.grid}>
        <Card
          title="CI/CD & Automation"
          text="Designed pipelines for build, test, security scans, and progressive delivery using modern tooling. Reduced lead time and improved release confidence."
        />
        <Card
          title="Cloud & IaC"
          text="Provisioned reproducible infrastructure with Terraform; implemented secure networking, managed services, and least-privilege access controls."
        />
        <Card
          title="Containers & Kubernetes"
          text="Containerized services with Docker; deployed on Kubernetes with Helm charts, health probes, resource policies, and blue/green or canary strategies."
        />
        <Card
          title="Observability & Reliability"
          text="Defined SLOs and alerts; built dashboards and tracing to cut MTTR. Practiced incident response, postmortems, and runbooks to improve resilience."
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
