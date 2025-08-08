"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileButton from "./ProfileButton";
import { FiShoppingBag } from "react-icons/fi";
function Navbar() {
  return (
    <div className="w-full h-[70px] bg-background-color flex justify-between items-center px-32 fixed top-0 z-50 ">
      <div>
        <Image
          src="/assets/greenleafLogo.png"
          alt="Logo"
          width={150}
          height={100}
        />
      </div>

      <ul className="flex justify-center items-center gap-8 h-full text-lg font-medium font-playfairDisplay text-primary-color">
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

      <div className="flex justify-center items-center gap-8 ">
        <FiShoppingBag className="text-xl" />
        <ProfileButton />
      </div>
    </div>
  );
}

export default Navbar;
