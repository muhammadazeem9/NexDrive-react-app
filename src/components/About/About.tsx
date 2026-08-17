import Container from "../Container/Container";
import AboutImages from "./AboutImages";
import AboutContent from "./AboutContent";
import AboutFeatures from "./AboutFeatures";

const About = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AboutImages />

          <AboutContent />
        </div>
        <AboutFeatures />
      </Container>
    </section>
  );
};

export default About;
