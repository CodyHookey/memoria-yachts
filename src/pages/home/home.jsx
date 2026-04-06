import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar";
import Hero from "./sections/heroSection";
import About from "./sections/aboutSection";
import PopularYachts from "./sections/popularYachts";

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
    </>
  );
};

export default Home;
