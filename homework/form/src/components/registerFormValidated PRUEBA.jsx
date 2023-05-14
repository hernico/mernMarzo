// import useInput from "./useInput";
// import React from "react";

// const RegisterFormValidated = () => {
//   const FirstName = useInput("");
//   const LastName = useInput("");
//   const Email = useInput("");
//   const Password = useInput("");
//   const ConfirmPassword = useInput("");

//   const submitForm = (event) => {
//     event.preventDefault();

//     if (FirstName.value === "") {
//       alert("Please enter your first name");
//       return;
//     }
//     // if (LastName.value === "") {
//     //   alert("Please enter your last name");
//     //   return;
//     // }
//     // if (Email.value === "") {
//     //   alert("Please enter your email");
//     //   return;
//     // }
//     // if (Password.value === "") {
//     //   alert("Please enter your password");
//     //   return;
//     // }
//     // if (ConfirmPassword.value === "") {
//     //   alert("Please enter your confirm password");
//     //   return;
//     // }
//     // if (Password.value !== ConfirmPassword.value) {
//     //   alert("Passwords do not match");
//     //   return;
//     // }

//   }



// return (
//   <form onSubmit={submitForm}>
//     <div className="form-group">
//       <label htmlFor="FirstName">First Name</label>
//       <input type="text" value={FirstName.value} onChange={FirstName.onChange} id="FirstName" />
//       <div className="text-danger">{FirstName.error}</div>
//     </div>

//     <div className="form-group">
//       <label htmlFor="LastName">Last Name</label>
//       <input type="text" {...LastName} onChange={LastName.onChange} />
//     </div>
//     <div className="form-group">
//       <label htmlFor="Email">Email</label>
//       <input type="text" {...Email} onChange={Email.onChange} />
//     </div>
//     <div className="form-group">
//       <label htmlFor="Password">Password</label>
//       <input type="password" {...Password} onChange={Password.onChange} />
//     </div>
//     <div className="form-group">
//       <label htmlFor="ConfirmPassword">Confirm Password</label>
//       <input type="password" {...ConfirmPassword} onChange={ConfirmPassword.onChange} onChange={Validate} />
//     </div>
//       <button type="submit" value="Guardar" ><button/>
//     </div>

   
//   </form>
//   )
// }



// export { RegisterFormValidated };

