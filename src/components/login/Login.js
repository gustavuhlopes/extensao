import "./login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function HandleSubmit(event) {
    navigate("/home");
  }
  return (
    <div className="Login">
      <form onSubmit={(event) => HandleSubmit(event)}>
        <div className="box_login">
          <div className="user box_inpt">
            <label for="user">Email address</label>
            <input type="text" id="user" className="inpt" required />
          </div>
          <div className="password box_inpt">
            <label for="pass"> Password</label>
            <input type="password" id="pass" className="inpt" required />
          </div>
        </div>

        <div className="box_btn">
          <button className="btn_submit">Connect</button>
        </div>
      </form>
    </div>
  );
}

// function HandleSubmit(event){
//   event.preventDefault();
// //   const chrome = window.chrome;
//   console.log(event)

// //   var email = document.querySelector('#user').value;
// //   console.log(email)
// //   var pass = document.querySelector('#pass').value;
// //   console.log(pass)

// // chrome.runtime.getBackgroundPage(function(backgroundPage) {
// //   // Envie uma mensagem para o arquivo background.js
// //   backgroundPage.chrome.runtime.sendMessage({
// //     greeting: 'signin',
// //     payload: {email, pass}
// // }, function(response) {
// //     console.log(response);
// //   });
// // });
// }

export default Login;
