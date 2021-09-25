import React from 'react';
import { useAuth } from './AuthContext'
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from './components/AuthRoutes/Routes'
function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
}

export default App;
