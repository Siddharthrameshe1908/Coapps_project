import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { signin, signup } from '../../action/auth.js';
const initialState = { email: '', username: '', rate: '', password: '',category:'Logo Design', confirmPassword: '' };
const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const [mess,setMess] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
  
    const switchMode = () => {
        setForm(initialState);
        setIsSignup(!isSignup);
        setShowPassword(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (isSignup) {
         const mess =  dispatch(signup(form, navigate,setMess));
        } else {
          dispatch(signin(form, navigate));
        }
      };

      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    
  return (
    <div className='bg-[#e0e0e0] h-screen flex justify-center items-center pb-12'>
    <div className="max-w-xs  mx-auto ">
  <div className=" shadow-light-login-neumorphism  rounded px-8 pt-6 pb-8 mb-4">
    <div className="flex items-center justify-center mb-4">
      
    </div>
    <h1 className="text-xl text-center font-bold mb-4">{ isSignup ? 'Sign up' : 'Sign in' }</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        { isSignup && (
          <>
          <input
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
              autoFocus
            />
            
        <select onChange={handleChange} className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" name='category' type='username' placeholder="Pick a Category">
          <option  name='Logo Design' value='Logo Design'>Logo Desgin</option>
          <option  name='Graphic Design' value='Graphic Design'>Graphic Design</option>
          <option   name='Need a SEO' value='Need a SEO'>Need a SEO</option>
          <option  name='Cartoon Animation' value='Cartoon Animation'>Cartoon Animation</option>
          <option   name='Illustration'value='Illustration'>Illustration</option>
          <option  name='Flyers & Vouchers'value='Flyers & Vouchers'>Flyers & Vouchers</option>
          <option  name='Social graphics'value='Social graphics'>Social graphics</option>
          <option  name='Article writing'value='Article writing'>Article writing</option>
          <option  name='Video Editing'value='Video Editing'>Video Editing</option>

        </select>
            <input
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              name="rate"
              onChange={handleChange}
              type="text"
              placeholder="Rate per Hour"
            />

           
          </>
        )}
        <input
          className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          name="username"
          onChange={handleChange}
          type="username"
          placeholder="UserName"
        />
       
        <input
          className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          name="password"
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
        />
        { isSignup && (
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            placeholder="Repeat Password"
          />
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        { isSignup ? 'Sign Up' : 'Sign In' }
      </button>
    </form>
    <div className="text-center mt-4">
      <button className="text-sm text-blue-500 hover:text-blue-800" onClick={switchMode}>

        { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
      </button>
    </div>
  </div>
</div>
</div>

  )
}

export default Auth