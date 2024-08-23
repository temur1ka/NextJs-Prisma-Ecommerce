import { Badge } from "@/components/ui/badge";
import React from "react";

const Navbar = () => {
  return (
    <header className="mx-2 my-2 sticky py-4 border border-gray-400  ">
      <nav className="container mx-auto grid grid-cols-2 gap-[100px]">
        <ul className="flex justify-start gap-10">
          <li>
            <a href="/" className="font-bold text-2xl">
              EcomPrisma™.
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <ul className="flex justify-end gap-10">
          <li>
            <a href="/">Search</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">My Account</a>
          </li>
          <Badge>0</Badge>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
