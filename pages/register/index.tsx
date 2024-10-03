import RegisterForm from "../../components/RegisterForm/RegisterForm";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const CreateTaskPage = () => {
  return (
    <>
      <Header />
      <RegisterForm />
      <Footer copyrightTitle="© 2024 Task Managment App" />
    </>
  );
};

export default CreateTaskPage;
