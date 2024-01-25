import React,{useState} from 'react'
import {NavLink} from "react-router-dom";

const SignIn = () => {
    const [emailD, setEmailD] = useState({
        email: "",
        password: "",
    });

    function handleChange(event){
        const {name, value} = event.target;

        setEmailD((prevValue) => {
            if(name === "email") {
                return {
                   email:  value,
                   password: prevValue.password,
                };
            } else if(name ==="password"){
                return {
                    password: value,
                    email: prevValue.email,
                };
            }
        })
        
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle sign-in logic here
    
    };

    return ( 
    <div className= "container">
        <h2>{emailD.email}</h2>
        <h2>{emailD.password}</h2>
      <form onSubmit={handleSubmit}>
            <div class="wrapper">
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
                <p>Forgot password?</p>
                <NavLink to= "/Home"><button>Login</button></NavLink>
                <p>Don't have an account? <NavLink to="/signUp">Sign Up</NavLink></p>
            </div>
      </form>

    </div>
  );
}
 
export default SignIn;