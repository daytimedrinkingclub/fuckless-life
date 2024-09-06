import { useState, useEffect, useCallback } from "react";
import Masonry from "react-masonry-css";
import { ref, push, onValue } from "firebase/database";
import { database } from "../firebase";
import confessImage from "/src/assets/confess.svg";

function ConfessionBooth() {
  const [message, setMessage] = useState("");
  const [tvMessage, setTvMessage] = useState("We won't tell anyone");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [confessions, setConfessions] = useState([]);
  const messages = [
    "Confess now!",
    "Get it off your chest",
    "We won't tell anyone",
    "What happens here, stays here",
    "Your secret's safe with us",
  ];

  const fetchConfessions = useCallback(() => {
    const confessionsRef = ref(database, "confessions");
    onValue(confessionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const confessionList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setConfessions(confessionList.reverse()); // Reverse to show newest first
      }
    });
  }, []);

  useEffect(() => {
    fetchConfessions();
  }, [fetchConfessions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const confessionsRef = ref(database, "confessions");
    push(confessionsRef, {
      message,
      timestamp: Date.now(),
    })
      .then(() => {
        setMessage("");
        setIsSubmitting(false);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        fetchConfessions(); // Refresh the confession list
      })
      .catch((error) => {
        console.error("Error saving confession: ", error);
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTvMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="bg-custom-yellow">
      <div className="flex justify-center items-center">
        <main className="w-full max-w-4xl p-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Confession Booth
          </h1>
          <div className="flex flex-col md:flex-row h-full">
            <section className="flex-1 p-4 relative">
              <img src={confessImage} alt="Confession booth" />
              <div className="absolute top-1/2  ml-4 mt-6 max-w-[130px] left-1/2 transform text-white text-center">
                <p className="text-sm font-bold animate-fade-in-out text-mybrown font-goblin transform rotate-[-2deg]">
                  {tvMessage}
                </p>
              </div>
            </section>
            <section className="flex-1 p-4 sm:mx-12 bg-custom-yellow flex flex-col justify-center">
              <p className="text-2xl font-lexend-exa mb-2">
                Ever done something and thought,{" "}
                <span className="font-bold">&ldquo;Well, fuck it!&rdquo;?</span>{" "}
                Now&apos;s your chance to share it.
              </p>

              <form onSubmit={handleSubmit}>
                <textarea
                  className="w-full p-4 mt-4 text-lg rounded-[30px] bg-[#DEC879] resize-none"
                  rows="5"
                  placeholder="Type your confession here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={200}
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-mybrown text-white font-bold rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block animate-spin mr-2">
                          &#9696;
                        </span>
                        Submitting...
                      </>
                    ) : (
                      "Fuck it lets go"
                    )}
                  </button>
                </div>
              </form>
              {showAlert && (
                <p className="mt-4 text-green-700 font-bold text-center">
                  Confession received!
                </p>
              )}
            </section>
          </div>
        </main>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Recent Confessions
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {confessions.map((confession) => (
            <div
              key={confession.id}
              className="bg-yellow-200 p-4 rounded-lg shadow-md mb-4 transform rotate-1 hover:rotate-0 transition-transform overflow-hidden"
            >
              <p className="text-lg font-medium">{confession.message}</p>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default ConfessionBooth;
