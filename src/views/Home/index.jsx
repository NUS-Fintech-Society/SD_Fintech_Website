import Layout from '../../components/Layout'
import Hero from './Hero'
import About from './About'
import Chart from './Chart'
import OurTeams from './OurTeams'
import FAQ from './FAQ'
import Credits from './Credits'
import ContactUs from './ContactUs'
import { Fade } from 'react-awesome-reveal'

const Home = () => (
  <Layout>
    <Hero />
    <Fade>
      <About />
    </Fade>
    <Fade>
      <Chart />
    </Fade>
    <Fade>
      <OurTeams />
    </Fade>
    <Fade>
      <FAQ />
    </Fade>
    <Fade>
      <Credits />
    </Fade>
    <Fade>
      <ContactUs />
    </Fade>
  </Layout>
)

export default Home
