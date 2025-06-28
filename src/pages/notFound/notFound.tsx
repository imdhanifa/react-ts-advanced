import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/home" className={styles.backButton}>
        Go back to Home
      </Link>
    </div>
  );
}
