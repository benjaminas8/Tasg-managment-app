import LoginForm from "@/components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
import React from "react";
import Footer from "@/components/Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Login</h1>
      <LoginForm />
      <Footer copyrightTitle="© 2024 Task Managment App" />
    </div>
  );
};

export default LoginPage;
