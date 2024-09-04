import React, { useState } from "react";
import { Share } from "lucide-react";
import fortuneMessageSvg from "../assets/fortune-message.svg";

const StartChallenge = ({ onStartChallenge }) => (
  <div className="max-w-lg mx-auto">
    <div className="px-4 py-6 rounded-xl bg-[#B19532] text-center">
      <h1 className="text-[#CC1B1B] text-[22px] leading-[30px] mb-4 font-goblin">
        Crack Open Your Challenge!
      </h1>

      <p className="text-[#000000] text-[18px] leading-[24px] font-lexend-exa mb-4">
        Go ahead, crack it open. We promise it's better than your usual fortune.
      </p>
      <button
        className="inline-block bg-mybrown text-white px-4 py-2 rounded-full font-bold mt-4 hover:bg-opacity-80 transition-colors font-lexend-exa"
        onClick={onStartChallenge}
      >
        Break a cookie
      </button>
    </div>
  </div>
);

const ViewChallenge = ({ text }) => (
  <div className="container">
    <div
      className="relative w-full max-w-md mx-auto rounded-xl"
      style={{ background: "#B19532" }}
    >
      <img
        src={fortuneMessageSvg}
        alt="Fortune Message"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="transform rotate-[-7deg] mb-2 ml-1">{text}</p>
      </div>
      <button
        className="absolute top-2 right-2 rounded-full p-2"
        onClick={() => {
          if (navigator.share) {
            navigator
              .share({
                title: "Fuckless Challenge",
                text: `My Fuckless Challenge: ${text}`,
                url: window.location.href,
              })
              .then(() => console.log("Successful share"))
              .catch((error) => console.log("Error sharing:", error));
          } else {
            alert("Share functionality not supported on this browser");
          }
        }}
      >
        <Share color="white" />
      </button>
    </div>
  </div>
);

const challengeTexts = [
  "Go on a Solo Trip",
  "Learn a New Language",
  "Try a New Cuisine",
  "Start a Daily Meditation Practice",
  "Write a Short Story",
  "Take a Dance Class",
  "Volunteer for a Local Charity",
  "Start a Blog",
  "Learn to Play an Instrument",
  "Go Skydiving",
  "Run a Marathon",
  "Start a Garden",
  "Learn to Code",
  "Go on a Digital Detox for a Week",
  "Try Stand-up Comedy",
  "Learn to Paint",
  "Start a Podcast",
  "Go Camping Alone",
  "Write a Song",
  "Learn to Surf",
];

function FucklessChallenges() {
  const [showChallenge, setShowChallenge] = useState(false);
  const [challengeText, setChallengeText] = useState("");

  const handleStartChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challengeTexts.length);
    setChallengeText(challengeTexts[randomIndex]);
    setShowChallenge(true);
  };

  return (
    <div
      className="flex layout-height w-100 justify-center items-center bg-custom-yellow"
      style={{
        backgroundImage: "url('/src/assets/fortune-cookie-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!showChallenge ? (
        <StartChallenge onStartChallenge={handleStartChallenge} />
      ) : (
        <ViewChallenge text={challengeText} />
      )}
    </div>
  );
}

export default FucklessChallenges;
