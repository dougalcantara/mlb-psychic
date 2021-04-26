import { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { AppContext, auth } from '../store';

export default function AuthContainer({ children }) {
  const { setUser } = useContext(AppContext);
  const { pathname } = useLocation();
  const { push } = useHistory();

  function authStateWatcher(cb) {
    return auth.onAuthStateChanged(user => {
      if (user) {
        if (pathname === '/login') {
          push('/schedule');
        }

        return cb(user);
      } else {
        push('/login');
        return cb(null);
      }
    });
  
  }

  useEffect(() => {
    const unsubscribe = authStateWatcher(setUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return <div className="auth-container">{children}</div>
}