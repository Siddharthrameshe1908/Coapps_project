import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assign, fetchcategory} from "../../action/free";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";




const Getspec= () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const {  workerDetails } = useSelector((state) => state.workers);
  let { cate } = useParams();
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
   const formData = {category:cate};
    await dispatch(fetchcategory(formData,navigate));
  };

  const handleAssign = async(worker) =>{
   

    const formData = {
        assigned_worker:worker.username,
        assigned_to: user.userData.username,
      };
  
      await dispatch(assign(formData,navigate));
    };
  

  return (
    <div className="container mx-auto p-4 h-screen">
    <h1 className="text-2xl font-bold mb-4">Worker Details</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Username</th>
            <th className="py-2 px-4 border-b border-gray-200">Email</th>
            <th className="py-2 px-4 border-b border-gray-200">Category</th>
            <th className="py-2 px-4 border-b border-gray-200">Rate per Hour</th>
            <th className="py-2 px-4 border-b border-gray-200">Ranking</th>
          </tr>
        </thead>
        <tbody>
          {workerDetails.map(worker => (
            <tr key={worker.id}>
              <td className="py-2 px-4 border-b border-gray-200">{worker.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.username}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.email || 'N/A'}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.category}</td>
              <td className="py-2 px-4 border-b border-gray-200">${worker.rate_per_hour}</td>
              <td className="py-2 px-4 border-b border-gray-200">{worker.ranking !== null ? worker.ranking : 'Unranked'}</td>
              <td onClick={()=>handleAssign(worker)} className="py-2 px-4 border-b border-gray-200 ">Assign</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Getspec;