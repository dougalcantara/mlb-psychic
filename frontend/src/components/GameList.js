import Game from './Game';

export default function GameList({ games }) {
  return (
    <ul>
      {games.map(game => <Game key={game.gamePk} game={game} />)}
    </ul>
  )
}