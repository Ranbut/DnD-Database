import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signUp } from "../../services/userApi";
import UserContext from "../../contexts/UserContext";
import { signIn } from "../../services/authApi";
import Background from "../../assets/images/background/background-1.jpg"
import Logo from "../../assets/images/dnd.svg"
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    document.title = 'Sign up - D&D Database';

    return () => {
      document.title = 'D&D Database';
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      alert('Passwords must match!');
      setLoading(false);
    } else {
      try {
        await signUp(username, email, password);
        const queryParams = new URLSearchParams(location.search);
        const paramReturn = queryParams.get('return');

        alert('Registration successful!');
        const userData = await signIn(email, password);
        setUserData(userData);
        navigate(`/${paramReturn}`);
      } catch (error) {
        setLoading(false);
        alert('Unable to register!');
      }
    }
  };
  return (
    <Wrapper background={Background}>
      <Container>
        <Link to={'/'}>
          <LogoImage alt="logo" src={Logo} />
          <LogoText>D&D Database</LogoText>
        </Link>
        <Heading>Sign up</Heading>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel htmlFor="username">Your Username <Required>*</Required></FormLabel>
            <FormInput
              disabled={loading}
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="email">Your Email <Required>*</Required></FormLabel>
            <FormInput
              disabled={loading}
              type="email"
              id="email"
              name="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="password">Your Password <Required>*</Required></FormLabel>
            <FormInput
              disabled={loading}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="confirmPassword">Confirm Password <Required>*</Required></FormLabel>
            <FormInput
              disabled={loading}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormField>
          <SubmitButton disabled={loading} type="submit">
            {loading ? (
                <ThreeDots
                  color="#ffffff"
                  height= "13"
                  width= "51"
                  radius= "9"
                  ariaLabel="three-dots-loading"
                  visible={loading}
                />
            ) : (
              'Sign up'
            )}
          </SubmitButton>
        </Form>
        <SignInContainer>
          <SignInText>
            Already have an account?{' '}
            <SignInLink to="/sign-in">Sign in</SignInLink>
          </SignInText>
        </SignInContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  width: 35%;
  padding: 26px;
  margin: auto 60%;
  background: rgb(0,0,0);
  background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(50,13,13,0.8) 100%);
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 800px;
  min-width: 400px;
  @media (max-width: 1024px) {
      margin: auto;
  }
`;

const Required = styled.span`
  color: #ff0000;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 48%;
`;

const LogoText = styled.h1`
  font-size: 3xl;
  font-weight: 600;
  text-align: center;
  color: #f56565;
  text-decoration: none;
`;

const Heading = styled.h1`
  margin-top: 20px;
  font-size: 3xl;
  font-weight: 600;
  text-align: center;
  color: #f56565;
`;

const Form = styled.form`
  margin-top: 24px;
`;

const FormField = styled.div`
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-top: 4px;
  color: #f56565;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
  outline: none;

  &:focus {
    border-color: #f56565;
    box-shadow: 0 0 0 3px rgba(245, 101, 101, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  margin-top: 24px;
  color: #fff;
  background-color: #f56565;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e53e3e;
  }
`;

const SignInContainer = styled.div`

`;

const SignInText = styled.p`
  margin-top: 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;

const SignInLink = styled(Link)`
  margin-top: 3px;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 300;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f56565;
  }
`;