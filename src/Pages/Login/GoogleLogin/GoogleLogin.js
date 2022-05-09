import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const googleProvider = new GoogleAuthProvider();

const GoogleLogin = () => {
    /*  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 
     const signInWithGoogle = () => {
         signInWithPopup(auth, googleProvider)
             .then(result => {
                 const user = result.user
             })
     } */
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-success w-50' style={{ height: '1px' }}></div>
                <div className='px-3'>or</div>
                <div className='bg-success w-50' style={{ height: '1px' }}></div>
            </div>
            <div>
                <button className='btn btn-dark w-50'>Google Sign In</button>
            </div>
        </div>
    );
};

export default GoogleLogin;