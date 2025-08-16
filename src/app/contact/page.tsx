"use client";

import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact/ContactForm";
import SubHeadding from "@/components/shared/SubHeadding";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const MapIframe = dynamic(
  () =>
    Promise.resolve(() => (
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        title="Our Location"
        loading="lazy"
      />
    )),
  { ssr: false }
);

const Contact: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto w-full mt-8 lg:mt-14">
        {/* Left Side - Contact Form */}
        <div className="flex flex-col items-center justify-start w-full">
          <SubHeadding title="Get in Touch" />
          <p className="text-center font-inter text-secondary-color mb-5 text-sm">
            We&apos;d love to hear from you. Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>

        {/* Right Side - Google Map and Contact Info */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Responsive Map */}
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-md"
            style={{ paddingTop: "56.25%" }}
          >
            {/* 16:9 Aspect Ratio */}
            <MapIframe />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col w-full gap-4 py-10">
            <div className="flex items-center gap-5">
              <IoLocationSharp className="text-lg text-secondary-color" />
              <p className="text-secondary-color font-inter">
                1 Grafton Street, Dublin, Ireland
              </p>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-lg text-secondary-color" />
              <Link
                href="tel:+9476123456677"
                className="text-xs lg:text-base text-secondary-color font-inter hover:text-primary-color transition-colors duration-300"
              >
                +94 76 123456677
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <IoMdMail className="text-lg text-secondary-color" />
              <Link
                href="mailto:greenleafinfo@gmail.com"
                className="text-xs lg:text-base text-secondary-color font-inter hover:text-primary-color transition-colors duration-300"
              >
                greenleafinfo@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
