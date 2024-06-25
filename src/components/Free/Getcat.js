import React, { useEffect, useState } from "react";

import sid from "./sid.webp";
import { Link, useNavigate } from "react-router-dom";

const worker = [
  { item: "Logo Design",url:"https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" },
  { item: "Graphic Design",url:"https://i.pinimg.com/736x/f6/c5/17/f6c517ccc8bab364676add8b07c0736d.jpg" },
  { item: "Need a SEO",url:"https://cdn.pixabay.com/photo/2024/05/10/17/50/colorful-8753446_1280.jpg" },
  { item: "Cartoon Animation",url:"https://i.pinimg.com/736x/63/82/dc/6382dcc3f5e90f2901c389e76be6661b.jpg" },
  { item: "Illustration",url:"https://cdn.pixabay.com/photo/2015/12/09/13/44/vector-1084755_1280.png" },
  { item: "Flyers & Vouchers",url:"https://www.rdjs.law/wp-content/uploads/post-scaled.jpg" },
  { item: "Social graphics",url:"https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { item: "Article writing",url:"https://images.unsplash.com/photo-1634476229749-a2e480a919d0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { item: "Video Editing",url:"https://www.umn.ac.id/wp-content/uploads/2022/06/Freelance.jpg" },
];

const Getcat = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
 
  
  const navigate = useNavigate();

  

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    if(!user){
      navigate("/auth")
    }
   
  };

  return (
    <div className="grid grid-cols-3 gap-4 py-4 px-4 h-screen ">
      {worker.map((worker) => (
        <Link to={worker.item}>
        <div class="max-w-[20em] bg-[#ce7878] rounded overflow-hidden shadow-lg">
          <img class="object-cover max-w-[400px] min-w-[400px] max-h-[200px] " src={worker.url} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{worker.item}</div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Getcat;
