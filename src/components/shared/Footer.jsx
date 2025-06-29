import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Notification from "../ui/Notification";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section: Your original text + Button */}
        <div className="max-w-[800px] mx-auto text-center mb-10">
          <h5 className="text-[#5c3d2e] leading-none text-[3rem] max-sm:text-[2rem]">
            Drop us a line or two, we are open for creative minds and
            collaborations!
          </h5>
          <div className="mt-6">
            <Button
              text="Get Started"
              onClick={() => Notification.success("Hello")}
              className="px-8 py-4 max-sm:px-6 max-sm:py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-9"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt="Logo"
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {/* Social icons here, same as before */}
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

          {/* Company links */}
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

          {/* Help links */}
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

        <div className="flex justify-around items-center max-sm:flex-col max-sm:w-[300px] max-sm:gap-4 sm:gap-14 md:gap-32 lg:gap-54 xl:gap-158 pt-8">
          <p className="max-sm:text-lg">
            © Copyright 2021, All Rights Reserved.
          </p>
          <ul className="flex justify-center max-sm:justify-around max-sm:mt-10 max-sm:w-[300px] items-center sm:gap-4 gap-8">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
