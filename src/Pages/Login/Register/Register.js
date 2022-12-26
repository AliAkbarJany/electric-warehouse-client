import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    if (user || guser) {
        navigate('/home')
    }

    let errorMessage;
    if (error || gerror) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message}</p>;
    }

    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='mt-5 w-50 mx-auto'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Have An Account??? <Link to='/login' className='fw-bolder text-success'>PLEASE LOGIN</Link> </p>
            <div class="divider">OR</div>
            <div className='text-center'>
                {errorMessage}
            </div>

            <div className='text-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-active btn-primary "
                >CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Register;