// import React, { useState } from 'react'
// import * as Yup from 'yup';

// const Form3 = () => {

//   const [step,setStep] =useState(1)
//   const [errors,setErrors] =useState({})
//   const [data,setData] =useState({
//       firstName:"",
//       lastName:"",
//       address:"",
//       city:"",
//       zipcode:"",
//       cardnumber:"",
//       expirydate:"",
//       cvv:""
//   })


//   function handleNext (){
//      setStep (step + 1)
//   }
//   function handleBack (){
//     setStep (step - 1)
//   }

//   const step1Schema = Yup.object().shape ({
//     firstName:Yup.string().required("First Name is Required"),
//     lastName:Yup.string().required("Last Name is Required")
//   })

//   const step2Schema = Yup.object().shape({
//     address:Yup.string().required("Address is Required"),
//     city:Yup.string().required("City is Required"),
//     zipcode:Yup.string().required("Zip Code is Required").matches(/^\d+$/, 'Zip Code must be a number'),

//   })

//   const step3Schema =Yup.object().shape({
//     cardnumber:Yup.string().required("Card Number is Required").matches(/^[0-9]{16}$/, 'Credit Card must be 16 digits'),
//     expirydate:Yup.string().required("Expiry Date is Required").matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Expiry Date must be in MM/YY format'),
//     cvv:Yup.string().Required("CVV is Required").matches(/^[0-9]{3}$/, 'CVV must be 3 digits'),
//   })

//   const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData({ ...data, [name]: value });
//       };

//   return (
//     <div className='container col-md-4 p-3'>
//         <h3 className='text-center'>Multi step form</h3>
//             <form>
//             {step == 1 &&  (
//               <>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
//                     <input type="text" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="First Name"
//                         value={setData.firstName}
//                         onChange={handleChange}

//                     />
//                     {errors.firstName && <div>{errors.firstName}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
//                     <input type="text" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="Last Name"
//                         value={setData.lastName}
//                         onChange={handleChange}

//                     />
//                     {errors.lastName && <div>{errors.lastName}</div>}
//                 </div>
//                 <button className='btn btn-primary' onClick={handleNext}>Next</button>
//                 </>
//               )} 
//                {step == 2 && (
//                 <>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
//                     <input type="text" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="Address"
//                         value={setData.address}
//                         onChange={handleChange}
//                     />
//                     {errors.address && <div>{errors.address}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
//                     <input type="text" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="City"
//                         value={setData.city}
//                         onChange={handleChange}
//                     />
//                     {errors.city && <div>{errors.city}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Zip Code</label>
//                     <input type="number" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="Zip Code"
//                         value={setData.zipcode}
//                         onChange={handleChange}
//                     />
//                     {errors.zipcode && <div>{errors.zipcode}</div>}
//                 </div>
//                 <div className='d-flex justify-content-between'>
//                   <button className='btn btn-success' onClick={handleBack}>Back</button>
//                   <button className='btn btn-primary' onClick={handleNext}>Next</button>
//                 </div>
//                 </>
//               )}
//               {step == 3 && (
//                 <>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Credit Card Number</label>
//                     <input type="text" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="Credit Card Number"
//                         value={setData.cardnumber}
//                         onChange={handleChange}
//                     />
//                     {errors.cardnumber && <div>{errors.cardnumber}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Expiry Date</label>
//                     <input type="date" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="Expiry Date"
//                         value={setData.expirydate}
//                         onChange={handleChange}
//                     />
//                     {errors.expirydate && <div>{errors.expirydate}</div>}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">CVV</label>
//                     <input type="text" className="form-control"
//                         id="exampleFormControlInput1"
//                         placeholder="CVV"
//                         value={setData.cvv}
//                         onChange={handleChange}

//                     />
//                     {errors.cvv && <div>{errors.cvv}</div>}
//                 </div>
//                 <div className='d-flex justify-content-between'>
//                   <button className='btn btn-success' onClick={handleBack}>Back</button>
//                   <button className='btn btn-primary' type='submit'>Submit</button>
//                 </div>
//                 </>
//               )}   
//             </form>
//     </div>
//   )
// }

// export default Form3



import React, { useState } from 'react';
import * as Yup from 'yup';

const Form3 = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipcode: '',
    cardnumber: '',
    expirydate: '',
    cvv: '',
  });

  const step1Schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
  });

  const step2Schema = Yup.object().shape({
    address: Yup.string().required('Address is Required'),
    city: Yup.string().required('City is Required'),
    zipcode: Yup.string()
      .required('Zip Code is Required')
      .matches(/^\d+$/, 'Zip Code must be a number'),
  });

  const step3Schema = Yup.object().shape({
    cardnumber: Yup.string()
      .required('Card Number is Required')
      .matches(/^[0-9]{16}$/, 'Credit Card must be 16 digits'),
    expirydate: Yup.string()
      .required('Expiry Date is Required')
      .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Expiry Date must be in MM/YY format'),
    cvv: Yup.string()
      .required('CVV is Required') 
      .matches(/^[0-9]{3}$/, 'CVV must be 3 digits'),
  });

  const handleNext = async (e) => {
    e.preventDefault();
    let schema;
    
  
    if (step === 1) schema = step1Schema;
    if (step === 2) schema = step2Schema;
    if (step === 3) schema = step3Schema;

    try {
      
      await schema.validate(data, { abortEarly: false });
      setErrors({}); 
      setStep(step + 1);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      
      setErrors(validationErrors); 
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  function handleSubmit(){
    console.log(data);
    
  }

  return (
    <div className='container col-md-4 p-3'>
      <h3 className='text-center'>Multi-step Form</h3>
      <form onClick={handleSubmit}>
        {step === 1 && (
          <>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={data.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={data.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
            <button className='btn btn-primary' onClick={handleNext}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="Address"
                value={data.address}
                onChange={handleChange}
              />
              {errors.address && <div className="text-danger">{errors.address}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                placeholder="City"
                value={data.city}
                onChange={handleChange}
              />
              {errors.city && <div className="text-danger">{errors.city}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">Zip Code</label>
              <input
                type="text" 
                className="form-control"
                name="zipcode"
                id="zipcode"
                placeholder="Zip Code"
                value={data.zipcode}
                onChange={handleChange}
              />
              {errors.zipcode && <div className="text-danger">{errors.zipcode}</div>}
            </div>
            <div className='d-flex justify-content-between'>
              <button className='btn btn-success' onClick={handleBack}>Back</button>
              <button className='btn btn-primary' onClick={handleNext}>Next</button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="mb-3">
              <label htmlFor="cardnumber" className="form-label">Credit Card Number</label>
              <input
                type="text"
                className="form-control"
                name="cardnumber"
                id="cardnumber"
                placeholder="Credit Card Number"
                value={data.cardnumber}
                onChange={handleChange}
              />
              {errors.cardnumber && <div className="text-danger">{errors.cardnumber}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="expirydate" className="form-label">Expiry Date</label>
              <input
                type="text" 
                className="form-control"
                name="expirydate"
                id="expirydate"
                placeholder="Expiry Date (MM/YY)"
                value={data.expirydate}
                onChange={handleChange}
              />
              {errors.expirydate && <div className="text-danger">{errors.expirydate}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input
                type="text"
                className="form-control"
                name="cvv"
                id="cvv"
                placeholder="CVV"
                value={data.cvv}
                onChange={handleChange}
              />
              {errors.cvv && <div className="text-danger">{errors.cvv}</div>}
            </div>
            <div className='d-flex justify-content-between'>
              <button className='btn btn-success' onClick={handleBack}>Back</button>
              <button className='btn btn-primary' type='submit'>Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Form3;
