import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts"><RegistrationPage /></RestrictedRoute>} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts"><LoginPage /></RestrictedRoute>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login"><ContactsPage /></PrivateRoute>} />
      </Route>
    </Routes>
  );
};

export default App;
