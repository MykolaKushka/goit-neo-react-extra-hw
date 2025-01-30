import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <h1>Welcome to the Contact Book!</h1>
      {isLoggedIn ? (
        <p className={styles.loggedInMessage}>
          You are logged in as <strong>{user.name}</strong>.
        </p>
      ) : (
        <>
          <p>Please log in to access your contacts.</p>
          <div className={styles.formWrapper}>
            <LoginForm />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
