import React from "react";

function CardImage({ title, goTo, image }) {
  return (
    <div className="flex w-fit h-fit hover:scale-105 duration-75 group border-[1px] rounded-sm shadow-xl">
      <a href={goTo} className="">
        <div>
          <img src={image} alt={title} className="w-48 p-3 group-hover:scale-105"/>
        </div>
        <div className="border-t-[1px] p-3 text-center">
          <h1>{title}</h1>
        </div>
      </a>
    </div>
  );
}

export default CardImage;
