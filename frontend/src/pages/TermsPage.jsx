import { Link } from "react-router-dom";
import mascot from "../assets/guy2.svg";
import { useState } from "react";

function TermsPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-custom-yellow layout-height flex flex-col">
      <main className="flex-grow flex items-center p-8">
        <div className="max-w-2xl">
          <div className="p-4 rounded-lg mb-6">
            <h2 className="text-[26px] font-[800] leading-[32px] mb-2">
              Legal Stuff You&apos;ll Never Read.
            </h2>
            <p className="text-5 font-[800] leading-6">
              But if you&apos;re really that curious, here you go...
            </p>
            <ul className="text-sm mt-2 list-disc list-inside space-y-2">
              <li>
                We&apos;re here to help you live your best life, but please use
                the advice at your own discretion.
              </li>
              <li>
                We can change these terms whenever we feel like it. Check back
                often, or don&apos;t. We&apos;ll probably update it while
                you&apos;re not looking.
              </li>
              <li>
                Got questions? Email us—bas har detail samjhane ki expectations
                wagera mat rakhna.
              </li>
              <li>
                Hey, you&apos;re still reading? Bohot velle ho yaar (this
                website is totally made for you).
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center mb-4 sm:mb-0">
              <input
                type="checkbox"
                className="mr-2 accent-black"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="font-goblin">
                I get it, let&apos;s move onto the good stuff
              </span>
            </label>
            <Link
              to="/choose-mode"
              className={`inline-block bg-mybrown text-white px-8 py-3 rounded-full text-xl font-bold mt-4 sm:mt-0 transition-colors font-lexend-exa max-w-[150px] ${
                isChecked
                  ? "hover:bg-opacity-80"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={(e) => !isChecked && e.preventDefault()}
            >
              Go on
            </Link>
          </div>
        </div>
      </main>
      <img
        src={mascot}
        alt="Mascot"
        className="absolute bottom-0 right-0 w-1/3 h-auto"
      />
    </div>
  );
}

export default TermsPage;
