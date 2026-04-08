import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar";
import Hero from "./sections/heroSection";
import About from "./sections/aboutSection";
import PopularYachts from "./sections/popularYachts";
import Experiences from "./sections/experiences";
import Stats from "./sections/statSection";
import Destination from "./sections/destinationSection";
import Testimonials from "./sections/testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Yacht Hire Dubai | Memoría Yachts</title>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <PopularYachts />
      <Experiences />
      <Stats />
      <Destination />
      <Testimonials />
    </>
  );
};

export default Home;
