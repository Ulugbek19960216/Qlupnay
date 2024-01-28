import React from 'react'

export default function GoogleSignIn(props) {
  return (
    <div className="sign-in-with-google">
            <h4>or you can sign {props.type} with</h4>
            <p><i className="fab fa-google fa-2x"></i></p>
     </div>
  )
}
