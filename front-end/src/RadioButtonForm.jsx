import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const StepOneSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

const StepTwoSchema = Yup.object().shape({
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const RadioButtonForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = (isValid) => {
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
      }}
      validationSchema={step === 1 ? StepOneSchema : StepTwoSchema}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={(values) => {
        console.log("Final Form Values:", values);
      }}
    >
      {({ isValid, handleBlur, setFieldTouched }) => (
        <Form>
          {step === 1 && (
            <div>
              <div>
                <label>First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  onBlur={(e) => {
                    handleBlur(e);
                    setFieldTouched("firstName", true);
                  }}
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  onBlur={(e) => {
                    handleBlur(e);
                    setFieldTouched("lastName", true);
                  }}
                />
                <ErrorMessage name="lastName" component="div" />
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    onBlur={(e) => {
                      handleBlur(e);
                      setFieldTouched("gender", true);
                    }}
                  />
                  Male
                </label>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    onBlur={(e) => {
                      handleBlur(e);
                      setFieldTouched("gender", true);
                    }}
                  />
                  Female
                </label>
                <ErrorMessage name="gender" component="div" />
              </div>
              <div>
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  onBlur={(e) => {
                    handleBlur(e);
                    setFieldTouched("email", true);
                  }}
                />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
          )}
          <div>
            {step > 1 && (
              <button type="button" onClick={handleBack}>
                Back
              </button>
            )}
            {step < 2 && (
              <button type="button" onClick={() => handleNext(isValid)}>
                Next
              </button>
            )}
            {step === 2 && <button type="submit">Submit</button>}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RadioButtonForm;
