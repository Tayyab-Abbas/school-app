import React from 'react';
import './signup.css';
// import Background from  '../../assets/picture/bg1.jpg';
import { useHistory } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";

  const Signup  = () => {

    const history = useHistory();

    return(
    
        <>
    
    <div className="container-fluid "  >

   
    <div className="row justify-content-center mx-5 " >
    <div className="colunmstyle1 col-md-4 col-lg-6 rounded mt-5 mb-5 " >
    



    <Formik
							initialValues={{}}
							validationSchema={SignupValidationSchema}
							onSubmit={async (values, { resetForm }) => {
                console.log(values);
              }}>
							{({ handleSubmit, handleChange, values, errors, handleReset }) => (
              
              
    <form onSubmit={handleSubmit}  className=" mt-4 mb-4" >

    <div class="form-group" >
    <label for="firstname">Name</label>
    <input type="text" class="form-control" id="Inputtext1" name="Inputtext1" placeholder="Enter First Name"
    value={values.firstname} onChange={handleChange} invalid={errors.Inputtext1}>
    </input>
    {errors.Inputtext1 &&
                      <span className={`form-error text-danger`}>{errors.Inputtext1}</span>}
    
    </div>
  <div class="form-group" >
    <label for="Secondname">Father Name</label>
    <input type="text" class="form-control" id="Inputtext2" name="Inputtext2" placeholder="Enter Second Name"
    value={values.Secondname} onChange={handleChange} invalid={errors.Inputtext2}>
    </input>
    {errors.Inputtext2 &&
                      <span className={`form-error text-danger`}>{errors.Inputtext2}</span>}
  </div>
  
    <div class="form-group" >
    <label for="emailname">Email address</label>
    <input type="email" class="form-control" id="InputEmail1" name="InputEmail1"  placeholder="Enter email"
    value={values.email} onChange={handleChange} invalid={errors.InputEmail1}>
    </input>
    {errors.InputEmail1 &&
                      <span className={`form-error text-danger`}>{errors.InputEmail1}</span>}
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="selctor">Example select</label>
    <select  class="form-control" id="selector">
      <option>Pakistan</option>
      <option>China</option>
      
    </select>
  </div>

  <div class="form-group">
    <label for="InputPassword">Password</label>
    <input type="password" class="form-control" id="InputPassword" name="InputPassword" placeholder="Password"
    value={values.password} onChange={handleChange} invalid={errors.InputPassword}></input>
    {errors.InputPassword &&
                      <span className={`form-error text-danger`}>{errors.InputPassword}</span>}
  </div>

  <div class="form-group">
    <label for="ConfirmPassword">Confirm Password</label>
    <input type="password" class="form-control" id="InputPassword1" name="InputPassword1" placeholder="Confirm Password"
    value={values.ConfirmPassword} onChange={handleChange} invalid={errors.ConfirmPassword1}></input>
    {errors.InputPassword1 &&
                      <span className={`form-error text-danger`}>{errors.InputPassword1}</span>}
  </div>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="Check"/>
    <label class="form-check-label" for="Check">Check me out</label>
  </div>

  <div className="mt-3">
  <button type="submit" className="btn btn-primary sigIn">Sign Up</button>
  
  <button onClick={() => history.push('/signin')} className="btn btn-primary signUp ml-5 "  >Sign In</button>
  </div>
    </form>
    )}
    </Formik>
    
    </div>
    </div>
    </div>
 
    </>
    
    )
    
    }
    const SignupValidationSchema = Yup.object().shape({
      
      Inputtext1:Yup.string()
      .required('First Name is Required'),
      Inputtext2:Yup.string()
      .required('Second Name is Required'),
      InputEmail1:Yup.string()
      .required('Email is Required'),
      InputPassword: Yup.string()
      .required('Password is Required too'),
      InputPassword1: Yup.string()
      .oneOf([Yup.ref('InputPassword'), null], 'Passwords must match') 
      
    });
    export default Signup