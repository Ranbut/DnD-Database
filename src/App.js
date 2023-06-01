import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {Home, SignIn, SignUp} from './pages/index';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </Router>
  );
};
