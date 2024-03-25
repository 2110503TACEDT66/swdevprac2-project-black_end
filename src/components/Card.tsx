

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({
  companyName,
  imgSrc,
  onCompare,
}: {
  companyName: string;
  imgSrc: string;
  onCompare?: Function;
}) {

  return (
    <div className="mx-2 my-5">
    <InteractiveCard contentName={companyName}>
      <div className="w-full h-[65%] relative rounded-t-lg m-5">
        <Image
          src={imgSrc}
          alt="product picture"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg transition transform hover:-translate-y-1 duration-150 ease"
        />
      </div>
      <div className="w-full h-[15%] p-[10px]  hover:text-indigo-300">
        {companyName}
      </div>
      {/* {
        onCompare?
        <div className="justify-col align-center block flex px-2">
        <Rating
          name={`${companyName} Rating`}
          id={`${companyName} Rating`}
          defaultValue={5}
          value={value}
          precision={0.5}
          readOnly={readable}
          data-testid={`${companyName} Rating`}
          onChange={(event, newValue) => {
            setValue(newValue || 0);
            onCompare(companyName, newValue);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        </div> : ''
      } */}
  
    </InteractiveCard>
    </div>
  );
}
