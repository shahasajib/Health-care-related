import React from 'react';
import banner from '../../Images/banner_error_404.jpg'

const Error = () => {
    return (
        <div>
            <div className="col-sm-12 text-center">
                <img className="w-80" src={banner} alt="" />
                <p>Please Try To Again</p>
            </div>
        </div>
    );
};

export default Error;