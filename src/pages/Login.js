import React from 'react'
import "./Login.css" 
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {

  const navigate = useNavigate()

function handlelogin(e){
  e.preventDefault()
  let data = new FormData(e.currentTarget)

  axios.post("http://127.0.0.1:8000/login/", data)
  .then((res) => {
    localStorage.setItem("token", res.data.access)
    alert("login successfully")
    window.location.href = "/"
  })
  .catch((err) =>{
    console.log(err.response.data.detail);
  })

}

  return (
    <div>
     <div className='container'>
     <div className='border w-100'>
     <h1 style={{textAlign: "center"}}>Welcome</h1>
      <p style={{textAlign: "center"}}>Login to your account</p><br />
      <div className='login'>
      <form onSubmit={handlelogin}>

        <div className='username'>
        <label style={{textAlign: "center"}} htmlFor="Email">Email</label>
        <input name='email' className='form-control' type="text" placeholder='Email' required />
        </div>
         
        <div className='password position-relative'>
        <label htmlFor="password" className='form-label'>Password</label>
          <input name='password' className='form-control' type="text" placeholder='password' required />
          <button type='btn' className=' btn position-absolute top-50 end-0'>&#x1f441;</button>
        </div>

        <div className=''>
          <button className='btn w-100 mt-3 btn-outline-primary' type='submit'>Login</button> <br />

          <Link to="/signup" className='btn btn-primary align-item-center mt-3'>SignUp</Link>
        <p style={{textAlign: "center"}}>click to create an account</p><br />
        </div>
      </form>
      </div>
     </div>

     </div>
      

    </div>
  )
}

export default Login