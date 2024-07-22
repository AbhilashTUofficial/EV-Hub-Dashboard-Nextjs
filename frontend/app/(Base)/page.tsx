import Dashboard from "../Components/(Dashboard)/layout";
import Stations from "../Components/(Stations)/layout";
import styles from "./page.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <Dashboard />
      {/* <Stations /> */}

    </main>
  );
}
