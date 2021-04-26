import Game from './Game';

export default function GameList({ games }) {
  return (
    <ul className="flex justify-start flex-wrap">
      {games.length ? 
        games.map(game => <Game key={game.gamePk} game={game} />) :
        <p className="block">Loading today's games...</p>
      }
    </ul>
  )
}