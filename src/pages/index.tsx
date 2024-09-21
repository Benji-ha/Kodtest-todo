import Link from "next/link";
import styles from "../styles/Home.module.css";


function Home() {

return (
  <div className={styles.page}>
    
    <header>
      <img src="/campcation-logo.svg" alt="" />
    </header>
    <h1>Homepage</h1>

    <ul>
      <Link href="/Todo">
      <li>Todo list</li>
      <hr />
      </Link>
      <br />
      <Link href="/ThankYou">
      <li>Tack för intervjun</li>
      <hr />
      </Link>
    </ul>

  </div>
)
};

export default Home;