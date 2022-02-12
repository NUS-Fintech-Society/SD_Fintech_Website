import Example from '../../components/Example'
import FAQ from '../../components/FAQ'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import Chart from '../../components/Chart'
import OurTeams from '../../components/OurTeams'
import Credits from '../../components/Credits'
import ContactUs from '../../components/ContactUs'

const Home = () => (
  <Layout>
    <Hero />
    <Example />
    <Chart />
    <OurTeams />
    <FAQ />
    <Credits />
    <ContactUs />
  </Layout>
)

export default Home
