import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";

const Forgotpassword  = () => {
  const history = useHistory();
    return(
    
        <>
    
    <div className="container" >
    <div className="row justify-content-center mx-md-2 my-md-2 my-lg-0 mx-lg-0" >
    <div className="col-md-4 col-lg-6 col-xl-4 rounded mt-5 " style={{backgroundColor:"lightblue",height:"400px"}} >
    

    <Formik
							initialValues={{}}
							validationSchema={forgotPasswordSchema}
							onSubmit={async (values, { resetForm }) => {
                console.log(values);
                
              }}>
							{({ handleSubmit, handleChange, values, errors, handleReset }) => (
              
              


    <form onSubmit={handleSubmit} className="mt-5 mb-5 ">
        
    
    <div class="form-group ">
    <label for="InputPassword">New Password</label>
    <input invalid={errors.InputPassword} type="password" class="form-control" id="InputPassword" name='InputPassword' placeholder="New Password"
    value={values.InputPassword} onChange={handleChange}></input>
    {errors.InputPassword &&
                      <span className={`form-error text-danger`}>{errors.InputPassword}</span>}
  </div>

  <div class="form-group">
    <label for="InputPassword1">Confirm Password</label>
    <input invalid={errors.InputPassword1} type='password' class="form-control" id="InputPassword1" name="InputPassword1" placeholder="Confirm Password"
    value={values.confirmpassword} onChange={handleChange}></input>
    {errors.InputPassword1 &&
                      <span className={`form-error text-danger`}>{errors.InputPassword1}</span>}
  </div>

  
  <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    )}
    </Formik>
    
    </div>
    </div>
    </div>
 
    </>
    
    )
    
    }

    const forgotPasswordSchema = Yup.object().shape({
      InputPassword: Yup.string()
        .required('password is Required'),
        InputPassword1: Yup.string()
        .oneOf([Yup.ref('InputPassword'), null], 'Passwords must match')
      
    });
   
    export default Forgotpassword