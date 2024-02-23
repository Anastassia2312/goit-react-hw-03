import { useId } from "react";
import { Formik, Form, Field } from "formik";
export default function ContactForm() {
  const usernameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={{}}>
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
