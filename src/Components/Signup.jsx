import React, { useRef, useState } from 'react'
import logo from "../Assets/white_logo.svg"
import f from "../Assets/facebook.png"
import g from "../Assets/G+.jpg"
import i from "../Assets/In.png"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
const Signup = () => {
  let navigate = useNavigate()
  let [name,setName]=useState("")
  let [surname,setSurname]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")

  let handleSubmit=(e)=>{
    e.preventDefault();
  if(name !== "" && surname !== "" && email !=="" && password !== "")
  {
    window.localStorage.setItem("name",name)
    window.localStorage.setItem("surname",surname)
    window.localStorage.setItem("email",email)
    window.localStorage.setItem("password",password)
    toast.success("REGISTERED SUCCESSFULLY")
    navigate("/")
  }
  else{
    toast.error("PLEASE PROVIDE PROPER DETAILS")
  }
  

  }
  return (
    <>
    <section id='main'>
    <article>
        <div id='block2'>
            <h1 id='a'>One Of Us?</h1>
            <p>If you already have an account,<br/> just sign in. We've missed you!</p>
            <Link to={"/"}><button id='sign' >Sign In</button></Link>

        </div>
        <div id='block1'>
                <img src={logo} alt="" id='logo' />
               <div id='detail'>
                <h1>Create Free Account</h1>
                    <p>Sign up using social networks</p>
                    <div id='btns'>
                        <button><img src={f} alt="" /></button> 
                        <button><img src={g} alt="" /></button>
                        <button><img src={i} alt="" /></button>
                    </div>
                    <hr />
                    <form action="" id='form' onSubmit={handleSubmit}>
                        <div className='formgroup'>
                            <input type="text"  placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
                            <input type="text"  name="" id="" placeholder='Surname' onChange={(e)=>{setSurname(e.target.value)}}/>
                        </div>
                        <div className='formgroup'>
                            <input type="text"  placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
                            <input type="text"  name="" id=""  placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>
                        <div className='formgroup'>
                            <button>Sign Up</button>
                        </div>
                    </form>
               </div>
        </div>
        
    </article>
</section>
</>
  )
}

export default Signup

