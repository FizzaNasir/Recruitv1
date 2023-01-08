import { hover } from '@testing-library/user-event/dist/hover'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#412a94',
    color: '#fff',
  },
  title: {
    margin: 0,
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 3rem',
  },
  navLink: {
    color: '#fff',
    fontSize: '1.2rem',
    textDecoration: 'none',
  },
}

export default styles
