import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Newsletter = () => {
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const validate = () => {
        const email = document.querySelector('#newsletter-email').value;
        return /\S+@\S+\.\S+/.test(email);
    };

    const submitEmail = () => {
        if (validate()) {
            setStatus('success');
            setMessage('Thank you for signing up.');
        }
        else {
            setStatus('danger');
            setMessage('Invalid email.');
        }
    }

    return (
        <div className="newsletter_Wrapper"> 
            <h2>NYHEDSBREV</h2>
            <hr></hr>
            <p>Modtag vores gratis undervisningsmaterialer og masser af inspiration til dig som lærer fire gange årligt.</p>
       
        <div className="newsletter">
            
            <div className="newsletter__message">
                Please enter your email
            </div>
            <div className="input-group input-group-large">
                <input id="newsletter-email" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={submitEmail}>Submit</button>
            </div>
            { status ? (
                <div className={"alert alert-" + status} role="alert">
                    {message}
                </div>
            ) : ('')}
            
        </div><hr></hr></div>
	);
};

Newsletter.propTypes = {
    
};

export default Newsletter;