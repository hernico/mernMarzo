import React from "react";
import useInput from "./useInput";

const SignInForm = () => {
    const email = useInput("");
    const password = useInput("");
    const confirmPassword = useInput ("");

    const submitForm = (event) => {
      event.preventDefault();
      console.log("email", email.value);
      console.log("password", password.value);
      console.log("confirmPassword", password.value);
    };
    const [emailError, setEmailError] = useInput('')
    const [passwordError, setPasswordError] = useInput('')
    const [passConfirmError, setPassConfirmError] = useInput('')

    function changePassword (ev)  {
        const newPassword = ev.target.value
        // cambiamos el "password" del estado
        setState({
          ...state,
          password: newPassword
        })
        // Realizamos las validaciones correspondientes
        if (newPassword.length <= 7) {
          setPasswordError('La contraseña debe se ser de largo al menos 7')
        }
        else {
          setPasswordError('')
        }
      }
    
      function changePasswordConfirm (ev)  {
        const passConfirm = ev.target.value
        // cambiamos el "pass_confirm" del estado
        setState({
          ...state,
          pass_confirm: passConfirm
        })
        // Realizamos las validaciones correspondientes
        if (passConfirm !== state.password) {
          setPassConfirmError('Las contraseñas deben coincidir')
        }
        else {
          setPassConfirmError('')
        }
      }
    
      function guardarUser (ev) {
        // 0. Prevenir que el formulario recargue la página
        ev.preventDefault()
        // 1. Guardo el usuario
        alert('Guardando al usuario ' + JSON.stringify(state))
      }
    

    return(
    <div onSubmit={submitForm}>
        <input placeholder="Email" {...email} onChange={email.onChange}/>
        <input placeholder="Password" type="password" {...password} onChange={password.onChange}/>
        <input placeholder="Confirm Password" type="confirmPassword" {...confirmPassword} onChange={confirmPassword.onChange} type="password"/>

        <button type="submit">SUBMIT HERE</button>
    </div>


    )
}

export default SignInForm;