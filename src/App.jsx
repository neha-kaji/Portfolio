import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import AndroidStats from "./components/AndroidStats"
import AndroidNotice from "./components/AndroidNotice"
import About from "./components/About"
import Education from "./components/Education"
import Leadership from "./components/Leadership"
import DomainExperience from "./components/DomainExperience"
import Reveal from "./components/Reveal"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AndroidNotice />
      <Reveal delay={0.1}>
        <About />
      </Reveal>
      <Reveal delay={0.2}>
        <Education />
      </Reveal>
      <Reveal delay={0.3}>
        <Leadership />
      </Reveal>
      <Reveal delay={0.4}>
        <DomainExperience />
      </Reveal>
      <Reveal delay={0.5}>
        <Projects />
      </Reveal>
      <Reveal delay={0.6}>
        <AndroidStats />
      </Reveal>
      <Reveal delay={0.7}>
        <Skills />
      </Reveal>
      <Reveal delay={0.8}>
        <Footer />
      </Reveal>
    </>
  )
}
