import Auth from "./components/Auth/Auth.js";
import Footer from "./components/Footer/Footer.js";
import Getall from "./components/Free/Getall.js";
import Getcat from "./components/Free/Getcat.js";
import Getspec from "./components/Free/Getspec.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile.js";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<Navigate to="/Home" />} />
      <Route path="/Home" exact element={<Home/>} />
      <Route path="/all" exact element={<Getall/>} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/category" exact element={<Getcat/>} />
      <Route path="/category/:cate" exact element={<Getspec/>} />
     
      <Route
  path="/auth"
  exact
  element={!user ? <Auth /> : <Navigate to="/Home" replace />}
/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;