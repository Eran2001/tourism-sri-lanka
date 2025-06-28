import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Notification from "../ui/Notification";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <>
      <footer className="min-h-[60vh] text-center flex flex-col items-center justify-between py-16 xl:mt-[100px] max-xl:mt-[80px] max-md:mt-[650px] max-sm:mt-[800px]">
        <div className="max-w-[800px] text-center max-sm:w-[380px] sm:w-[500px] md:w-[800px]">
          <h5 className="text-[#5c3d2e] leading-none text-[3rem] max-sm:text-[2rem]">
            Drop us a line or two, we are open for creative minds and
            collaborations!
          </h5>
        </div>
        <div className="mb-10 mt-4 sm:mt-6 max-sm:mt-8">
          <Button
            text="Get Started"
            onClick={() => Notification.success("Hello")}
            className="px-8 py-4 max-sm:px-6 max-sm:py-2"
          />
        </div>
        <div className="flex justify-around items-center xl:mb-4 lg:mb-4 md:mb-4 sm:mb-4 max-sm:w-[300px] max-sm:flex-col max-sm:gap-[20px] sm:gap-[140px] md:gap-[100px] lg:gap-[140px] xl:gap-78">
          <h1 className="sm:hidden md:block">Tour</h1>
          <ul className="flex justify-center max-sm:justify-between items-center max-sm:w-[358px] gap-8 relative md:left-[45px] lg:left-[40px] xl:left-[80px]">
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Gallery</li>
          </ul>
          <ul className="flex justify-center max-sm:justify-between items-center max-sm:w-[200px] gap-6 lg:gap-6 xl:gap-8">
            <li>
              <Icon
                icon="facebook"
                size="xl:w-6 xl:h-6 md:w-4 md:h-4 max-sm:w-6 max-sm:h-6"
                type="social"
                className="text-blue-600"
              />
            </li>
            <li>
              <Icon
                icon="twitter"
                size="xl:w-6 xl:h-6 md:w-4 md:h-4 max-sm:w-6 max-sm:h-6"
                type="social"
                className="text-blue-400"
              />
            </li>
            <li>
              <Icon
                icon="instagram"
                size="xl:w-6 xl:h-6 md:w-4 md:h-4 max-sm:w-6 max-sm:h-6"
                type="social"
                className="text-pink-600"
              />
            </li>
            <li>
              <Icon
                icon="linkedin"
                size="xl:w-6 xl:h-6 md:w-4 md:h-4 max-sm:w-6 max-sm:h-6"
                type="social"
                className="text-blue-700"
              />
            </li>
          </ul>
        </div>
        <div className="flex justify-around items-center max-sm:flex-col max-sm:w-[300px] max-sm:gap-4 sm:gap-14 md:gap-32 lg:gap-54 xl:gap-158 max-sm:border-hidden border-t-1 pt-8 border-[#5c3d2e]">
          <p className="max-sm:text-lg">
            © Copyright 2021, All Rights Reserved.
          </p>
          <ul className="flex justify-center max-sm:justify-around max-sm:mt-10 max-sm:w-[300px] items-center sm:gap-4 gap-8">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
