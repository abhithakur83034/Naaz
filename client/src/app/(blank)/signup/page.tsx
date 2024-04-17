"use client"

import { Col, Container, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';

const Page = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
  });

  const onSubmit = (values:any) => {
    console.log("values", values);
    if(values.role == 'admin'){
      axios
        .post("http://localhost:4500/user/register", values)
        .then((res:any) => {
            console.log(res.data);
            // toast.success(res.data.message);
            // Reset the form here
          })
          .catch((error) => {
              console.log(error.response.data);
              // toast.error(JSON.stringify(error.response.data));
            });
        }else{

        }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label htmlFor="first_name">First Name</label>
                  <Field
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    className="form-control"
                  />
                  <ErrorMessage name="first_name" component="div" className="error" />

                  <label htmlFor="last_name">Last Name</label>
                  <Field
                    type="text"
                    name="last_name"
                    placeholder="Enter Last Name"
                    className="form-control"
                  />
                  <ErrorMessage name="last_name" component="div" className="error" />
                  <button type="submit" className="btn btn-primary">Submit</button>

                  <div className="existing-account">
                  Already have an account? <Link href="/signin">Log in</Link>
                </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
