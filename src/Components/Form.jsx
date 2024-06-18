import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";

const Form = (props) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <div className="form-container">
            <form className="signup-form">
                <h2>Registration Form</h2>
                <hr />
                <div className='full-name'>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={props.formData.firstName} onChange={props.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="lastName" id="lastname">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={props.formData.lastName} onChange={props.handleChange} />
                    </div>
                </div>
                <div className='place'>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" value={props.formData.country} onChange={props.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" value={props.formData.phone} onChange={props.handleChange} required />
                    </div>
                </div>
                <div className='bio'>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" value={props.formData.email} onChange={props.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className='input-icon'>
                            <input type={visiblePassword ? "text" : "password"} className='password-input' id="password" name="password" value={props.formData.password} onChange={props.handleChange} required />
                            <span className='eye' onClick={() => setVisiblePassword(!visiblePassword)}>
                                {visiblePassword ? <IoEye /> : <IoEyeOff />}
                            </span>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default Form;
