import React,{ useState}from 'react';


const Register = () => {
  const [contact, setContact] = useState({
    fname: "",
    email: "",
    password: "",
    cPassword: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setContact((prevValue) => {
      if(name === "fname") {
        return {
          fname: value,
          email: prevValue.email,
          password: prevValue.password,
          cPassword: prevValue.cPassword,
        }
      }  else  if(name === "email") {
        return {
          fname: prevValue.fname,
          email: value,
          password: prevValue.password,
          cPassword: prevValue.cPassword,
        }
      } else  if(name === "password") {
         return {
          fname: prevValue.fname,
          email: prevValue.password,
          password: value,
          cPassword: prevValue.cPassword,
        } 
      } else  if(name === "cPassword") {
        return {
          fname: prevValue.fname,
          email: prevValue.email,
          password: prevValue.password,
          cPassword: value,
        }
      }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
    


    return ( 
      <div class="container">
        <h2>{contact.fname}</h2>
        <h2>{contact.email}</h2>
        <h2>{contact.password}</h2>
        <h2>{contact.cPassword}</h2>
        <h2></h2>
        <div class="wrapper">
            <form action="/register" method="post">
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
            <input 
              type ="password"
              name="password"
              value={contact.password}
              onChange={handleChange}
              placeholder='Password'/>
            <input 
              type ="password"
              name="cPassword"
              value={contact.cPassword}
              onChange={handleChange}
              placeholder='Confirm Password'/>
            </form>
                <a href="/login"><button>Sgin Up</button></a>
                <p>Already have an account? <a  class="sign-up-link" href="/login"/>Login</p>
        </div>
    </div>
  );
     
};
 
export default  Register;