/* archivo Card.jsx en carpeta components */
import React from "react";
import { BsStarFill } from "react-icons/bs";

function Card({ title, photo, rating, type, beds }) {
  return (
    <>
      <div className="relative">
      {/* Image */}
      <div>
        <img
          src={photo}
          alt=""
          className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[13rem] w-full"
        />
      </div>
      {/* Texto */}
      <div className="bottom-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <p className="">{type}   </p>
          <p>   Beds:{beds}</p>
          <div className="flex align-middle">
          <BsStarFill className="align-middle text-orange-400" />
          <p className="text-grey text-[14px]">{rating}</p>
          </div>
        </div>
        <div className="text-black font-bold ff:Montserrat">{title}</div>
      </div>
    </div>
    </>
  );
}

export default Card;
