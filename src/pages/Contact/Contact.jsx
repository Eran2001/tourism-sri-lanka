import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser";

import Button from "@/components/ui/Button";
import Notification from "@/components/ui/Notification";
import Loading from "@/components/ui/Loading";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          Notification.success(
            "✅ We got your message, we'll connect with you!"
          );
          form.current.reset();
        },
        (err) => {
          Notification.error("❌ Failed to send message. Please try again.");
          console.error(err);
        }
      );
  };

  useEffect(() => {
    document.title = "Drive Lanka | Contact Us";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-1 mt-27">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        {/* <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h1 className="text-5xl font-bold text-[#5c3d2e] mb-4">
            Connect with Drive Lanka
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We’re here to help you plan your perfect journey. Reach out via
            WhatsApp or email, and our team will get back to you promptly.
          </p>
        </section> */}

        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Connect with Drive Lanka
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We’re here to help you plan your perfect journey. Reach out via
            WhatsApp or email, and our team will get back to you promptly.
          </p>
        </section>

        {/* WhatsApp Contact */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            Instant Support via WhatsApp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Quick Assistance
              </h3>
              <p className="text-gray-600 mb-4">
                Message us anytime for immediate help with bookings or
                inquiries.
              </p>
              {/* <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f4d35e] text-[#5c3d2e] font-bold py-2 px-4 rounded-full hover:bg-[#e0c250] transition"
              >
                Message on WhatsApp
              </a> */}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Message"
                  className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
                />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                24/7 Availability
              </h3>
              <p className="text-gray-600 mb-4">
                Our team is always ready to assist, day or night, to ensure your
                travel plans go smoothly.
              </p>
              {/* <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f4d35e] text-[#5c3d2e] font-bold py-2 px-4 rounded-full hover:bg-[#e0c250] transition"
              >
                Chat Now
              </a> */}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Chat Now"
                  className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
                />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Personalized Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get tailored advice for your travel needs directly through
                WhatsApp.
              </p>
              {/* <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f4d35e] text-[#5c3d2e] font-bold py-2 px-4 rounded-full hover:bg-[#e0c250] transition"
              >
                Contact Us
              </a> */}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Contact Us"
                  className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Email Form */}
        <section className="py-16 bg-[#5c3d2e] text-white rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Send Us an Email
          </h2>
          <div className="max-w-3xl mx-auto">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#f4d35e] bg-gray-100 text-[#5c3d2e]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#f4d35e] bg-gray-100 text-[#5c3d2e]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message..."
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#f4d35e] bg-gray-100 text-[#5c3d2e]"
                ></textarea>
              </div>
              <div className="text-center">
                <Button
                  text="Send Message"
                  type="submit"
                  className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
                />
              </div>
            </form>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your vehicle today and explore Sri Lanka with Drive Lanka.
          </p>
          <Button
            text="Choose Your Vehicle"
            onClick={() => navigate("/rent-vehicles")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default Contact;
