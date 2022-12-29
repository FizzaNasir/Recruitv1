import styles from './styles.module.css'

const Main = () => {
  const handleLogout = () => {
    window.location.reload()
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.navbar}>
        <h1>Recruuit</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1 style={{ textAlign: 'center' }}>Ready to get your Dream Job</h1>
    </div>
  )
}

export default Main
