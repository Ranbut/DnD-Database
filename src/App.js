import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignIn, SignUp, Monsters } from './pages/index';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/monsters" element={<Monsters />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};
