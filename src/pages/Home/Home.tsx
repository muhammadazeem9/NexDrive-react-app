import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/newsletter";
import ProductSection from "../../components/ProductSection/ProductSection";
import SaleSection from "../../components/SaleSection/SaleSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SaleSection />
      <Banner />
      <ProductSection />
      <Newsletter />
    </>
  );
};

export default Home;
