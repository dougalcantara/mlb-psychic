import { useContext } from 'react';
import { auth, AppContext } from '../store';

export default function AppHeader() {
  const { user } = useContext(AppContext);

  function logout() {
    auth.signOut();
  }

  return (
    <header>
      <div className="container mx-auto py-4 border-b-2 max-w-80 flex justify-between items-center">
        <h3>MLB Psychic</h3>
        {user && <button onClick={() => logout()} type="button" className="py-2 px-6 bg-gray-300 border-2 border-gray-300 hover:bg-white">Log Out</button>}
      </div>
    </header>
  );
}