import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar";
import Hero from "./sections/heroSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Yacht Hire Dubai | Memoría Yachts</title>
      </Helmet>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
