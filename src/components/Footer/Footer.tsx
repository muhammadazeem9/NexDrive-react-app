import { Link } from "react-router-dom";

import Container from "../Container/Container";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";

import { quickLinks, services, contactInfo } from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-[var(--card)] pt-16 text-[var(--muted)] transition-colors duration-300">
      <Container>
        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              NexDrive
            </h2>

            <p className="mt-5 leading-7">
              Premium muscle cars, genuine spare parts, and expert maintenance
              services.
            </p>

            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="transition-colors hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--border)] py-6 text-center text-sm">
          © 2026 NexDrive Muscle Store. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
