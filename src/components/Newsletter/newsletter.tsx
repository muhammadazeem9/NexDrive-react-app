import Container from "../Container/Container";
import NewsletterForm from "./NewsletterForm";
import { newsletter } from "./newsletterData";

const Newsletter = () => {
  return (
    <section
      className="
    relative
    py-12 md:py-24
    bg-[url('/images/newsletter/newsletter.png')]
    bg-cover
    bg-center
    sm:bg-cover 
    my-32
  "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Container>
        <div className="flex justify-center items-center">
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-4xl font-bold">{newsletter.title}</h2>

            <p className="mt-4 text-gray-200 leading-7">
              {newsletter.description}
            </p>

            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
