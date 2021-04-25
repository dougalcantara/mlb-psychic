import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';

export default function Game({ game }) {
  const { teams, gameDate, status, gamePk } = game;
  const { away, home } = teams;
  const isFinal = status.statusCode === 'F';

  return (
    <li>
      <h3>
        <Link to={`/game/${gamePk}`}>{away.team.abbreviation} @ {home.team.abbreviation}</Link>
        {isFinal && <span>&nbsp;(FINAL)</span>}
      </h3>
      <p>{format(parseISO(gameDate), 'h:mm a')}</p>
    </li>
  );
}