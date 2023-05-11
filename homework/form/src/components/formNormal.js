import { useState } from "react";

const RegisterForm = () => {

  const [FirstName,setFirstName] = useState("");
  console.log('FirstName :', FirstName);
  const [LastName,setLastName] = ("");
  const [Email,setEmail] = ("");
  const [Password,setPassword] = ("");
  const [ConfirmPassword,setConfirmPassword] = ("");

const submitForm = (event) => {
  event.preventDefault();
  setFirstName(event.target.value)
  console.log(FirstName,LastName,Email,Password,ConfirmPassword);
  
}


  return (

    <form onSubmit={submitForm}>
      <label>First Name</label>
      <input type="text" value={FirstName.value} onChange={submitForm} />

      <label>Last Name</label>
      <input type="text" />

      <label>Email</label>
      <input type="email" />

      <label>Password</label>
      <input type="password" />

      <label>Confirm Password</label>
      <input type="password" />

    <button>Register</button>

    <label>First Name : {FirstName}</label>


    </form>



  )

}


export default RegisterForm;

