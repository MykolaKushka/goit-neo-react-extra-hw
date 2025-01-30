import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <Field
          className={styles.input}
          type="email"
          name="email"
          id="email"
        />
        <ErrorMessage className={styles.error} name="email" component="div" />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.input}
          type="password"
          name="password"
          id="password"
        />
        <ErrorMessage className={styles.error} name="password" component="div" />

        <button className={styles.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
