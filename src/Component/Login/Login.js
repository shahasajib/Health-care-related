import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import icon3 from '../../Images/google_icon_130924.png'

const Login = () => {
    const { handleInGoogleSign } = useFirebase();

    return (
        <div className="mt-3 text-center">
            <form>
                <h1>Log In </h1>
                <input type="text" placeholder="Enter Your Email" />
                <br />
                <input className="mt-2" type="text" placeholder='Enter Your Password' />
                <br />
                <p>Do you have an account?<Link to="/register">Create Account</Link></p>
            </form>
            <div>----------or-----------</div>
            <button onClick={handleInGoogleSign} className=" mt-2">
                <img className="icon" src={icon3} alt="" />
            </button>
        </div>
    );
};

export default Login;