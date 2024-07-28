import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewmypost = () => {

    const [data, setData] = useState([])

    const [token,setToken] = useState(sessionStorage.getItem("token"))
    const [userId,setuserId] = useState({"userId":sessionStorage.getItem("userId")})

    const fetchData = ()=>{
        axios.post("http://localhost:8080/viewmypost",userId,{
            headers:{"token":token,"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect( ()=>{fetchData()},[] )

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                <h3><center>My Published Posts</center></h3>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                        <div class="col-md-4">
                                                <img src="data:image/png;base64,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" class="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.Message}</h5>
                                                    <p class="card-text"><small class="text-body-secondary">posted on {value.postedDate}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                            )

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewmypost