import Container from "../Container/Container";
import AboutImages from "./AboutImages";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AboutImages />

          <AboutContent />
        </div>
      </Container>
    </section>
  );
};

export default About;
