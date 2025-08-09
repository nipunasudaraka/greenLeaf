import Link from "next/link";
import Image from "next/image";
import ProfileButton from "./ProfileButton";
import { FiShoppingBag } from "react-icons/fi";
import { SideBar } from "./SideBar";
function Navbar() {
  return (
    <div className="w-full h-[50px] md:h-[70px] bg-background-color flex justify-between items-center px-4 md:px-32 lg:px-48 fixed top-0 z-50">
      <div>
        <Image
          src="/assets/greenleafLogo.png"
          alt="Logo"
          width={150}
          height={100}
          className="w-[100px] md:w-[150px] h-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center items-center gap-8 h-full text-lg font-medium font-playfairDisplay text-primary-color">
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

      <div className="flex justify-center items-center gap-4 md:gap-8">
        <FiShoppingBag className="text-xl" />
        <div className="hidden md:block">
          <ProfileButton />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
