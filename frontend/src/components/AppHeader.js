import { useContext } from 'react';
import { auth, AppContext } from '../store';

export default function AppHeader() {
  const { user } = useContext(AppContext);

  function logout() {
    auth.signOut();
  }

  return (
    <header>
      <h3>MLB Psychic</h3>
      {user && <button onClick={() => logout()} type="button">Log Out</button>}
    </header>
  )
}