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
        They say 'there’s an app for that,' but I’m the person who makes sure those apps actually 
        work—and work beautifully. As a Mobile Engineer with a passion for end-to-end delivery, 
        I take pride in seeing a project through from the first line of the manifest to the final production
        release.

      </p>

      <p style={styles.text}>
        My toolkit is built on Android, Flutter, and Firebase, 
        but my real strength is my 'Full Lifecycle' perspective. 
        I enjoy the challenge of integrating complex APIs and real-time 
        data flows into interfaces that feel intuitive and responsive. 
        I’m obsessed with performance—if it’s not snappy, it’s not finished!
      </p>

      <p style={styles.text}>
        Beyond the Code:
        Community & Mentorship: I don’t keep my knowledge in a silo. I’m an active voice in developer circles and love helping juniors navigate the ever-changing mobile landscape.
     </p>
        <p style={styles.text}>
            Ownership: I treat every project like it’s my own startup. I’m not just building a feature; I’m building a tool that solves a human problem.
      </p>

      <p style={styles.text}>
        If you’re looking for a Mobile Engineer who combines technical expertise with a 
        holistic view of product development, let’s connect. 
        Together, we can build mobile experiences that don’t just meet expectations—they exceed them.
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
