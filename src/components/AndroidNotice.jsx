export default function AndroidNotice() {
  return (
    <section style={styles.notice}>
      <strong>Android Install Notice</strong>
      <p>
        APK files are provided for demo purposes.  
        After downloading, enable <b>“Install unknown apps”</b> when prompted.
      </p>
    </section>
  )
}

const styles = {
  notice: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "16px 20px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    color: "#29406d"
  }
}
