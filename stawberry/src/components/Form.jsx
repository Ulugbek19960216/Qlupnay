import React from 'react'
 import { 
   createBrowserRouter,
   createRoutesFromElements,
   Route, 
   RouterProvider} from "react-router-dom";



import SignIn from "./SignIn";
import SignUp from "./SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path='/' element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>} />
    </Route>

  )
)

const UserForm = () => {

    return ( 
      <RouterProvider  router={router} />
     
     );
}
 
export default UserForm;