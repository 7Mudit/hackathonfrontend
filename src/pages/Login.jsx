import React from "react";
import Template from "../components/Auth/Template";
import Navbar from "../components/common/Navbar";
const Login = () => {
  return (
    <>
    <div className="bg-black ">
      <Navbar/>
      <Template
        title="Welcome Back"
        description1="Crafting competencies for the present, future, and beyond."
        description2="Securing your career with future-focused education"
        formType="login"
      />
      </div>
    </>
  );
};

export default Login;
