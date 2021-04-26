import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';

export default function Game({ game }) {
  const { teams, gameDate, status, gamePk } = game;
  const { away, home } = teams;
  const isFinal = status.statusCode === 'F';

  return (
    <li className="p-2 border-b-2 border-gray-200 w-1/2 md:w-1/3 lg:w-1/4 md:p-4 lg:p-6">
      <h3>
        <Link to={`/game/${gamePk}`}>{away.team.abbreviation} @ {home.team.abbreviation}</Link>
        {isFinal && <span>&nbsp;(FINAL)</span>}
      </h3>
      <p>{format(parseISO(gameDate), 'h:mm a')}</p>
      <div className="mt-2">
        <Link to={`/game/${gamePk}`} className="block py-2 px-6 text-white text-center bg-green-500 border-green-500 border-2 hover:bg-white hover:text-green-500">Go</Link>
      </div>
    </li>
  );
}