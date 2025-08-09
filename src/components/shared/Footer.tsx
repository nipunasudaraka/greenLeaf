import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full max-w-7xl items-center lg:items-start  justify-center gap-4 px-20 ">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <Image
            src="/assets/footerLogo.png"
            alt="Footer Logo"
            width={100}
            height={100}
          />
          <p className="text-sm text-secondary-color font-inter text-center lg:text-start w-full max-w-44 ">
            Bring the beauty of nature to your doorstep
          </p>
        </div>

        {/* quick links */}
        <div className="flex flex-col justify-center items-center  gap-8">
          <h3 className="text-lg font-semibold text-primary-color font-playfairDisplay">
            Quick Links
          </h3>

          <ul className="flex flex-col justify-center items-center lg:items-start gap-3 text-secondary-color font-inter text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* categories */}
        <div className="flex flex-col justify-center items-center  gap-8">
          <h3 className="text-lg font-semibold text-primary-color font-playfairDisplay">
            Categories
          </h3>

          <ul className="flex flex-col justify-center items-center lg:items-start gap-3 text-secondary-color font-inter text-sm">
            <li>
              <Link href="/">Indoor Plants</Link>
            </li>
            <li>
              <Link href="/">Outdoor Plants</Link>
            </li>
            <li>
              <Link href="/">Succulents</Link>
            </li>
            <li>
              <Link href="/">Flowering Plants</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-start items-center  gap-8 ">
          <h3 className="text-lg font-semibold text-primary-color font-playfairDisplay">
            Follow Us
          </h3>
          <div className="flex  justify-center items-center lg:items-start gap-3 text-secondary-color ">
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mt-14 px-4 mx-auto">
        <div className="w-full h-px bg-secondary-color mb-8"></div>
        <p className="text-sm text-secondary-color font-inter text-center w-full max-w-7xl">
          © 2023 Green Leaf. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
