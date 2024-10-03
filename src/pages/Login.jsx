import React, { useState } from "react";
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate=useNavigate()
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let number = /^(?=.*[0-9])/;
  let special = /^(?=.*[!@#$%^&*])/;
  let lowerCase = /^(?=.*[a-z])/;
  let upperCase = /^(?=.*[A-Z])/;
  let mixMum = /^(?=.{8,})/;

  let hanldeLogin = () => {
    if (!email) {
      console.log("enter your Email");
    } else if (!emailRegex.test(email)) {
      console.log("please enter Vaild email");
    } else if (!password) {
      console.log("enter your Passwrod");
    } else if (!number.test(password)) {
      console.log("give a me number");
    } else if (!lowerCase.test(password)) {
      console.log("give a lowerCase");
    } else if (!upperCase.test(password)) {
      console.log("give a upperCase");
    } else if (!special.test(password)) {
      console.log("give a special");
    } else if (!mixMum.test(password)) {
      console.log("give a mixMum");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
         if(userCredential.user.emailVerified){
            console.log("verified");
            navigate('/')

            
         }else{
            console.log("not verified");
            
         }
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
        
          if(errorCode.includes("auth/invalid-credential")){
            console.log("invalid-credential");
            
          }
          
        });
    }
  };

  return (
    <section>
      <Container>
        <div className="w-[400px] h-[600px] bg-blue-200 mx-auto">
          <h2 className="text-center text-4xl py-5 font-bold">
            Login your account
          </h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-3 my-3 bg-white"
            type="text"
            placeholder="Email:"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 my-3 bg-white"
            type="password"
            placeholder="Passward:"
          />
          <button
            onClick={hanldeLogin}
            className="bg-purple-500 py-3 px-10 text-xl text-white "
          >
            Login
          </button>

          <Link to="/contact">
            <p>Sign up</p>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Login;
