import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./charSearchForm.scss";

const CharSearchForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Максимум 2 символа")
          .required("Обязательное поле"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <label htmlFor="name">Or find a character by name:</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" />
      </Form>
    </Formik>
  );
};

export default CharSearchForm;
