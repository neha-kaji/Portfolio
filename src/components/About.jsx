import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <p style={styles.text}>
        I build reliable software delivery systems—taking code from commit to production with
        speed, safety, and observability. As a DevOps Engineer, I focus on automation, repeatable
        infrastructure, and feedback loops that let teams ship confidently.
      </p>

      <p style={styles.text}>
        My toolkit includes CI/CD (pipelines, testing gates, security scans), Infrastructure as Code
        (Terraform), containerization and orchestration (Docker, Kubernetes), and cloud services.
        I care deeply about reliability—SLOs, actionable alerts, and dashboards that tell the truth.
      </p>

      <p style={styles.text}>
        Beyond the pipelines, I value collaboration and mentorship—helping teams adopt good
        engineering hygiene, blameless postmortems, and runbooks. I’m pragmatic about tooling,
        strict about security, and relentless about reducing toil.
      </p>

      <p style={styles.text}>
        If you’re looking for someone who can make delivery safer, faster, and more visible,
        let’s connect and turn deployments into a routine, not an event.
      </p>
    </motion.section>
  )
}

const styles = {
  section: {
    padding: "90px 40px",
    maxWidth: "900px",
    margin: "auto"
  },
  text: {
    marginTop: "18px",
    fontSize: "16px",
    color: "#29406d",
    lineHeight: "1.7"
  },
  textMuted: {
    marginTop: "18px",
    fontSize: "15px",
    color: "#54647a",
    lineHeight: "1.7"
  }
}
