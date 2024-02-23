import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
export default function ContactForm({ onAdd }) {
  const usernameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const { username, number } = values;
    onAdd({
      id: nanoid(),
      username: username,
      number: number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={{}}
    >
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
