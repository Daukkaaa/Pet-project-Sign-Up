import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <div className='form-con'>
                    <h2>Sign Up</h2>
                    <div className='full-name'>
                        <label htmlFor="name">First Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            required
                        />
                    </div>
                    <div className='bio'>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className='place'>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            required
                        />
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            required
                        />
                    </div>
                    <div className='pasword'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;

