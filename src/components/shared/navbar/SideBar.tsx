import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary-color">
          <RxHamburgerMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col justify-center items-center gap-8 h-full text-lg font-medium font-playfairDisplay text-primary-color">
          <li>
            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/shop">Shop</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/about">About</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/contact">Contact</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/profile">Profile</Link>
            </SheetClose>
          </li>
          <SheetClose asChild>
            <Button
              type="submit"
              variant="destructive"
              className="bg-primary-color"
            >
              Logout
            </Button>
          </SheetClose>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export { SideBar };
