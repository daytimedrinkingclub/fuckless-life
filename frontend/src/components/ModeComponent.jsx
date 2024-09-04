import { Link } from "react-router-dom";

function Mode({ image, title, description, bgColor, path }) {
  return (
    <Link
      to={path}
      className="flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all hover:brightness-75 text-black text-center no-underline"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-[30px] mb-4 border-[20px] border-solid border-black"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </Link>
  );
}

export default Mode;
