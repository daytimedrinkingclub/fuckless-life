import React from "react";

function Mode({ image, title, description, bgColor, onClick }) {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-lg cursor-pointer transition-transform hover:scale-105 text-black text-center"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}

export default Mode;
