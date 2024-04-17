'use client'
// pages/login.js

import Link from 'next/link';

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="card-container">
        <div className="card">
          <h2>Admin Login</h2>
          <p>Log in as an admin to access admin features.</p>
          <Link href="/admin-login"  className="btn btn-admin">
            Admin Login
          </Link>
        </div>
        <div className="card">
          <h2>User Login</h2>
          <p>Log in as a user to access user features.</p>
          <Link href="/user-login"  className="btn btn-user">
            User Login
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
