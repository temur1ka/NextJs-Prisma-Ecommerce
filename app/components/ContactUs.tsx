import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
// c9c5c574
const ContactUs = () => {
  return (
    <div className="mt-5 container justify-center items-center text-center p-28 bg-[#f7f3f374]">
      <div className="space-y-2">
        <h1 className="text-3xl">Contact Us</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-row gap-4 justify-center mt-3 ">
        <Input placeholder="Enter your email" className="w-[500px]" />
        <button type="submit" className="w-[100px] bg-[#F3C400] text-black py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
