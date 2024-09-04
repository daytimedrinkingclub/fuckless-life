import { Link } from "react-router-dom";

function Mode({ image, title, description, bgColor, path, external }) {
  return (
    <Link
      to={path}
      target={external ? "_blank" : "_self"}
      className="flex flex-col items-center p-4 rounded-md cursor-pointer transition-all hover:brightness-75 text-black text-center no-underline"
    >
      <div className="w-full aspect-[4/3] mb-4 relative">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-[42px] border-[20px] border-solid border-black"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </Link>
  );
}

export default Mode;
