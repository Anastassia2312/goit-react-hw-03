import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});
export default function ContactForm({ onAdd }) {
  const usernameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
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
