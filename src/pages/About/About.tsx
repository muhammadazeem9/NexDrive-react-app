import { FaCheckCircle, FaHeadset, FaShieldAlt, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#050d16] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-blue-500 uppercase">
            About Us
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Driving Quality & Performance
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            We're passionate about bringing premium automotive products,
            reliable service, and an exceptional experience to every customer.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#0d1722] p-6 sm:p-8">
          <div className="space-y-5 leading-7 text-gray-400">
            <p>
              Welcome to our store. We are dedicated to providing high-quality
              automotive products at competitive prices while creating a smooth
              and enjoyable shopping experience.
            </p>

            <p>
              Our goal is to bring you carefully selected products from trusted
              brands while focusing on quality, reliability, and customer
              satisfaction.
            </p>

            <p>
              We believe shopping for automotive products should be simple,
              secure, and convenient. That's why we continuously improve our
              services to provide you with a better experience.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Quality */}
          <div className="rounded-xl border border-white/10 bg-[#0d1722] p-6 transition hover:border-blue-500/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10">
              <FaShieldAlt className="text-xl text-blue-500" />
            </div>

            <h2 className="mt-5 text-lg font-semibold">Quality Products</h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              We focus on offering reliable and premium automotive products that
              meet high quality standards.
            </p>
          </div>

          {/* Customer */}
          <div className="rounded-xl border border-white/10 bg-[#0d1722] p-6 transition hover:border-blue-500/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10">
              <FaCheckCircle className="text-xl text-blue-500" />
            </div>

            <h2 className="mt-5 text-lg font-semibold">Customer First</h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Your satisfaction is our priority. We aim to make every
              interaction simple and reliable.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-xl border border-white/10 bg-[#0d1722] p-6 transition hover:border-blue-500/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10">
              <FaTools className="text-xl text-blue-500" />
            </div>

            <h2 className="mt-5 text-lg font-semibold">Expert Service</h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Our team is committed to providing professional service and
              support for all your automotive needs.
            </p>
          </div>
        </div>

        {/* Bottom Support */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-blue-500/20 bg-blue-600/5 p-5 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600/10">
              <FaHeadset className="text-xl text-blue-500" />
            </div>

            <div>
              <h3 className="font-semibold">Need Help?</h3>

              <p className="mt-1 text-sm text-gray-500">
                Our support team is ready to assist you.
              </p>
            </div>
          </div>

          <Link to={"/contact"}>
            <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
