import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Notification from "../ui/Notification";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <section className="py-10 bg-[#f9f5e3] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Brand and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <h2 className="text-[#5c3d2e] text-xl font-semibold">Tour</h2>
            <p className="text-base leading-relaxed text-gray-600 mt-4">
              Drop us a line or two, we are open for creative minds and
              collaborations!
            </p>
            <div className="mt-6">
              <Button
                text="Get Started"
                onClick={() => Notification.success("Hello")}
                className="px-6 py-3"
              />
            </div>
            <ul className="flex items-center space-x-3 mt-6">
              <li>
                <Icon
                  icon="facebook"
                  type="social"
                  size="w-5 h-5"
                  className="text-blue-600"
                />
              </li>
              <li>
                <Icon
                  icon="twitter"
                  type="social"
                  size="w-5 h-5"
                  className="text-blue-400"
                />
              </li>
              <li>
                <Icon
                  icon="instagram"
                  type="social"
                  size="w-5 h-5"
                  className="text-pink-600"
                />
              </li>
              <li>
                <Icon
                  icon="linkedin"
                  type="social"
                  size="w-5 h-5"
                  className="text-blue-700"
                />
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-base text-black hover:text-blue-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-base text-black hover:text-blue-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-black hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-base text-black hover:text-blue-600"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-base text-black hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-black hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <form action="#" method="POST" className="mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-600">
            © Copyright 2021, All Rights Reserved.
          </p>
          <ul className="flex gap-4 text-sm text-gray-600">
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
