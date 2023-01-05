import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navbar}>
        <h1>Recruuit</h1>
      </div>
    </div>
  );
};

export default Header;
