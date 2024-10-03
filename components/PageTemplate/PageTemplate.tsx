import React, { ReactNode, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  const router = useRouter();
  const jwt = cookie.get("task_manager_app_jwt");

  const validateUser = async () => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/login/validate`,
        {
          headers,
        }
      );

      if (response.status !== 200) {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }

    validateUser();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer copyrightTitle="© 2024 Task Managment App" />
    </div>
  );
};

export default PageTemplate;
