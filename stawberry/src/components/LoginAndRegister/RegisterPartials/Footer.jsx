import React from 'react'
import { NavLink } from 'react-router-dom';

export default function GoogleSignIn(props) {
  return (
    <>
       <div className="extra-con">
                <p>{props.text}</p>
                <p><NavLink style={{textDecoration: "none"}} to={props.link}>{props.type}</NavLink></p>
         </div>
       <div className="sign-in-with-google">
            <h4>or you can  {props.type} with</h4>
            <p><i className="fab fa-google fa-2x"></i></p>
     </div>
    </>
  
  )
}
