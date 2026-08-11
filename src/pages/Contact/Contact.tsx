const ContactPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-2xl font-semibold">Get In Touch</h2>

          <p className="mt-4 text-gray-600">
            Have questions or need help? Feel free to contact us. Our team will
            be happy to assist you.
          </p>

          <div className="mt-6 space-y-3">
            <p>📍 Address: Lahore, Pakistan</p>

            <p>📞 Phone: +92 300 1234567</p>

            <p>✉️ Email: support@example.com</p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="
              w-full
              border
              p-3
              rounded-lg
            "
          />

          <button
            type="submit"
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
