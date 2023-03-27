import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style'
const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>
        <Link to='/home' style={styles.titleLink}>
          Recruuit
        </Link>
      </h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to='user/dashboard' style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to='/contactUs' style={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to='/about' style={styles.navLink}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
