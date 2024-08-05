import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact({ ...values, id: uuidv4() });
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field id="name" name="name" type="text" className={styles.input} />
            {touched.name && errors.name ? (
              <div
                className={
                  errors.name === "Required"
                    ? styles.requiredError
                    : styles.error
                }
              >
                {errors.name}
              </div>
            ) : null}
          </div>
          <div>
            <label htmlFor="number" className={styles.label}>
              Number
            </label>
            <Field
              id="number"
              name="number"
              type="text"
              className={styles.input}
            />
            {touched.number && errors.number ? (
              <div
                className={
                  errors.number === "Required"
                    ? styles.requiredError
                    : styles.error
                }
              >
                {errors.number}
              </div>
            ) : null}
          </div>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
