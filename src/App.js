import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignIn, SignUp, Monsters, Monster, Spells, Spell } from './pages/index';
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
          <Route path="/monster" element={<Monster />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/spell" element={<Spell />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};
