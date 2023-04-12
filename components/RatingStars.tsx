import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function RatingStars() {
  const [showTitle, setShowTitle] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = ["خیلی بد", "بد", "متوسط", "خوب", "عالی"];

  const handleMouseEnter = (index: number) => {
    setHover(index);
    setShowTitle(true);
  };

  const handleMouseLeave = (rating: number) => {
    setHover(rating);
    setShowTitle(false);
  };

  return (
    <div className="flex items-center">
      {stars.map((star, index) => {
        index += 1;
        return (
          <div className="relative">
            <AiFillStar
              size={30}
              key={index}
              className={`${
                index <= hover
                  ? "text-yellow-400"
                  : "text-slate-400 dark:text-slate-100"
              } w-5 h-5 cursor-pointer hover:scale-125 transitio-all duration-100 active:scale-105`}
              onClick={() => setRating(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(rating)}
            />

            {showTitle && index === hover && (
              <span className="absolute text-xs px-1 py-0.5 text-amber-900 bg-yellow-300 rounded-lg min-w-max top-8">
                {star}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
