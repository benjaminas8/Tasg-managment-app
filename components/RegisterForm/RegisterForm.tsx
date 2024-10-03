import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const router = useRouter();

  const jwt = cookie.get("task_manager_app_jwt");

  const createUser = async () => {
    try {
      const body = {
        name: name,
        email: email,
        password: password,
      };

      const headers = {
        authorization: jwt,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/register`,
        body,
        {
          headers,
        }
      );

      console.log(response);

      if (response.status === 200) {
        router.push("/");
        setError(false);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Create new user</h1>
      <input
        value={name}
        placeholder="Name"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={email}
        placeholder="example@gmail.com"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        isLoading={false}
        title="Create User"
        onClick={() => {
          createUser();
        }}
      />
      {isError && (
        <div className={styles.danger}>
          <h3>Check if</h3>
          <p> Email format is valid</p>
          <p>Name starts with an uppercase letter</p>
          <p>
            Password is at least 6 characters long and contain at least one
            number
          </p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
