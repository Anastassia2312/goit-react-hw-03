import { useId } from "react";
import { Formik, Form, Field } from "formik";
export default function ContactForm() {
  const usernameId = useId();
  const numberId = useId();
  return (
    <Formik initialValues={{}} onSubmit={{}} validationSchema={{}}>
      <Form>
        <label htmlFor={usernameId}>Name</label>
        <Field type="text" name="username" id={usernameId} />

        <label htmlFor={numberId}>Number</label>
        <Field type="number" name="number" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
