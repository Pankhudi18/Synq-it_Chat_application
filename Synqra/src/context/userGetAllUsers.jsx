import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function userGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading , setLoading] = useState([]);

    useEffect(() => {
        const getUsers = async() => {
            setLoading(true);
        try{
            const token = Cookies.get("jwt");
            const response = await axios.get("/api/user/getUserProfile",
                {
                  withCredentials: true,
                  headers: {
                    Authorization: `Bearer ${token}`,
                  }
                }   
            );
            setAllUsers(response.data.filteredUsers);
            setLoading(false);
        }catch(error){
            console.log("Error in userGetAllUsers" + error);
        }
        };

        getUsers();
    }, [])
  return (
    [allUsers, loading]
  )
}

export default userGetAllUsers