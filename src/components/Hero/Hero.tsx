import Container from "../Container/Container";
import HeroSidebar from "./HeroSidebar";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <HeroSidebar />
          </div>

          <div className="lg:col-span-3">
            <HeroSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
