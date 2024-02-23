import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
export default function ContactForm({ onAdd }) {
  const usernameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.formReset();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={usernameId}>Name</label>
        <Field type="text" name="name" id={usernameId} />

        <label htmlFor={numberId}>Number</label>
        <Field type="number" name="number" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
