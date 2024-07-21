import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

    const [input,setInput] = new useState(
        {
            "name":"","phone":"","email":"","password":"","cnfpass":""
        }
    )
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        if (input.password==input.cnfpass) {
            
            let newInput = 
            {
                "name":input.name,"phone":input.phone,"email":input.email,"password":input.password
            }
            
            axios.post("http://localhost:8080/signup",newInput).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Registered successfully")
                        setInput({"name":"","phone":"","email":"","password":"","cnfpass":""})
                    } else {
                        alert("Email id already exits")
                        setInput({"name":"","phone":"","email":"","password":"","cnfpass":""})
                    }
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )

        } else {
            alert("Password and confirm password doesn't match")
        }
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <label htmlFor="" className="form-label">Phone No</label>
                        <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler}/>
                        </div>                      
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br><br></br>
                            <a href="/" className="btn btn-primary">Back To Login</a> 
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br><br></br>
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup