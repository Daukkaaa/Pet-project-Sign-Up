import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/signin", { formData })
            .then((result) => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    navigate('/signup');
                    alert("You are not registered to this service")
                }
            })
    }

    return (
        <div className="form-container">
            <form className="signup-form">
                <h2>Authorization Form</h2>
                <hr />
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
                <button type="submit" onClick={onSubmit}>Sign In</button>
            </form>
            <div className='already'>
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn;
