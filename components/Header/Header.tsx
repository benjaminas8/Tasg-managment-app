import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>Task Managment App</div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/createTask" className={styles.link}>
              Create Task
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
