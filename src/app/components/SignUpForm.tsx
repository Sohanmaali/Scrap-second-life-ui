"use client";

import { useState } from "react";
import { BasicProvider } from "../pages/api/basicprovider";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { setToken } from "../utils/auth";
import setNotification from "../utils/nitification";


export default function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const [initialValue,setInitialValue] = useState({email : '', password : '',confirmPassword : '', name : '', mobile:''})

  const dispatch = useDispatch();
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setPasswordType(passwordVisible ? "password" : "text");
  };


  function handleChange(e :any){
   const {name,value} =  e.target;
   setInitialValue({
    ...initialValue,
    [name] : value
   })
   
  }


  async function handleSubmit(e : any){
    e.preventDefault()
    try {
        console.log('Login page ');
        // const response = await new BasicProvider('/frontend/login').postRequest(creadantial);
        setNotification('success','Login Successfull') 
        dispatch(login({ token: '123', user: {name : 'test', email : 'test'} }));
        setToken('123mmmmmmmmmmmmmmmmmmmmmmm')
        
    } catch (error) {
        
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-2xl py-2">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Turn <span className="text-[#f99e07]">Scrap</span> into Savings Log
            In Now!
          </h2>
          <hr className="w-48 border-1 border-[#f99e07] justify-self-center" />
          <form >



          <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="text"
                id="name"
                name="name"

                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#f99e07] text-black"
                placeholder="name"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#f99e07] peer-focus:text-sm"
              >
                Name
              </label>
            </div>


            <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="text"
                id="email"
                name="email"

                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#f99e07] text-black"
                placeholder="email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#f99e07] peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            <div className="relative w-full mt-4">
              <input
              onChange={(e)=>{handleChange(e)}}
                type={passwordType}
                id="password"
                name="password"
      
                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#f99e07] text-black"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-0 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#f99e07] peer-focus:text-sm"
              >
                Password
              </label>
              <button
                type="button"
                id="togglePassword"
                onClick={togglePassword}
                className="absolute right-3 top-4 text-gray-500 hover:text-green-500 focus:outline-none text-sm"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>


            
            <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="password"
                id="confirmPassword"
                name="confirmPassword"

                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#f99e07] text-black"
                placeholder="confirmPassword"
              />
              <label
                htmlFor="=confirmPassword"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#f99e07] peer-focus:text-sm"
              >
                Confirm Password
              </label>
            </div>


            <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="text"
                id="mobile"
                name="mobile"

                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#f99e07] text-black"
                placeholder="mobile"
              />
              <label
                htmlFor="=mobile"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#f99e07] peer-focus:text-sm"
              >
                Mobile
              </label>
            </div>



            <div className="text-center mt-8">
              <button
              onClick={(e) => {handleSubmit(e)}}
                type="submit"
                className="w-full py-3 bg-[#216212] text-white rounded-lg hover:bg-[#1f5514] transition duration-200"
              >
               SignUp
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-gray-700">
                Or Alredy have an account?{" "}
                <a
                  href="/pages//auth/login"
                  className="text-[#f99e07] hover:underline transition duration-200"
                >
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            // backgroundImage: "url('./assert/images/scrap_holder_img.jpg')",
            backgroundImage: `url(/assets/images/scrap_holder_img.jpg)`,
          }}
        ></div>
      </div>
    </div>
  );
}
