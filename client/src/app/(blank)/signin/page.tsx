'use client'
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [rememberMe, setRememberMe] = useState();
  const  router = useRouter();

  useEffect(() => {
    const rememberMeValue = localStorage.getItem('rememberMe');
    if (rememberMeValue) {
        try {
            setRememberMe(JSON.parse(rememberMeValue));
        } catch (error) {
            console.error("Error parsing rememberMe value:", error);
        }
    }
}, []);


  console.log(rememberMe);
  

  const initialValues = {
    role: '', 
    username: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    role: Yup.string().required('Please select a role'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (data:any) => {
    console.log("values", data);


    if (data.rememberMe) {
      localStorage.setItem('rememberMe', data);
    } else {
      localStorage.removeItem('rememberMe');
    }


    if(data.role == 'admin'){
      axios
        .post("http://localhost:4500/admin/adminlogin", data)
        .then((res) => {
            console.log(res.data);
            toast.success(res.data.message);
            localStorage.setItem('admin',JSON.stringify(data))
            router.push('/dashboard')
          })
          .catch((error) => {
              console.log(error);
              toast.error(error.response.data.message);
            });  
        }else{
      axios
        .post("http://localhost:4500/user/login", data)
        .then((res) => {
            console.log(res.data);
            toast.success(res.data.message);
            localStorage.setItem('user',JSON.stringify(data))
            router.push('/') 
          })
          .catch((error) => {
              console.log(error.response.data);
              toast.error(error.response.data.result);
            });  
      
        }

  };

  return (
    <div className="container">
      <h1>Welcome to YourApp</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue}) => (
         
          <Form>
            <div className="card-container">
              <div 
                className={`card admin-card ${selectedRole === 'admin' ? 'active' : ''}`} 
                onClick={() => {
                  setFieldValue('role', 'admin');
                  setSelectedRole('admin');
                }}
              >
                <h2 className="card-title">Admin</h2>
                <p className="card-description">Log in as an admin to access admin features.</p>
              </div>
              <div 
                className={`card user-card ${selectedRole === 'user' ? 'active' : ''}`} 
                onClick={() => {
                  setFieldValue('role', 'user');
                  setSelectedRole('user');
                }}
              >
                <h2 className="card-title">User</h2>
                <p className="card-description">Log in as a user to access user features.</p>
              </div>
            </div>
            {values.role && (
              <>
                <label htmlFor="username">Username</label>
                <Field
                  type="email"
                  name="username"
                  placeholder="Enter Username"
                  className="form-control"
                />
                <ErrorMessage name="username" component="div" className="error" />

                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="error" />

                <div className="checkbox">
                    <Field type="checkbox"  name="rememberMe" />
                    Remember Me
                </div>

                <div className="forgot-password">
                  <Link href="/forgot-password">Forgot Password?</Link>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="existing-account">
                  Create New account? <Link href="/signup">Signup</Link>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
