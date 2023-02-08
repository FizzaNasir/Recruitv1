import React from "react";
import { Link } from "react-router-dom";
import styles from "./style";
const Header2 = ({ onSearch }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>
        <Link to="/home" style={styles.titleLink}>
          Recruuit
        </Link>
      </h1>
      <nav>
        <ul style={styles.navList}>
          <form style={styles.navItem}>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>

          <li style={styles.navItem}>
            <Link to="/dashboard" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contactUs" style={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
