

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({
  hospitalName,
  imgSrc,
  onCompare,
}: {
  hospitalName: string;
  imgSrc: string;
  onCompare?: Function;
}) {
  const [readable, setReadable] = useState(false);
  const [value, setValue] = useState(5);
  return (
    <InteractiveCard contentName={hospitalName}>
      <div className="w-full h-[65%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="product picture"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg transition transform hover:-translate-y-1 duration-150 ease"
        />
      </div>
      <div className="w-full h-[15%] p-[10px]  hover:text-indigo-300">
        {hospitalName}
      </div>
      {/* {
        onCompare?
        <div className="justify-col align-center block flex px-2">
        <Rating
          name={`${hospitalName} Rating`}
          id={`${hospitalName} Rating`}
          defaultValue={5}
          value={value}
          precision={0.5}
          readOnly={readable}
          data-testid={`${hospitalName} Rating`}
          onChange={(event, newValue) => {
            setValue(newValue || 0);
            onCompare(hospitalName, newValue);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        </div> : ''
      } */}
  
    </InteractiveCard>
  );
}
