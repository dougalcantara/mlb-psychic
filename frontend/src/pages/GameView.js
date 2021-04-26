import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { AppContext } from '../store';

export default function GameView() {
  const { id } = useParams();
  const { currentGame, setCurrentGame } = useContext(AppContext);

  useEffect(() => {
    if (!currentGame) {
      fetchCurrentGame();
    }
  }, []);

  async function fetchCurrentGame() {
    try {
      const req = await axios.get(`https://statsapi.mlb.com/api/v1.1/game/${id}/feed/live`);

      console.log(req);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="page page-gameview">
      <h1>Game View</h1>
    </div>
  )
}