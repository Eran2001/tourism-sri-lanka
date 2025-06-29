import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/ui/Button";
import Notification from "../../components/ui/Notification";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .Notification.success("✅We got your message, we'll connect with you!")
      .Notification.error((err) => console.error(err));
  };

  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24 mt-20">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl lg:text-5xl">
            Connect with Us
          </h2>
          <p className="mt-4 text-lg text-[#5c3d2e]">
            We’d love to hear from you. Contact us through WhatsApp or email us
            using the form below.
          </p>
        </div>

        {/* WhatsApp Section */}
        <div className="mt-12 bg-gray-50 p-6 text-center">
          <h3 className="text-2xl font-semibold text-green-600">
            📞 Chat on WhatsApp
          </h3>
          <p className="mt-2 text-gray-700">
            Need quick help? Message us anytime.
          </p>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg transition duration-200"
          >
            Message Us on WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="my-12">
          <svg
            className="w-auto h-4 mx-auto text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
            />
            <line
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
            />
          </svg>
        </div>

        {/* Email Form */}
        <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Send Us an Email
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your message..."
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <Button
                text="Rent Now"
                type="submit"
                onClick={() => "✅We got your message, we'll connect with you!"}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 bg-[#006D5B]"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
