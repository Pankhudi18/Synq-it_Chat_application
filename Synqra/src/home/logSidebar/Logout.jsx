import axios from 'axios';
import React, { useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';



function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser } = useAuth(); 
  const handleLogout = async () => {
      setLoading(true);
      try{
        const res = await axios.post('/api/user/logout');
        localStorage.removeItem("messenger");
        Cookies.remove("jwt");
        setAuthUser(null);
        setLoading(false);
        alert("Logged out successfully");
        navigate('/login');
      }catch(error){
        console.log("Error in logging out" + error);
      }
  }
  return (
   <div className = "w-[4%] bg-slate-950 text-white flex flex-col justify-end">
       <div className= "p-3 align-bottom">
           <button>
            <IoMdLogOut 
              onClick={handleLogout}
              className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300"/>
          </button>
       </div>
   </div>
  )
}

export default Logout