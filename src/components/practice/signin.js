import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import front from  '../../assets/picture/front.jpg';
import './signin.css';
import { Formik } from "formik";
import * as Yup from "yup";
const Signin  = () => {

  const history = useHistory();

    return(
    
        <>
    <div className="  container-fluid" style={{ position:"absolute"}}>
    <div className="row  mx-3 my-5 " >
    <div className="col-md-5 rounded mt-5" style={{backgroundColor:"orange",height:"400px"}} >

    <Formik
							initialValues={{}}
							validationSchema={SigninValidationSchema}
							onSubmit={async (values, { resetForm }) => {
                console.log(values);
              }}>
							{({ handleSubmit, handleChange, values, errors, handleReset }) => (
              
              <form onSubmit={handleSubmit} >
        
    <div class="form-group" >
    <label className="mt-4" for="emailname">Email address</label>
    <input  class="form-control"  type="email" id="InputEmail1" name="InputEmail1"  
    value={values.email} onChange={handleChange} invalid={errors.InputEmail1} placeholder="Enter email"></input>
    {errors.InputEmail1 &&
                      <span className={`form-error text-danger`}>{errors.InputEmail1}</span>}
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>


  <div class="form-group">
    <label for="InputPassword">Password</label>
    <input type="password" class="form-control" id="InputPassword" name="InputPassword" placeholder="Password"
    value={values.password} onChange={handleChange} invalid={errors.InputPassword}></input>
  {errors.InputPassword &&
                      <span className={`form-error text-danger`}>{errors.InputPassword}</span>}
  </div>


  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="Check"></input>
    <label class="form-check-label" for="Check">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">SignIn</button>
  <button onClick={()=>history.push('/')} class="btn btn-primary " style={{float:"right"}}>Signup</button>
<div>

<a><Link to="/forgotpassword"> Forget Password?</Link></a>

</div>
    </form>
    
    )}
    </Formik>

    </div>
<div className=" col-md-5" >
  <img src={front} alt="dd" className="img mt-5 w-100 h-100"/>
</div>

    </div>
    </div>
    </>
    
    )
    
    }
    
    const SigninValidationSchema = Yup.object().shape({

      InputEmail1:Yup.string()
      .required('Email is Required'),
      InputPassword: Yup.string()
      .required('Password is Required'),
        
      
    });


    export default Signin