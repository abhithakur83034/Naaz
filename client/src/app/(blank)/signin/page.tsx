'use client'
import { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'; // Import useForm hook
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import AuthService from '@/app/services/authService';

const Page = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm(); 
    const router = useRouter();

    const onSubmit = (data:any) => {
        console.log("values", data);

        AuthService.login(data)
            .then((res) => {
                console.log(res.data);
                toast.success(res.data.message);
                localStorage.setItem('user', JSON.stringify(res?.data))
                if (res?.data?.role == 'USER') {
                    router.push('/')
                } else {
                    router.push('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                toast.error(error.response.data.message);
            });
    };

    useEffect(() => {
        const rememberMeValue = localStorage.getItem('rememberMe');
        if (rememberMeValue) {
            try {
                setValue('rememberMe', JSON.parse(rememberMeValue));
            } catch (error) {
                console.error("Error parsing rememberMe value:", error);
            }
        }
    }, []);

    return (
        <Container>
            <h1>Welcome to YourApp</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Username"
                        {...register('email', { required: 'Username is required' })}
                    />
                    {/* {errors.username && <span className="error">{errors?.username?.message}</span>} */}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {/* {errors.password && <span className="error">{errors?.password?.message}</span>} */}
                </Form.Group>
                <Form.Group controlId="rememberMe" className="checkbox">
                    <Form.Check
                        type="checkbox"
                        label="Remember Me"
                        {...register('rememberMe')}
                    />
                </Form.Group>
                <div className="forgot-password">
                    <Link href="/forgot-password">Forgot Password?</Link>
                </div>
                <Button variant="primary" type="submit">Submit</Button>
                <div className="existing-account">
                    Create New account? <Link href="/signup">Signup</Link>
                </div>
            </Form>
        </Container>
    );
};

export default Page;
