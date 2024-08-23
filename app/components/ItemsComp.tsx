import { getProducts } from "@/actions/actions";
import { Card, CardContent } from "@/components/ui/card";
import { RefButton } from "@/components/ui/refactorButton";
import Image from "next/image";

import React from "react";

const ItemsComp = async () => {
  const data = await getProducts();
  return (
    <div className="container">
      <h1 className="text-3xl mb-8">The Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div className="p-1" key={index}>
            <Image src={item.imageUrl} alt="image" width={400} height={300} />
            <div className="text-left p-5 flex flex-col gap-2 justify-center justify-self-center ">
              <h1 className="font-bold text-sm">{item.name}</h1>
              <p className="text-sm">
                {" "}
                <span className="text-[#F3C400]">Limited</span>
                {item.description}
              </p>
              <p className="text-sm">${item.price}</p>
              <RefButton variant={"link"} className="justify-start">
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
