import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        return (

            errorElement = <div>
                <p className='text-danger text-center'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-success w-50' style={{ height: '1px' }}></div>
                <div className='px-3'>or</div>
                <div className='bg-success w-50' style={{ height: '1px' }}></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-25'>Google Sign In</button>
            </div>
        </div>
    );
};

export default GoogleLogin;