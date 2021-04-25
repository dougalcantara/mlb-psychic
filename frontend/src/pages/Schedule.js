import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import GameList from '../components/GameList';

const BASE_URL = 'https://statsapi.mlb.com/api/v1';

export default function Schedule() {
  const [gamesToday, setGamesToday] = useState([]);

  useEffect(() => {
    fetchGamesToday();

    return () => {
      setGamesToday([]);
    };
  }, []);

  async function fetchGamesToday() {
    const formattedDate = format(Date.now(), 'yyyy-MM-dd');

    try {
      const { data } = await axios.get(`${BASE_URL}/schedule?sportId=1&hydrate=team,linescore&startDate=${formattedDate}&endDate=${formattedDate}`);
      const { dates } = data;
      const { games } = dates.shift();

      setGamesToday(games);
    } catch (e) {
      console.log('[ERROR] - Could not fetch today\'s games.');
      setGamesToday([]);
    }
  }

  return (
    <div className="page page-schedule">
      <GameList games={gamesToday} />
    </div>
  );
}
