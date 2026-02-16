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
    background: "#0b1220",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    color: "#cbd5e1"
  }
}
