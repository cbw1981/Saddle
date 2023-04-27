import React, { useState } from "react";
import axios from "axios";
import{Link, useNavigate} from "react-router-dom";

function Login () {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    
    email: "",
    password: "",
  });
  const login = async ()=>{
    try {
     const response = await axios.post("/api/users/login", user);
     if(response.data.success) {
      localStorage.setItem("token", response.data.data);
      navigate("/");
     }else{
      alert(response.data.message);
     }
    }catch(err){
      console.log(err);

    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 w-96 p-5 shadow border border-gray-300">
        <h1 className="text-4xl text-center font-bold text-blue-600">
          Howdy Partner!
        </h1>
        <h1 className="text-3xl text-center font-bold text-gray-700">
          Glad to have you back
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="primary" onClick={login}>Saddle Up</button>
        <Link to = "/register" className ="text-gray-600 underline">Click here to join the posse</Link>
      </div>
    </div>
  );
}

export default Login;