import React from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {

  const navigate = useNavigate()

  function handlesignup(e){
    e.preventDefault()
    let data = new FormData(e.currentTarget)
  
    axios.post("http://localhost:8000/signup/", data)
    .then((res) => {
      alert("signup successfully")
      navigate("/")
      
    })
    .catch((err) => {
      let allerrors = err.response.data

      for(let key in allerrors){
        alert(key + ": " +allerrors[key])
      }
    })
  }

  
  return (
    <div>
      <div className='container border'>
        
          <h1 style={{textAlign: "center"}}>Sign Up</h1>
          <h5 style={{textAlign: "center"}}>creat account</h5><br />

          <div className='signup'>
          <form onSubmit={handlesignup}>
                <label style={{textAlign: "center"}} htmlFor="Name"></label>
                <input name='first_name' type="text" placeholder='first_name' required/>
                <br />

                <div>
                <label style={{textAlign: "center"}} htmlFor="Surname"></label>
                <input className='w-10' name='last_name' type="text" placeholder='last_name' />
                </div><br />

                <div>
                <label htmlFor="Email"></label>
                <input name='email' type="text" placeholder='Email'/>
                </div><br />
                
                <div>
                <label htmlFor="Password"></label>
                <input name='password' type="text" placeholder='Password'/>
                </div><br/>
                  
                
                <div>
                  <input type="file" name='image' />
                </div>

                <div className='btn'>
                <button className='btn btn-outline-primary' type='Submit'>Submit</button>
                <p className='text-primary'>already have an account</p>
            </div>
            </form>
          
           
          </div>
      </div>
    </div>
  )
}

export default Signup