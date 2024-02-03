import React,{useState} from 'react'
import {NavLink, redirect} from "react-router-dom";
import Header from "./RegisterPartials/Header";
import Footer from "./RegisterPartials/Footer";
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
        <Header />
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
         <Footer 
          text={"Forgot Password ?"}
          link={"/signUp"}
          type={" Sign up"}
         />
      </div>
    </div>
    </>
  );
}
 
export default SignIn;