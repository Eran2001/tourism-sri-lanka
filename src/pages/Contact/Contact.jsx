import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
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
      .then(() => alert("Email sent!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-2"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="border p-2"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
