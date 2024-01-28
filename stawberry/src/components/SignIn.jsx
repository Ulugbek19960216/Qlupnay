import React,{useState} from 'react'
import {NavLink, redirect} from "react-router-dom";
import Logo from "./partial/Logo";
import GoogleAuth from "./partial/GoogleSignIn";
import axios from 'axios';

const SignIn = () => {
    const [emailD, setEmailD] = useState({
        email: "",
        password: "",
    });

   

    function handleChange(event){
        const {name, value} = event.target;
        setEmailD({...emailD, [name]: value});
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        
      try{
        const response = axios.get("API URL")
        if(response) {
            return redirect("/homepage")
        }
      } catch (error) {
        console.log(error);
      }
    
    };


    return ( 
      <>
    <div className= "container">
        <div class="wrapper">
        <h2>{emailD.email}</h2>
        <h2>{emailD.password}</h2>
        <Logo />
        <form onSubmit={handleSubmit}>
                <input 
                    type ="email" 
                    name="email" 
                    value={emailD.email}
                    onChange={handleChange}
                    placeholder="E-mail address"/>
                <input 
                    type ="password" 
                    name="password" 
                    value={emailD.password}
                    onChange={handleChange}
                    placeholder='Password'/>
                <button type="submit">Login</button>
      </form>
      <div className="extra-con">
                <p>Forgot Password ?</p>
                <p><NavLink style={{textDecoration: "none"}} to="/signUp">Sign Up</NavLink></p>
         </div>
         <GoogleAuth type="in"/>
      </div>
    </div>
    </>
  );
}
 
export default SignIn;