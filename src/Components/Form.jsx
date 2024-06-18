import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
            <form className="signup-form">
                <h2>Registration Form</h2>
                <div className='full-name'>
                    <div>
                        <label htmlFor="name">First Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            required
                        />
                    </div>
                </div>
                <div className='place'>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        />
                    </div>
                </div>
                <div className='bio'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default Form;
