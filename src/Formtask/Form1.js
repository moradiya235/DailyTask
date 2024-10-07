// import React, { useState } from 'react'
// import * as Yup from 'yup';

// const Form1 = () => {
   
//     const [userName,setUserName] =useState('');
//     const [password,setPassword] =useState ('');
//     const [errors,setErrors] =useState({})

//     const NewUserSchema = Yup.object().shape({
//       userName:Yup.string().required("User Name is Required"),
//       password:Yup.string().required("Password is Required").min(8, 'Password must be at least 8 characters'),
//     }) 

//      function handleSubmit (){
//        NewUserSchema.validate({userName,password}),
//        console.log({userName,password});
       
//      }

//   return (
//     <div className='container col-md-4 p-5'>
//       <h2 className='text-center'>Register</h2>
//       <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
//         <input type="text" className="form-control" 
//         id="exampleFormControlInput1" 
//         placeholder="User Name" 
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}

//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
//         <input type="password" className="form-control" 
//         id="exampleFormControlInput1" 
//         placeholder="Password" 
//         value={password}
//         onChange={(e) =>setPassword( e.target.value)}

//         />
//       </div>
//       <div>
//         <button type='submit' className='btn btn-primary w-100'>Submit</button>
//       </div>
//       </form>
//     </div>
//   )
// }

// export default Form1



import React, { useState } from 'react';
import * as Yup from 'yup';

const Form1 = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const NewUserSchema = Yup.object().shape({
    userName: Yup.string().required('User Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await NewUserSchema.validate({ userName, password }, { abortEarly: false });
      console.log('Form submitted:', { userName, password });
      setErrors({});
    } catch (err) {
    
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container col-md-4 p-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name</label>
          <input
            type="text"
            className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
            id="userName"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form1;

