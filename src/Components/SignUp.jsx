import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        phone: '',
        email: '',
        password: ''
    });


    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { formData })
            .then((result) => {
                console.log(result);
                navigate('/signin');
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="form-container">
            <form className="signup-form">
                <h2>Registration Form</h2>
                <hr />
                <div className='full-name'>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="lastName" id="lastname">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>
                <div className='place'>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                </div>
                <div className='bio'>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className='input-icon'>
                            <input type={visiblePassword ? "text" : "password"} className='password-input' id="password" name="password" value={formData.password} onChange={handleChange} required />
                            <span className='eye' onClick={() => setVisiblePassword(!visiblePassword)}>
                                {visiblePassword ? <IoEye /> : <IoEyeOff />}
                            </span>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={onSubmit}>Sign Up</button>
            </form>
            <div className='already'>
                <p>Already have account?</p>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    )
}

export default SignUp;


