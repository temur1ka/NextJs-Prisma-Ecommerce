import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeaderPage = () => {
  return (
    <div className="my-4 container grid md:grid-cols-2 grid-cols-1 justify-items-center ">
      <div className="col-span-1 ">
        <Image
          src="https://images.unsplash.com/photo-1630396800502-7d5b966dc5d5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          width={700}
          height={100}
          className="h-[640px] relative"
        />
      </div>
      <div className="justify-center content-center items-center max-w-[340px]">
        <h1 className="text-4xl font-bold leading-tight mb-5 text-gray-900  ">
          Start and end your day with the <span className="text-[#F3C400]">latest</span> trends.
        </h1>
        <p className="text-lg mb-5 text-gray-600">
          Discover the latest trends and fashions from around the world.
        </p>
        <Button>Shop now</Button>
      </div>
    </div>
  );
};

export default HeaderPage;
