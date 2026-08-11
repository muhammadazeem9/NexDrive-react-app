const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center">About Us</h1>

      <div className="mt-8 text-gray-600 space-y-5">
        <p>
          Welcome to our store. We are dedicated to providing high-quality
          products at affordable prices with a smooth and enjoyable shopping
          experience.
        </p>

        <p>
          Our goal is to bring you carefully selected products from trusted
          brands while focusing on quality, reliability, and customer
          satisfaction.
        </p>

        <p>
          We believe online shopping should be simple, secure, and convenient.
          That's why we continuously improve our services to serve our customers
          better.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 rounded-lg shadow bg-white">
          <h2 className="text-xl font-bold">Quality Products</h2>
          <p className="mt-2 text-gray-500">
            We focus on offering reliable and premium products.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white">
          <h2 className="text-xl font-bold">Customer First</h2>
          <p className="mt-2 text-gray-500">
            Your satisfaction is our biggest priority.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-white">
          <h2 className="text-xl font-bold">Fast Service</h2>
          <p className="mt-2 text-gray-500">
            We aim to provide a smooth shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
