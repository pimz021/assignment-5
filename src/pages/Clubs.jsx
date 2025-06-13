import { clubs } from '../data/clubs';
import { Link } from 'react-router-dom';

const Clubs = () => (
  <div>
    <h1 className="text-3xl">Our Clubs</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {clubs.map(club => (
        <div key={club.id} className="border p-4">
          <img src={club.image} alt={club.name} className="w-full h-40 object-cover" />
          <h2 className="font-bold">{club.name}</h2>
          <p>{club.shortDescription}</p>
          <Link to={`/clubs/${club.id}`} className="text-blue-500">View Details</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Clubs;
