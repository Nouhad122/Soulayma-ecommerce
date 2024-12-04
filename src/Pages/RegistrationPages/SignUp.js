import React, { useRef, useState } from 'react';
import './Registration.css';
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const SignUp = () => {
    const form = useForm();
    const {register, handleSubmit, formState:{errors}} = form;

    const onSubmit = (data) =>{
        console.log(data)
    }

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (inpRef) =>{
        inpRef.current.focus();
    }
  return (
    <div className='form-container'>
        <div className="login-signup-form">
            <img src="https://voilechic.com/cdn/shop/products/NLCH44-1DustyRose_1.jpg?v=1604976868" alt='signup-img'/>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <h1>Sign Up</h1>
                <div className="input-fields">
                <div className="one-input-wrapper">
                        <div className='input-container'>
                         <input id="firstName" className="first-name" type="text" placeholder="First Name" ref={firstNameRef}
                            {...register('firstName',{
                            required:{
                              value: true,
                              message: "FirstName is required*"
                            },
                            pattern:{
                                value: /^[a-zA-Z]+$/,
                                message: "Invalid FirstName"
                            },
                            validate:{
                              longFirstName: (fieldValue) =>{
                                return(
                                  fieldValue.length < 12 ||
                                  "FirstName is too long"
                                );
                              },
                              shortFirstName: (fieldValue) =>{
                                return(
                                  fieldValue.length > 2 ||
                                  "FirstName is too short"
                                );
                              }
                             }})}/>
                            <div className="form-icons">
                            <FaRegUser onClick={() => handleFocus(firstNameRef)} />
                            </div>
                        </div>
                    <p className='error-message'>{errors.firstName?.message}</p>
                    </div>

                    <div className="one-input-wrapper">
                        <div className='input-container'>
                         <input id="lastName" className="last-name" type="text" placeholder="Last Name" ref={lastNameRef}
                            {...register('lastName',{
                            required:{
                              value: true,
                              message: "LastName is required*"
                            },
                            pattern:{
                                value: /^[a-zA-Z]+$/,
                                message: 'Invalid LastName'
                            },
                            validate:{
                                longLastName: (fieldValue) =>{
                                    return(
                                      fieldValue.length < 12 ||
                                      "LastName is too long"
                                    );
                                  },
                                  shortLastName: (fieldValue) =>{
                                    return(
                                      fieldValue.length > 2 ||
                                      "LastName is too short"
                                    );
                                  }
                             }

                            })}/>
                            <div className="form-icons">
                            <FaRegUser onClick={() => handleFocus(lastNameRef)} />
                            </div>
                        </div>
                    <p className='error-message'>{errors.lastName?.message}</p>
                    </div>

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
                            }
                            })}/>

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
                            },
                            validate:{
                                longPassword: (fieldValue) =>{
                                    return(
                                      fieldValue.length < 30 ||
                                      "Password is too long"
                                    );
                                  },
                                  shortPassword: (fieldValue) =>{
                                    return(
                                      fieldValue.length > 4 ||
                                      "Password is too short"
                                    );
                                  }
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
                <p className='switch-mode'>Already have an account? <Link to={`/sign in`} className='form-link'>Sign In</Link></p>
                <button className="custom-btn btn-15 regist-btn">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp
