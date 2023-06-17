import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from "../../assets/images/dnd.svg"
import useToken from '../../hooks/useToken';
import useUser from '../../hooks/useUser';
import SearchBar from '../SearchBar';

export default function Header() {
  const token = useToken();
  const user = useUser();
  const [showOptions, setShowOptions] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function handleProfileClick() {
    setShowOptions(!showOptions);
  };

  function handleLogout() {
    localStorage.removeItem('userData');
    alert('Logout successful');
    window.location.reload();
  };

  function handleConfigure() {
    navigate("/user-config");
  };

  function handleHistory() {
    navigate("/history");
  };

  function handleHomebrew() {

  };

  return (
    <HeaderWrapper>
      <Container>
        <TitleLink to="/">
          <LogoImage alt="logo" src={Logo} />
          <Title>D&D Database</Title>
        </TitleLink>
        <SearchBar />
        <HeaderButtonsWrapper>
          {!token ? (
            <>
              <Link
                to={`/sign-in?return=${location.pathname.substring(1)}${location.search}`}
              >
                <HeaderButton>SignIn</HeaderButton>
              </Link>
              <Link
                to={`/sign-up?return=${location.pathname.substring(1)}${location.search}`}
              >
                <HeaderButton>SignUp</HeaderButton>
              </Link>
            </>
          ) : (
            <UserOptionsWrapper onClick={handleProfileClick}>
              <ProfileWrapper>
                <UserAvatar
                  src={user.avatar}
                  alt={user.username}
                />
                {showOptions && (
                  <ProfileOptions>
                    <button onClick={handleHomebrew}>My Homebrew</button>
                    <button onClick={handleHistory}>History</button>
                    <button onClick={handleConfigure}>Configurations</button>
                    <button onClick={handleLogout}>Logout</button>
                  </ProfileOptions>
                )}
              </ProfileWrapper>
              <UserName>{user.username}</UserName>
            </UserOptionsWrapper>
          )}
        </HeaderButtonsWrapper>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderButton = styled.button`
  margin-left: 20px;
  border: 2px solid red;
  color: white;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: border 0.1s;

  &:hover {
    border: 2px solid #374045;
  }
`;

const ProfileOptions = styled.div`
  position: absolute;
  top: 110%;
  left: 70;
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

const HeaderWrapper = styled.header`
  background-color: #12181c;
  padding: 1rem;
  border-bottom: 4px solid #e40712;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 40px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 2xl;
  font-weight: bold;
  color: #e40712;
  margin-left: 0.5rem;
`;

const HeaderButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const UserOptionsWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;
`;

const UserName = styled.p`
  margin-left: 5px;
  color: white;
`;

const ProfileWrapper = styled.div`
  position: relative;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
`;
