import { Link } from "react-router-dom";
import mascot from "../assets/mascot.svg";

function LandingPage() {
  return (
    <div className="bg-custom-yellow layout-height flex flex-col">
      <main className="flex-grow flex items-center sm:ml-10 p-8">
        <div className="max-w-2xl">
          <p className="text-[20px] leading-[25px] mb-4 lexend-deca-800">
            YOU&apos;VE GOT 99 PROBLEMS.
            <br />
            HERE&apos;S HOW TO GIVE ZERO FUCKS.
          </p>
          <p className="md:text-5xl text-3xl mb-6 font-goblin">
            Welcome To The
            <br />
            <span className="text-red-600">FUCKLESS</span>
            <br />
            Life
          </p>
          <Link
            to="/terms"
            className="inline-block bg-mybrown text-white px-8 py-3 rounded-full text-lg font-bold mt-4 hover:bg-opacity-80 transition-colors font-lexend-exa"
          >
            FUCK IT
          </Link>
        </div>
      </main>
      <img
        src={mascot}
        alt="Mascot"
        className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 h-auto"
      />
    </div>
  );
}

export default LandingPage;
