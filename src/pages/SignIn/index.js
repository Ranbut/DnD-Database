import { useContext, useState } from "react";
import { useNavigate, useLocation  } from 'react-router-dom';
import { signIn } from "../../services/authApi";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams(location.search);
      const paramReturn = queryParams.get('return');

      const userData = await signIn(email, password);
      setUserData(userData);
      alert('Login realizado com sucesso!');
      navigate(`/${paramReturn}`);
    } catch (err) {
      alert('Não foi possível fazer o login!');
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-700">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email} onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password} onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{' '}
          <a href="/sign-up" className="font-medium text-red-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};