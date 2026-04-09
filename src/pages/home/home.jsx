import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar";
import Hero from "./sections/heroSection";
import About from "./sections/aboutSection";
import PopularYachts from "./sections/popularYachts";
import Experiences from "./sections/experiences";
import Stats from "./sections/statSection";
import Destination from "./sections/destinationSection";
import Testimonials from "./sections/testimonials";
import CallToAction from "./sections/callToAction";
import FAQ from "./sections/faq";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Yacht Charter | Memoría Yachts</title>

        <meta
          name="description"
          content="Discover bespoke luxury yacht charters with Memoría Yachts. Explore exceptional vessels, curated destinations, and seamless experiences at sea."
        />

        <meta
          property="og:title"
          content="Luxury Yacht Charter | Memoría Yachts"
        />
        <meta
          property="og:description"
          content="Experience refined yachting with bespoke charters, world-class yachts, and curated journeys across the globe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://memoria-yachts.netlify.app/memoria-logo.png"
        ></meta>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <PopularYachts />
      <Experiences />
      <Stats />
      <Destination />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
