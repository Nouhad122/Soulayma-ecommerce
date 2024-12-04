import React, { useRef, useState } from 'react';
import './Registration.css';
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const SignIn = () => {
    const form = useForm();
    const {register, handleSubmit, formState:{errors}} = form;

    const onSubmit = (data) =>{
        console.log(data)
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (inpRef) =>{
        inpRef.current.focus();
    }
  return (
    <div className='form-container'>
        <div className="login-signup-form">
            <img src="https://voilechic.com/cdn/shop/files/20231230-28.png?v=1713439786" alt='signin-img'/>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <h1>Sign In</h1>
                <div className="input-fields">
                    <div className="one-input-wrapper">
                        <div className='input-container'>
                         <input id="email" className="email" type="email" placeholder="Email Adress" ref={emailRef}
                            {...register('email',{
                            required:{
                              value: true,
                              message: "Email is required*"
                            },
                            pattern:{
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email"
                            },
                            validate:{
                              NotBlackListed: (fieldValue) =>{
                                return(
                                  !fieldValue.endsWith("baddomain.com") ||
                                  "This domain is not Supported"
                                );
                              }
                             }})}/>
                            <div className="form-icons">
                            <FaRegEnvelope onClick={() => handleFocus(emailRef)} />
                            </div>
                        </div>
                    <p className='error-message'>{errors.email?.message}</p>
                    </div>

                    <div className="one-input-wrapper">
                    <div className='input-container'>
                      <input id="password" className="password" type= {showPassword ? "text" : "password"} placeholder="Password" ref={passwordRef}
                         {...register('password',{
                            required:{
                                value: true,
                                 message: "Password is required*"
                            }
                      })}/>
                        <div className="form-icons">
                            <FaRegEye onClick={() => setShowPassword(!showPassword)}/>
                             <IoLockClosedOutline onClick={() => handleFocus(passwordRef)}/>
                        </div>
                    </div>
                    <p className='error-message'>{errors.password?.message}</p>
                    </div>

                </div>
                <p className='switch-mode'>Don't have an account? <Link to={`/sign up`} className='form-link'>Sign Up</Link></p>
                <button className="custom-btn btn-15 regist-btn">Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn
