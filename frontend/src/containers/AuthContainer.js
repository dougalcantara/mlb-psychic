import { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { AppContext, auth } from '../store';

export default function AuthContainer({ children }) {
  const { setUser } = useContext(AppContext);
  const { pathname } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        setUser(null);
        return push('/login');
      };

      if (pathname === '/login') {
        setUser(user);
        push('/schedule');
      }
    });
  }, []);

  return <div className="auth-container">{children}</div>
}