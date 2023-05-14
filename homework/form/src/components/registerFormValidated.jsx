import { useState } from "react";

function RegisterFormValidated() {

  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  })

  const [nameError, setNameError] = useState('')
  const [LastNameError, setLastNameError] = useState('')
  const [EmailError, setEmailError] = useState('')
  const [PasswordError, setPasswordError] = useState('')
  const [ConfirmPasswordError, setConfirmPasswordError] = useState('')


  function changeInput(event) {
    const nombre_propiedad = event.target.id
    const newValue = event.target.value
      ({
        ...setState,
        [nombre_propiedad]: newValue
      })
  }

  function changeName(ev) {
    const newName = ev.target.value
    setState({
      ...state,
      FirstName: newName
    })

    if (newName.trim().length === 0) {
      setNameError('')
    } else if (newName.trim().length <= 1) {
      setNameError('el nombre debe tener a lo menos 2 caracteres')
    } else {
      setNameError('')
    }
  }

  function changeLastName(ev) {
    const newLastName = ev.target.value
    setState({
      ...state,
      LastName: newLastName
    })

    if (newLastName.trim().length === 0) {
      setLastNameError('')
    } else if (newLastName.trim().length <= 1) {
      setLastNameError('el apellido debe tener a lo menos 2 caracteres')
    } else {
      setLastNameError('')
    }
  }

  function changeEmail(ev) {
    const newEmail = ev.target.value
    setState({
      ...state,
      Email: newEmail
    })

    if (newEmail.trim().length === 0) {
      setEmailError('')
    } else if (newEmail.trim().length <= 4) {
      setEmailError('el correo debe tener a lo menos 5 caracteres')
    } else {
      setEmailError('')
    }
  }

  function changePassword(ev) {
    const newPassword = ev.target.value
    setState({
      ...state,
      Password: newPassword
    })

    if (newPassword.trim().length === 0) {
      setPasswordError('')
    } else if (newPassword.trim().length <= 7) {
      setPasswordError('la contraseña debe tener a lo menos 8 caracteres')
    } else {
      setPasswordError('')
    }
  }

  function changeConfirmPassword(ev) {
    const newConfirmPassword = ev.target.value
    setState({
      ...state,
      ConfirmPassword: newConfirmPassword
    })

    if (newConfirmPassword.trim().length === 0) {
      setConfirmPasswordError('')
    } else if (newConfirmPassword !== state.Password) {
      setConfirmPasswordError('Las contraseñas deben coincidir')
    } else {
      setConfirmPasswordError('')
    }
  }


  const guardarUser = (event) => {
    event.preventDefault()
    alert('guardando al usuario' + JSON.stringify(state))
  }

  return (
    <form onSubmit={guardarUser}>
      <div className="form-group">
        <label htmlFor="FirstName">First Name</label>
        <input type="text" onChange={changeName} id="FirstName" />
        {nameError.length > 0 ?
          <p >{nameError}</p> : ''
        }

      </div>

      <div className="form-group">
        <label htmlFor="LastName">Last Name</label>
        <input type="text" onChange={changeLastName} />
        {LastNameError.length > 0 ?
          <p >{LastNameError}</p> : ''
        }
      </div>

      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input type="text" onChange={changeEmail} />
        {EmailError.length > 0 ?
          <p >{EmailError}</p> : ''
        }
      </div>

      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input type="text" onChange={changePassword} />
        {PasswordError.length > 0 ?
          <p >{PasswordError}</p> : ''
        }
      </div>
      <div className="form-group">
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="text" onChange={changeConfirmPassword} />
        {ConfirmPasswordError.length > 0 ?
          <p >{ConfirmPasswordError}</p> : ''
        }
      </div>


      <input type="submit" value="Guardar" />

      <div className="form-group">
        <label>First Name : {state.FirstName}</label>
      </div>
      <div className="form-group">
        <label>Last Name : {state.LastName}</label>
      </div>
      <div className="form-group">
        <label>Email : {state.Email}</label>
      </div>
      <div className="form-group">
        <label>Password : {state.Password}</label>
      </div>
      <div className="form-group">
        <label>Confirm Password : {state.ConfirmPassword}</label>
      </div>
    </form>
  );
}



export default RegisterFormValidated;

