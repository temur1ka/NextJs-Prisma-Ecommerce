"use client";
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
export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <nav className="">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="flex justify-end container">
          <button
            onClick={toggleOpen}
            className="md:hidden "
          >
            {open ? (
              <span className="text-3xl z-10 text-white">✕</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed top-0  w-full h-full bg-black opacity-50 z-10">
          <div className="fixed top-0 left-0 w-full h-full  z-30 text-white">
          <button
            onClick={toggleOpen}
            className="md:hidden flex justify-end container "
          >
            {open ? (
              <span className="text-3xl">✕</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>
            <ul className="flex flex-col justify-center gap-10">
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

              <li>
                <a href="/">Search</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">My Account</a>
              </li>
            </ul>
            <Badge>0</Badge>
          </div>
        </div>
      )}
    </>
  );
}
