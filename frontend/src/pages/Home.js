import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page page-home">
      <h1>MLB Psychic</h1>
      <p>How well can you predict the outcome of a live MLB at-bat?</p>
      <div>
        <Link to="/login">Log In</Link>
      </div>
      <div>
        <Link to="/schedule">Today's Games</Link>
      </div>
    </div>
  );
}
