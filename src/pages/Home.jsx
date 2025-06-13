import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center py-16">
    <h1 className="text-4xl font-bold text-blue-600">Welcome to Campus Club Finder</h1>
    <p className="mt-4 text-xl text-gray-700">Discover, join, and engage with university clubs.</p>
    <div className="mt-8">
      <Link to="/clubs" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400">
        Find Clubs
      </Link>
    </div>
  </div>
);

export default Home;
