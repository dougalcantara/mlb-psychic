import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { AppContext } from '../store';

import Play from '../components/Play';

export default function GameView() {
  const { id } = useParams();
  const [refreshInterval, setRefreshInterval] = useState(null);
  const { currentGame, setCurrentGame } = useContext(AppContext);

  useEffect(() => {
    pollForNewData();

    return (() => {
      clearInterval(refreshInterval);
      setRefreshInterval(null);
    });
  }, []);

  async function fetchCurrentGame() {
    try {
      const { data } = await axios.get(`https://statsapi.mlb.com/api/v1.1/game/${id}/feed/live`);

      return data;
    } catch (e) {
      console.log(e);
    }

    return null;
  }

  function pollForNewData() {
    setRefreshInterval(setInterval(async () => {
      setCurrentGame(await fetchCurrentGame());
    }, 3000));
  }

  return (
    <div className="page page-gameview">
      <h1>Game View</h1>
      <ul>
      {currentGame ? currentGame.liveData.plays.allPlays.map((play, i) => (
        <Play key={play.atBatIndex} play={play} />
      )).reverse() : <p>Loading game...</p>}
      </ul>
    </div>
  )
}