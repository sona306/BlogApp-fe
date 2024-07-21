import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const navigate = useNavigate()

    const [input,setInput] = new useState(
        {
            "email":"","password":""
        }
    )

    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:8080/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Incorrect Password") {
                    alert("Incorrect Password")
                } else if(response.data.status=="Invalid Email Id"){
                    alert("Invalid Email Id")
                }
                else {
                    let token = response.data.token
                    let userId = response.data.userId 
                    console.log(token)
                    console.log(userId)
                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)
                    navigate("/create")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )

    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <button className="btn btn-success" onClick={readValue}>SignIn</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <a href="/signup" className="btn btn-secondary">New User</a> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin
