import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPasword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="relative">
      {/* subtle prestige blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm border border-amber-200"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-6">
          <p className="prata-regular text-3xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            {currentState}
          </p>
          <span className="h-[2px] w-10 bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700" />
        </div>

        {currentState === 'Login' ? null : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-amber-300 bg-white placeholder:text-gray-400 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            placeholder="Name"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-3 py-2 rounded-lg border border-amber-300 bg-white placeholder:text-gray-400 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          placeholder="Email"
          required
        />

        <input
          onChange={(e) => setPasword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-3 py-2 rounded-lg border border-amber-300 bg-white placeholder:text-gray-400 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-[-6px]">
          <p className="cursor-pointer text-amber-800 hover:underline underline-offset-4">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-amber-800 hover:underline underline-offset-4">
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-amber-800 hover:underline underline-offset-4">
              Login Here
            </p>
          )}
        </div>

        <button
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 px-8 py-2 text-white font-medium shadow-md transition hover:shadow-lg hover:opacity-95 active:opacity-90"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
