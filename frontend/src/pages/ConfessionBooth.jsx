function ConfessionBooth() {
  return (
    <div className="flex layout-height w-100 justify-center items-center bg-custom-yellow">
      <main>
        <h1 className="text-4xl font-bold text-center mb-6">
          Confession Booth
        </h1>
        <div className="flex flex-col md:flex-row h-full">
          <section className="flex-1 p-4">
            <img
              src="/src/assets/confess.svg"
              alt="Confession booth"
              className="w-full h-auto"
            />
          </section>
          <section className="flex-1 p-4 mx-12 bg-custom-yellow flex flex-col justify-center">
            <p className="text-2xl font-lexend-exa">
              Ever done something and thought,{" "}
              <span className="font-bold">&ldquo;Well, fuck it!&rdquo;?</span>{" "}
              Now&apos;s your chance to share it.
            </p>

            <textarea
              className="w-full p-4 mt-4 text-lg rounded-[30px] bg-[#DEC879] resize-none"
              rows="5"
              placeholder="Type your confession here..."
            ></textarea>
            <div className="flex justify-center">
              <button className="mt-4 px-6 py-2 bg-mybrown text-white font-bold rounded-full hover:bg-opacity-90 transition-colors">
                Fuck it lets go
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ConfessionBooth;
