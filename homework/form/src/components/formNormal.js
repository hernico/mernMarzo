import useInput from "./useInput";
import React from "react";

const RegisterForm = () => {
  const FirstName = useInput("");
  const LastName = useInput("");
  const Email = useInput("");
  const Password = useInput("");
  const ConfirmPassword = useInput("");

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event.target.name, event.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="FirstName">First Name</label>
        <input type="text" {...FirstName} onChange={FirstName.onChange} />
      </div>

      <div className="form-group">
        <label htmlFor="LastName">Last Name</label>
        <input type="text" {...LastName} onChange={LastName.onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input type="text" {...Email} onChange={Email.onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input type="password" {...Password} onChange={Password.onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="password" {...ConfirmPassword} onChange={ConfirmPassword.onChange} />
      </div>

      <div className="form-group">
        <label>First Name : {FirstName.value}</label>
      </div>
      <div className="form-group">
        <label>Last Name : {LastName.value}</label>
      </div>
      <div className="form-group">
        <label>Email : {Email.value}</label>
      </div>
      <div className="form-group">
        <label>Password : {Password.value}</label>
      </div>
      <div className="form-group">
        <label>Confirm Password : {ConfirmPassword.value}</label>
      </div>


    </form>



  )

}


export default RegisterForm;

