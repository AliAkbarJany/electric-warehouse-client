import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    if (user || guser) {
        navigate(from, { replace: true })
    }
    let errorMessage;
    if (error || gerror) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message}</p>;
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(email,password)
        signInWithEmailAndPassword(email, password)
    }

    console.log(email)
    const resetPassword = async (event) => {
        // const email = ruser?.email
        const email = event.target?.email?.value
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            alert('please enter your email address')
        }

    }
    return (
        <div className='login-container mt-5 w-50 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                {errorMessage}
                {/* <Button variant="primary" type="submit">
                    Login
                </Button> */}
                <button class="btn btn-success" type='submit'>
                    Login
                </button>
            </Form>
            <p>Are You New Here?? <Link to='/register' className='text-danger fw-bolder'>PLEASE REGISTER</Link> </p>

            <p className='fw-bolder'>Forget Your Password????

                <button className='btn btn-link btn-primary' onClick={async () => {

                    if (email) {
                        await sendPasswordResetEmail(email);
                        alert('Sent email');
                    }
                    else {
                        alert('please enter your email address')
                    }
                }}>You Can Reset Password
                </button>

            </p>
            <div class="divider">OR</div>
            <div className='text-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-active btn-success font-bold "
                >CONTINUE WITH GOOGLE
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;