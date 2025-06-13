import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';

const ClubDetail = () => {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);

  if (!club) return <p>Club not found!</p>;

  const handleJoinClub = () => {
    localStorage.setItem(clubId, true);
    alert('You have joined this club!');
  };

  return (
    <div>
      <h1>{club.name}</h1>
      <img src={club.image} alt={club.name} />
      <p>{club.description}</p>
      <div>
        <h3>Upcoming Events</h3>
        <ul>
          {club.events.map((event, index) => (
            <li key={index}>{event.name} on {event.date}</li>
          ))}
        </ul>
      </div>
      {localStorage.getItem(clubId) ? (
        <p>You have joined this club!</p>
      ) : (
        <button onClick={handleJoinClub}>Join Club</button>
      )}
    </div>
  );
};

export default ClubDetail;
