import { Link } from 'react-router-dom';
import mascot from '../assets/mascot.svg';

function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center font-lexend-exa text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h1>
        <div className="bg-yellow-600 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Legal Stuff You'll Never Read</h2>
          <p className="text-sm">But if you're really that curious, here you go:</p>
          <p className="text-sm mt-2">Look, we know you won't read this word-for-word, but please, at least skim it. We promise there's no hidden clause about surrendering your firstborn or anything.</p>
          <p className="text-sm mt-2">We've tried to keep things simple and straightforward. No sneaky stuff, just the basics to keep everyone happy and our lawyers off our backs.</p>
        </div>
        <div className="flex items-center justify-between">
          <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            I agree to not read the above
          </Link>
          <img src={mascot} alt="Mascot" className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
}

export default TermsPage;