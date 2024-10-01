import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowErr, setShowErr] = useState(false);

  const loginUser = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:3003/login", body);

      if (response.status === 200) {
        cookie.set("task_manager_app_jwt", response.data.token);
        router.push("/");
      }

      console.log(response);
    } catch (err) {
      console.log("error: ", err);
      setShowErr(true);
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
      <button
        onClick={() => {
          loginUser();
        }}
      >
        Login
      </button>

      {isShowErr && <h5 className={styles.error}>Wrong email or password</h5>}
    </div>
  );
};

export default LoginForm;
