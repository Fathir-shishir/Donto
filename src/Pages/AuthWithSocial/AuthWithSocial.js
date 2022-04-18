import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AuthWithSocial = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div  className='w-50 mx-auto mb-5'>
        <div className='d-flex w-100 align-items-center'>
            <div style={{height : '1px'}} className='bg-primary w-50' > </div>
            <div>
                <p className='mt-2 px-2'>or</p>
            </div>
            <div style={{height : '1px'}} className='bg-primary w-50'></div>
        </div>
        <div>
            <button onClick={() => signInWithGoogle()} className='border-0  mt-2 px-3 py-2 d-block mx-auto w-50'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />  Google Sign IN
            </button> 
        </div>
            
        </div>
    );
};

export default AuthWithSocial;