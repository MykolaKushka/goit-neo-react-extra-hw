import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">Name</label>
        <Field className={styles.input} type="text" name="name" id="name" />
        <ErrorMessage className={styles.error} name="name" component="div" />

        <label className={styles.label} htmlFor="email">Email</label>
        <Field className={styles.input} type="email" name="email" id="email" />
        <ErrorMessage className={styles.error} name="email" component="div" />

        <label className={styles.label} htmlFor="password">Password</label>
        <Field className={styles.input} type="password" name="password" id="password" />
        <ErrorMessage className={styles.error} name="password" component="div" />

        <button className={styles.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
