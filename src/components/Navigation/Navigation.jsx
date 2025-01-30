import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import styles from './Navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
          <div className={styles.userMenu}>
            <span className={styles.username}>Hello, {user.name}!</span>
            <button className={styles.logoutButton} onClick={() => dispatch(logout())}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/register" className={styles.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
