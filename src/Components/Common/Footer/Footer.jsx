import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-black p-2">
      <footer className="max-w-screen-xl mx-auto  text-white">
        <div className="grid lg:grid-cols-5  py-20">
          <div className="lg:col-span-2 mb-10 lg:mb-0">
            <Link to="/">
              <img className="w-36" src="/logo2.png" alt="logo" />
            </Link>
          </div>
          <div className="lg:col-span-3 grid md:grid-cols-3 lg:gap-14 font-semibold text-lg font-[Barlow]">
            <div className="flex flex-col gap-5">
              <h6 className="">About US</h6>
              <Link to="#" className="text-[#81859F] link link-hover">
                Master Plan
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Jobs
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Invest
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Pressroom
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Blog
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h6 className="mt-10 md:mt-0">Explore EEVE</h6>
              <Link to="#" className="text-[#81859F] link link-hover">
                Unlock my Robot Power
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Starlight
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Robot Platform
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                EEVE Roadmap
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h6 className="mt-10 md:mt-0">Community & Support</h6>
              <Link to="#" className="text-[#81859F] link link-hover">
                Willow X Community
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Developer & Maker Access
              </Link>
              <Link to="#" className="text-[#81859F] link link-hover">
                Special Cases{" "}
              </Link>
            </div>
          </div>
        </div>

        <hr />

        <div className="my-5">
          <div className="flex flex-col md:flex-row justify-between text-[#81859F] font-[Barlow] font-semibold">
            <div className="flex gap-2 my-10 md:my-0">
              <LuFacebook />
              <FaInstagram />
              <FaXTwitter />
              <SlSocialLinkedin />
            </div>
            <div className="text-[#81859F] font-[Barlow] font-semibold flex flex-col md:flex-row gap-4">
              <Link to="#" className=" link link-hover">
                March22 Recap
              </Link>
              <Link to="#" className=" link link-hover">
                Privacy Policy
              </Link>
              <Link to="#" className=" link link-hover">
                General Terms
              </Link>
              <Link to="#" className=" link link-hover">
                Contact
              </Link>
            </div>

            <div className="flex gap-2 my-10 md:my-0">
              <img className="w-6" src="/flag.png" alt="logo" />
              <p className="">United States (English)</p>
            </div>
          </div>

          <div className="text-[#81859f80] font-[Barlow] font-semibold my-4">
            <p className="text-center">EEVE © 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
