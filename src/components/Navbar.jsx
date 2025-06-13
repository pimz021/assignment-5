import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <ul className="flex space-x-4">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/clubs">Clubs</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navbar;
