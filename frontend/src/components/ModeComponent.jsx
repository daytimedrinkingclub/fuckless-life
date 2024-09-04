import React from "react";

function Mode({ image, title, description, bgColor, onClick }) {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all hover:brightness-75 text-black text-center"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-lg mb-4 border-[10px] border-solid border-black"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}

export default Mode;
