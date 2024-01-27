import React,{ useState}from 'react';
import {NavLink} from "react-router-dom";

const Register = () => {
  const [contact, setContact] = useState({
    fname: "",
    email: "",
    password: "",
    cPassword: ""
  });

   // Error state
   const [errors, setErrors] = useState({
    email: "",
    password: "",
})

  function handleChange(event) {
    const {name, value} = event.target;

    setContact({...contact, [name]: value});

    validateInput(name, value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validateAllInputs();

    if (isFormValid()) {
      console.log('Form submitted:', contact);
    } else {
      console.log('Form validation failed. Please check errors.');
    }

  };
  
  const validateInput = (name, value) => {
    switch (name) {
        case 'email':
            setErrors({
                ...errors,
                email: validateEmail(value),
            });
            break;
            case 'password':
                setErrors({
                    ...errors,
                    password: validatePassword(value),
                });
                break;
                default:
                    break;
    }
};

 // Function to validate email format
 const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Invalid email format";
}

// Function to validate password
const validatePassword = (password) => {

  // Check if the length of the password is at least 6 characters
if (password.length < 6) {
return 'Password must be at least 6 characters';
}

// Check for at least one uppercase letter
if (!/[A-Z]/.test(password)) {
return 'Password must contain at least one uppercase letter';
}

// Check for at least one lowercase letter
if (!/[a-z]/.test(password)) {
return 'Password must contain at least one lowercase letter';
}

// Check for at least one digit
if (!/\d/.test(password)) {
return 'Password must contain at least one digit';
}

// Check for at least one special character
if (!/[^A-Za-z0-9]/.test(password)) {
return 'Password must contain at least one special character';
}

// If all requirements are met, return an empty string (valid password)
return '';

}

// Function to validate all inputs
const validateAllInputs = () => {
validateInput('email', contact.email);
validateInput('password', contact.password);
}

// Function to check if the form is valid
const isFormValid = () => {
return Object.values(errors).every((error) => error === "");
}



    return ( 
      <div class="container">
        <h2>{contact.fname}</h2>
        <h2>{contact.email}</h2>
        <h2>{contact.password}</h2>
        <h2>{contact.cPassword}</h2>
        <h2></h2>
        <div class="wrapper">
            <form onSubmit={handleSubmit}>
            <input
               type ="fname"
               name="fname"
               value={contact.fname}
               onChange={handleChange}
               placeholder="Name"
              />
            <input 
              type ="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="E-mail address"
              />
              <span className='error'>{errors.email}</span>
            <input 
              type ="password"
              name="password"
              value={contact.password}
              onChange={handleChange}
              placeholder='Password'/>
              <span className='error'>{errors.password}</span>
            <input 
              type ="password"
              name="cPassword"
              value={contact.cPassword}
              onChange={handleChange}
              placeholder='Confirm Password'/>
            </form>
                <a href="/login" type='submit'><button>Sgin Up</button></a>
                <p>Already have an account? <NavLink to ="/">Login</NavLink></p>
        </div>
    </div>
  );
     
};
 
export default  Register;