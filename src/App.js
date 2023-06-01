import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignIn, SignUp } from './pages/index';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};
