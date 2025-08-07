import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthProvider';

function Login() {

  const {authUser, setAuthUser} = useAuth();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    console.log(userInfo);

    axios.post("http://localhost:9002/user/login", userInfo)
      .then((response) => {
          console.log(response.data);
          if(response.data){
            alert("Login successful!");
          }
          localStorage.setItem("messenger", JSON.stringify(response.data));
          setAuthUser(response.data);
      })
      .catch((error) => {
        console.log(error)
        if(error.response){
          alert("Error : " + error.response.data.message)
        }
      })
  }
  return (
    <>
    <div>
        <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-100 border border-white px-10 py-8 rounded-md space-y-4 flex flex-col items-center"
        >
          <h1 className="text-2xl items-center font-bold flex justify-center m-3">
            Synq-it
          </h1>
          <h1 className="text-2xl">
            {" "}
            Login with your{" "}
            <span className="text-blue-600 font-semibold">Account</span>
          </h1>

          {/* Email */}
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com"  
              {...register("email",
                  {required: true}
                )
               } 
            />
          </label>
            {errors.email && 
              <span className="text-left w-full  text-red-600 text-sm">**This field is required**</span>
            }

          {/* Password */}
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              {...register("password",
                {required: true}
                )
              } 
            />
          </label>
          {errors.password &&
            <span className="text-left w-full  text-red-600 text-sm">**This field is required**</span>
          }

          <div className="text-center bg-blue-600 w-full max-w-sm py-2 rounded-lg cursor-pointer">
            <input type = "submit" value="Login" ></input>
          </div>

          <p className="text-sm">Don't have an account? <span className="text-blue-600 underline cursor-pointer">
            SignUp</span></p>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login