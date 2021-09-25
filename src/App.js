import React from 'react';
import { useAuth } from './components/Contexts/AuthContext'
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from './components/Routes/Routes'
function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
}

export default App;
