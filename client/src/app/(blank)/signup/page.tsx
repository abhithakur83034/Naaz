"use client"
import { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthService from '@/app/services/authService';
import Link from 'next/link';

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data:any) => {
      AuthService.register(data)
      .then((res:any) => {
          console.log(res.data);
          toast.success(res.data.message);
      })
      .catch((error:any) => {
          console.log(error.response.data);
          toast.error(error.response.data.result);
      });
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Sign Up</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" {...register("first_name", { required: true })} />
                            {errors.first_name && <span className="error">First Name is required</span>}
                        </Form.Group>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" {...register("last_name", { required: true })} />
                            {errors.last_name && <span className="error">Last Name is required</span>}
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" {...register("phone", { required: true })} />
                            {errors.phone && <span className="error">Phone is required</span>}
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...register("email", { required: true })} />
                            {errors.email && <span className="error">Email is required</span>}
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" {...register("password", { required: true })} />
                            {errors.password && <span className="error">Password is required</span>}
                        </Form.Group>
                        <Form.Group controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" {...register("role", { required: true })}>
                                <option value="">Select Role</option>
                                <option value="ADMIN">Admin</option>
                                <option value="USER">User</option>
                            </Form.Control>
                            {errors.role && <span className="error">Role is required</span>}
                        </Form.Group>
                        <div className="existing-account">
                    Already have an account? <Link href="/signin">Signin</Link>
                </div>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Page;
