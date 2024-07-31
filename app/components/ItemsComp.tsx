import { Card, CardContent } from "@/components/ui/card";
import { RefButton } from "@/components/ui/refactorButton";
import Image from "next/image";

import React from "react";

const items = [
  {
    title: "Air Force 1 '07",
    description: " Edition",
    price: "$250",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d752b32-17e8-40bc-ac1a-7a8849957a12/W+AIR+FORCE+1+%2707.png",
  },
  {
    title: "Air Force 1 '07 LV8",
    description: " Edition",
    price: "$250",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74a0861b-33dd-4b60-a055-3a618e3ef441/AIR+FORCE+1+%2707+LV8.png",
  },
  {
    title: "Air Force 1 '07 LX",
    description: " Edition",
    price: "$250",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29d20f5d-b234-4295-bf44-03a45908ab53/WMNS+AIR+FORCE+1+%2707+LX.png",
  },
];
const ItemsComp = () => {
  return (
    <div className="container">
      <h1 className="text-3xl mb-8">The Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div className="p-1" key={index}>
            <Image src={item.image} alt="image" width={400} height={300} />
            <div className="text-left p-5 flex flex-col gap-2 justify-center justify-self-center ">
              <h1 className="font-bold text-sm">{item.title}</h1>
              <p className="text-sm">
                {" "}
                <span className="text-[#F3C400]">Limited</span>
                {item.description}
              </p>
              <p className="text-sm">{item.price}</p>
              <RefButton variant={"link"} className=" justify-start">
                Buy Now
              </RefButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsComp;
