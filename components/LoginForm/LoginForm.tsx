import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowErr, setShowErr] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const loginUser = async () => {
    try {
      setButtonLoading(true);

      const body = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/login`,
        body
      );

      if (response.status === 200) {
        cookie.set("task_manager_app_jwt", response.data.token);
        router.push("/");
      }

      console.log(response);

      setButtonLoading(false);
    } catch (err) {
      console.log("error: ", err);
      setShowErr(true);
      setButtonLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="email"
        type="text"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="password"
        type="password"
      />
      <Button onClick={loginUser} title="Login" isLoading={isButtonLoading} />

      {isShowErr && <h5 className={styles.error}>Wrong email or password</h5>}

      <Link href="/register" className={styles.signInText}>
        Don&apos;t have an account? Sign in
      </Link>
    </div>
  );
};

export default LoginForm;
