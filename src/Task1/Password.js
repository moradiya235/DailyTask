import React, { useState } from 'react';
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const Password = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState("");  
    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);


        if (!passwordRegex.test(value)) {
            setError("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.");
        } else {
            setError("");
        }
    };

    return (
        <div className='container col-md-6'>
            <div className="mb-3 d-flex p-5">
                <label htmlFor="passwordInput" className="form-label">Password:</label>
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className='' onClick={() => setShowPassword(prev => !prev)}>
                    <span>
                        {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                    </span>
                </div>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Password;
