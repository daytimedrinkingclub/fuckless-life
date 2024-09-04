import Mode from "../components/ModeComponent";
import confessionBoothImage from "../assets/mode-images/pray.svg";
import fucklessChallengesImage from "../assets/mode-images/fly.svg";
import blogsImage from "../assets/mode-images/talk.svg";

function ChooseMode() {
  const modes = [
    {
      image: confessionBoothImage,
      title: "Confession Booth",
      description:
        "post notes about what you’ve stopped caring about and let the world know you’re living fuckless.",
      bgColor: "#B19532",
      path: "/confession-booth",
    },
    {
      image: fucklessChallengesImage,
      title: "Fuckless Challenges",
      description:
        "Kursi ki peti baandh lijiye and master the art of letting go, one small step at a time.",
      bgColor: "#D2AB21", // Gold color
      path: "/fuckless-challenges",
    },
    {
      image: blogsImage,
      title: "Blogs",
      description:
        "Free ka gyan hai, lelo (not affiliated with Cal Newport or Naval Ravikant)",
      bgColor: "#DEC879", // Gold color
      path: "https://x.com/NeelSeth7",
      external: true,
    },
  ];

  return (
    <div className="flex layout-height justify-center items-center bg-custom-yellow">
      <main className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {modes.map((mode, index) => (
            <Mode key={index} {...mode} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ChooseMode;
