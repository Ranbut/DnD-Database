import { useContext, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { signUp } from "../../services/userApi";
import UserContext from "../../contexts/UserContext";
import { signIn } from "../../services/authApi";
import styled from "styled-components";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords must match!');
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
              alert('Unable to register!');
            }
          }
    };
    return (
        <Wrapper>
          <Container>
            <Heading>Sign up</Heading>
            <Form onSubmit={handleSubmit}>
              <FormField>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <FormInput
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </FormField>
              <SubmitButton type="submit">Sign up</SubmitButton>
            </Form>
            <p>
              Already have an account?{' '}
              <SignInLink href="/sign-in">Sign in</SignInLink>
            </p>
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
`;

const Container = styled.div`
  width: 100%;
  padding: 24px;
  margin: auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 800px;
`;

const Heading = styled.h1`
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
  color: #4b5563;
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

  &:hover {
    background-color: #e53e3e;
  }
`;

const SignInLink = styled.a`
  font-size: 12px;
  font-weight: 300;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f56565;
  }
`;