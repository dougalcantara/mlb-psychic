export default function Play({ play }) {
  return (
    <li>
      <div>
        <strong>{play.atBatIndex}: {play.result.description || `${play.matchup.batter.fullName} is at bat.`}</strong>
      </div>
      <div>
        <em>({play.matchup.pitcher.fullName} pitching)</em>
        <ol>
          {play.playEvents.filter(pEvent => pEvent.type === 'pitch').map((pEvent, i) => (
            <li key={pEvent.playId}>Pitch {i + 1}: {parseFloat(pEvent.pitchData.startSpeed)}MPH {pEvent.details.type.description} &rarr; {pEvent.count.balls} - {pEvent.count.strikes}</li>
          ))}
        </ol>
      </div>
    </li>
  )
}