import LoginForm from "@/components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
