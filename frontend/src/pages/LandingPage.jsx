import { Link } from "react-router-dom";
import mascot from "../assets/mascot.svg";
import { useEffect, useState, useRef } from "react";

function LandingPage() {
  const [animate, setAnimate] = useState(false);
  const fireContainerRef = useRef(null);

  useEffect(() => {
    setAnimate(true);

    const createFireParticle = (x, y) => {
      const colors = ['#ff6b35', '#f7c59f', '#ffe66d'];
      for (let i = 0; i < 5; i++) {
        const fire = document.createElement('div');
        fire.className = 'fire-particle';
        fire.style.left = `${x}px`;
        fire.style.top = `${y}px`;
        fire.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fire.style.setProperty('--angle', `${Math.random() * 360}deg`);
        fire.style.setProperty('--distance', `${Math.random() * 50 + 50}px`);
        fireContainerRef.current.appendChild(fire);

        setTimeout(() => {
          fire.remove();
        }, 1000);
      }
    };

    const throttledCreateFire = throttle(createFireParticle, 20);

    window.addEventListener('mousemove', (e) => throttledCreateFire(e.clientX, e.clientY));

    return () => {
      window.removeEventListener('mousemove', throttledCreateFire);
    };
  }, []);

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  return (
    <div className="bg-custom-yellow layout-height flex flex-col relative overflow-hidden">
      <div ref={fireContainerRef} className="fire-container"></div>
      <main className="flex-grow flex items-center sm:ml-10 p-8 relative z-10">
        <div className={`max-w-2xl transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
            className="inline-block bg-mybrown text-white px-8 py-3 rounded-full text-lg font-bold mt-4 hover:bg-opacity-80 transition-all duration-300 font-lexend-exa transform hover:scale-105"
          >
            FUCK IT
          </Link>
        </div>
      </main>
      <img
        src={mascot}
        alt="Mascot"
        className={`absolute bottom-0 right-0 w-1/2 sm:w-1/3 h-auto transform transition-all duration-1000 ${animate ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
      />
    </div>
  );
}

export default LandingPage;
