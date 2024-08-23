import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { RefButton } from "@/components/ui/refactorButton";
import { getProducts } from "@/actions/actions";
import Satesto from '../satesto/page';

const CardInfos = [
  {
    id: 1,
    title: "Elegants Only",
    description: "Evolving the classics",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a12a1e20-18d2-480e-bb30-85a4c213a161/AIR+FORCE+1+%2707+LV8+1.png",
  },
  {
    id:2,
    title: "With European Standard",
    description: "Adapting to the evolving world",
    image:
      "https://www.etq-amsterdam.com/cdn/shop/articles/IMG_0061_crob_400x.png?v=1712747598",
  },
  {
    id:3,
    title: "Comfortable & Durable",
    description: "Keeping you warm and confident",
    image:
      "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const MiddleComp = () => {
  return (
    <div className="my-16 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CardInfos.map((info) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3  ">
          <Image
            src={info.image}
            alt="image"
            width={550}
            height={400}
            className=""
            key={info.id}
          />
          <div className="md:text-left p-5 flex flex-col gap-2 md:justify-center md:justify-self-center justify-self-start  ">
            <h1 className="font-bold text-sm">{info.title}</h1>
            <p className="text-sm">{info.description}</p>
            <RefButton variant={"link"} className=" justify-start">Read More</RefButton>

          </div>

        </div>
      ))}
    </div>
  );
};


export default MiddleComp;
