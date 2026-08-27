import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[var(--background)] py-12 text-[var(--foreground)] transition-colors duration-300 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-blue-500 uppercase">
            Contact Us
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Get In Touch</h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Have a question about our products or services? Send us a message
            and our team will be happy to help.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors duration-300 sm:p-8">
            <p className="text-sm font-medium tracking-wider text-blue-500 uppercase">
              Contact Information
            </p>

            <h2 className="mt-2 text-2xl font-semibold">We're Here To Help</h2>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Whether you need help choosing a product, have a question about an
              order, or simply want to learn more about us, feel free to reach
              out.
            </p>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-[var(--muted)]">Address</p>

                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                  <FaPhoneAlt className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-[var(--muted)]">Phone</p>

                  <a
                    href="tel:+923001234567"
                    className="mt-1 block text-sm font-medium text-[var(--foreground)] transition hover:text-blue-500"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                  <FaEnvelope className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-[var(--muted)]">Email</p>

                  <a
                    href="mailto:support@example.com"
                    className="mt-1 block text-sm font-medium text-[var(--foreground)] transition hover:text-blue-500"
                  >
                    support@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors duration-300 sm:p-8">
            <p className="text-sm font-medium tracking-wider text-blue-500 uppercase">
              Send a Message
            </p>

            <h2 className="mt-2 text-2xl font-semibold">How Can We Help?</h2>

            <form className="mt-7 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] transition-colors outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] transition-colors outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Your Message
                </label>

                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] transition-colors outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
