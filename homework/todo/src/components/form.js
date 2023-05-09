import React from "react";
import useInput from "./useInput";

const SignInForm = () => {
    const email = useInput("");
    const password = useInput("");
  
    const submitForm = (event) => {
      event.preventDefault();
      console.log("email", email.value);
      console.log("password", password.value);
    };

    return(
    <div onSubmit={submitForm}>
        <input placeholder="Email" {...email} onChange={email.onChange}/>
        <input placeholder="Password" type="password" {...password} onChange={password.onChange}/>

        <button type="submit">SUBMIT HERE</button>
    </div>


    )
}

export default SignInForm;