import React from "react";
import useInput from "./useInput";

const SignInForm = () => {
    const name = useInput("");
    const apellido = useInput("");
    const email = useInput("");
    const password = useInput("");
  
    const submitForm = (event) => {
      event.preventDefault();
      console.log("email", email.value);
      console.log("password", password.value);
    };

    return(
    <div onSubmit={submitForm}>
        <input placeholder="Nombre" {...name} onChange={name.onChange}/>
        <input placeholder="Apellido" value={apellido.value} onChange={apellido.onChange}/>
        <input placeholder="Email" {...email} onChange={email.onChange}/>
        <input placeholder="Password" type="password" {...password} onChange={password.onChange}/>
      <h1> "El usuario a crear se llama:" {name.value} {apellido.value}<br/> "su email sera:" {email.value} <br/> "y su clave:" {password.value}</h1>

        <button type="submit">SUBMIT HERE</button>
    </div>


    )
}

export default SignInForm;