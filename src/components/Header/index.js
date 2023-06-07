import styled from 'styled-components';
import { Link, useLocation  } from 'react-router-dom';
import { useState } from 'react';
import defaultUser from '../../assets/images/userDefault.png';
import useToken from '../../hooks/useToken';
import useUser from '../../hooks/useUser';

export default function Header() {
  const token = useToken();
  const user = useUser();
  const [showOptions, setShowOptions] = useState(false);

  const location = useLocation();

  console.log(location);

  function handleProfileClick () {
    setShowOptions(!showOptions);
  };

  function handleLogout () {
    localStorage.removeItem('userData');
    alert('Logout successful');
    window.location.reload();
  };

  function handleConfigure () {
    // Future logic here
  };

  return (
    <header className="bg-blackpearl py-4 border-b-4 border-red-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">D&D Database</h1>
        <div className="space-x-4">
          {!token ? (
            <>
              <Link to={`/sign-in?return=${location.pathname.substring(1)}${location.search}`}>
                <HeaderButtons>SignIn</HeaderButtons>
              </Link>
              <Link to={`/sign-up?return=${location.pathname.substring(1)}${location.search}`}>
                <HeaderButtons>SignUp</HeaderButtons>
              </Link>
            </>
          ) : (
            <div className="flex space-x-6">
              <p className="text-white">{user.username}</p>
              <div
                className="relative inline-block"
                onClick={handleProfileClick}
              >
                <img
                  className="w-10 h-10 rounded-full mx-auto bg-white cursor-pointer"
                  src={defaultUser}
                  alt={user.username}
                  width="250"
                  height="250"
                ></img>
                {showOptions && (
                  <ProfileOptions>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={handleConfigure}>Configure</button>
                  </ProfileOptions>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const HeaderButtons = styled.button`
  border: 2px solid red;
  color: white;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

const ProfileOptions = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;

  button {
    display: block;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.25rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
