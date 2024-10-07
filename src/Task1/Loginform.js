// import React, { useState } from 'react'

// const Loginform = () => {

//     const [data,setData] =useState({
//         email:"",
//         password:""
//     });
//     const [errors, setErrors] = useState({
//         email: '',
//         password: ''
//     });

//     const [sumbit]
//         const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...data,
//             [name]: value
//         });
//     };

//         const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validate()) {
//             setIsSubmitted(true);  
//         } else {
//             setIsSubmitted(false);  
//         }
//     };
//     return (
//         <div className='container col-md-6 p-5' >
//             <h3>Login Form</h3>
//             <form onClick={handleSubmit}>
//             <div className="mb-3">
//                 <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" 
//                 value={data.email}
//                 onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <div>
//                 <label htmlFor="inputPassword5" className="form-label">Password</label>
//                     <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" 
//                     value={data.password}
//                     onChange={handleChange}
//                 />
//                 </div>

//             </div>
//             <div className='mt-3'>
//                 <button type="submit" className='btn btn-primary'>Login</button>
//             </div>

//             {isSubmitted && (
//                      <div className="alert alert-success mt-3" role="alert">
//                          Login successful!
//                     </div>
//                )}
//                </form>
//         </div>
//     )
// }

// export default Loginform



import React, { useState } from 'react';

const Loginform = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        let valid = true;

        if (!formData.email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
            valid = false;
        }

        
        if (!formData.password) {
            errors.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitted(true);  
        } else {
            setIsSubmitted(false);  
        }
    };

    return (
        <div className='container col-md-6 p-5'>
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                </div>

                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                </div>

                <div className='mt-3'>
                    <button type="submit" className='btn btn-primary'>Login</button>
                </div>

                
                {isSubmitted && (
                    <div className="alert alert-success mt-3" role="alert">
                        Login successful!
                    </div>
                )}
            </form>
        </div>
    );
};

export default Loginform;
