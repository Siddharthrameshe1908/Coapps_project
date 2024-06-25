import React, { useEffect, useState } from 'react'

import {useNavigate} from 'react-router-dom'
import { myassign } from '../../action/free';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const {  assigned } = useSelector((state) => state.workers);
const navigate = useNavigate();
const dispatch = useDispatch();
    useEffect(() => {
        CheckUser();
      }, []);
    
      const CheckUser = async () => {
       
        if(!user){
            navigate("/Home");
        }else{
            handleAssign();
        }

      };


      const handleAssign = async() =>{
   

        const formData = {
            assigned_to: user.userData.username,
          };
      
          await dispatch(myassign(formData));
        };


    
  return (
    <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
    <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div class=" h-32 overflow-hidden" >
            <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
        </div>
        <div class="flex justify-center px-5  -mt-12">
            <img class="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

        </div>
        <div class=" ">
            <div class="text-center px-14">
                <h2 class="text-gray-800 text-3xl font-bold">{user?.userData?.username}</h2>
                <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">{user?.userData?.email}</a>
                <p class="mt-2 text-gray-500 text-sm">Rate: {user?.userData?.rate} </p>
                <p class="mt-2 text-gray-500 text-sm">Category: {user?.userData?.rate} </p>
            </div>
            <hr class="mt-6" />
            <div class="flex  bg-gray-50 ">
                
            <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">Assigned Worker</th>
         
          <th className="py-2 px-4 border-b border-gray-200">Date</th>
        </tr>
      </thead>
      <tbody>
        {assigned.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{item.assigned_worker}</td>
      
            <td className="py-2 px-4 border-b border-gray-200">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
                

            </div>
        </div>
    </div>
</div>
  )
}

export default Profile