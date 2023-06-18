import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignIn, SignUp, UserConfig,
   Monsters, Monster, 
   Spells, Spell, 
   Equipments, Equipment, MagicItem, 
   CharacterCreation, SpellCreation, MonsterCreation, EquipmentCreation,
   Homebrew, History, Bookmarks,
   NotFound
   } from './pages/index.jsx';

import { UserProvider } from './contexts/UserContext';
import { GlobalStyle } from './globalStyle.jsx'

export default function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-config" element={<UserConfig />} />
          <Route path="/monsters" element={<Monsters />} />
          <Route path="/monster" element={<Monster />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/spell" element={<Spell />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/magic-item" element={<MagicItem />} />
          <Route path="/history" element={<History />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/homebrew" element={<Homebrew />} />
          <Route path="/homebrew/create-character" element={<CharacterCreation />} />
          <Route path="/homebrew/create-monster" element={<MonsterCreation />} />
          <Route path="/homebrew/create-spell" element={<SpellCreation />} />
          <Route path="/homebrew/create-equipment" element={<EquipmentCreation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};
