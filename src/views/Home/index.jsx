import FAQ from '../../components/FAQ'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import Chart from '../../components/Chart'
import OurTeams from '../../components/OurTeams'
import Credits from '../../components/Credits'
import ContactUs from '../../components/ContactUs'
import About from '../../components/About'

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Chart />
    <OurTeams />
    <FAQ />
    <Credits />
    <ContactUs />
  </Layout>
)

export default Home
