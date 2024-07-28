import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Createpost = () => {

  const [input,setInput] = useState(
    {"Message":"","userId":sessionStorage.getItem("userId")}
  )

  const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
  const readvalue = ()=>{
    console.log(input)
    axios.post("http://localhost:8080/create",input,{
      headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
    }).then(
      (response)=>{
        if (response.data.status=="Success") {
          alert("Posted successfully")
        } else {
          alert("Something went wrong!")
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
      <Navbar/>
      <div className="container">
        <div className="row">
          <h3><center>Compose Your Thoughts</center></h3>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                  <label htmlFor="" className="form-label">Post Message</label>
                  <textarea name="Message" id="" className="form-control" value={input.Message} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                  <button className="btn btn-warning" onClick={readvalue}>Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createpost