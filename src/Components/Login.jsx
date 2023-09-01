import React, { useState } from 'react'
import logo from "../Assets/diprella_logo.svg"
import f from "../Assets/facebook.png"
import g from "../Assets/G+.jpg"
import i from "../Assets/In.png"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
const Login = () => {
    let navigate=useNavigate()
    let emailData = localStorage.getItem("email")
    let PasswordData = localStorage.getItem("password")

    let [email,setEmail]=useState("")
    let [pass,setPass]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        if(emailData==email && PasswordData == pass)
        {
           toast.success("LOGIN SUCCESSFULLY")
           navigate("/home")
        }
        else{
            toast.error("PLEASE PROVIDE PROPER CREDENTIALS")
        }
    }
  return (
    <section id='main'>
         <ToastContainer/>
        <article>
            <div id='block1'>
                    <img src={logo} alt="" id='logo' />
                   <div id='detail'>
                    <h1>Login to Your Account</h1>
                        <p>Login using social networks</p>
                        <div id='btns'>
                            <button><img src={f} alt="" /></button> 
                            <button><img src={g} alt="" /></button>
                            <button><img src={i} alt="" /></button>
                        </div>
                        <hr />
                        <form action="" id='form' onSubmit={handleSubmit}>
                            <div className='formgroup'>
                                <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div className='formgroup'>
                                <input type="text" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}} />
                            </div>
                            <div className='formgroup'>
                                <button>Sign In</button>
                            </div>
                        </form>
                   </div>
            </div>
            <div id='block2'>
                <h1 id='a'>New Here?</h1>
                <p>Sign up and discover a great <br /> amount of new opportunities!</p>
                <Link to={"/signup"}><button id='sign' >Sign Up</button></Link>

            </div>
        </article>
    </section>
  )
}

export default Login