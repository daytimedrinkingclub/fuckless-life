import Mode from '../components/ModeComponent';
import confessionBoothImage from '../assets/mode-images/pray.svg';
import fucklessChallengesImage from '../assets/mode-images/fly.svg';
import blogsImage from '../assets/mode-images/talk.svg';

function ChooseMode() {
  const modes = [
    {
      image: confessionBoothImage,
      title: "Confession Booth",
      description: "post notes about what you’ve stopped caring about and let the world know you’re living fuckless.",
      bgColor: "#B19532",
      onClick: () => console.log("Confession Booth clicked")
    },
    {
      image: fucklessChallengesImage,
      title: "Fuckless Challenges",
      description: "Kursi ki peti baandh lijiye and master the art of letting go, one small step at a time.",
      bgColor: "#D2AB21", // Gold color
      onClick: () => console.log("Fuckless Challenges clicked")
    },
    {
      image: blogsImage,
      title: "Blogs",
      description: "Free ka gyan hai, lelo (not affiliated with Cal Newport or Naval Ravikant)",
      bgColor: "#DEC879", // Gold color
      onClick: () => console.log("Blogs clicked")
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-blue-500 p-4 text-center">
        <h1 className="text-2xl font-bold">FUCKLESS LIFE</h1>
      </header>
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <Mode key={index} {...mode} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ChooseMode;