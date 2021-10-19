import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
    const { handleInGoogleSign } = useFirebase()
    return (
        <div className="mt-3 text-center">
            <h2>Register: Create Account</h2>
            <form >
                <input type="text" placeholder=" Your Email" />
                <br />
                <input className="mt-2" type="text" placeholder='Your Password' />
                <br />
                <input className="mt-2" type="text" placeholder='Re-enter Password' />
                <br />
                <input type="submit" className="mt-2" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <div>----------or-----------</div>
            <button className="btn-regular mt-2" onClick={handleInGoogleSign}>Google Sign In</button>
        </div>
    );
};

export default Register;