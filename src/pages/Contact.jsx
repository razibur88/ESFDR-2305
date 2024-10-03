import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
const Contact = () => {
  const db = getDatabase();
  let navigate = useNavigate();

  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [fullname, setFullname] = useState("");
  let [password, setPassword] = useState("");
  let [condintion, setCondition] = useState(false);
  let [show, setShow] = useState(false);
  let [error, setError] = useState("");

  let handleFullname = (e) => {
    setFullname(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassowrd = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let number = /^(?=.*[0-9])/;
    let special = /^(?=.*[!@#$%^&*])/;
    let lowerCase = /^(?=.*[a-z])/;
    let upperCase = /^(?=.*[A-Z])/;
    let mixMum = /^(?=.{8,})/;

    if (!email) {
      setShow(true);
      setError("enter your Email");
    } else if (!emailRegex.test(email)) {
      setShow(true);
      setError("please enter Vaild email");
    } else if (!password) {
      console.log("enter your Passwrod");
    } else if (!number.test(password)) {
      console.log("give a me number");
    } else if (!lowerCase.test(password)) {
      setShow("give a lowerCase");
    } else if (!upperCase.test(password)) {
      console.log("give a upperCase");
    } else if (!special.test(password)) {
      console.log("give a special");
    } else if (!mixMum.test(password)) {
      console.log("give a mixMum");
    } else {
      setCondition(true);
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            set(ref(db, 'allusers/'+userCreadential.user.uid), {
              username: fullname,
              email: email,
              password:password
            });
            setCondition(false)
            navigate('/login')
          });
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode.includes("auth/email-already-in-use")) {
            setShow(true);
            setError("email is already visiable");
            setCondition(false);
          }
        });
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900 py-[50px]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleEmail}
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {show && <p className="text-red-800">{error}</p>}
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handlePassowrd}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              {condintion ? (
                <button>
                  <FallingLines
                    color="red"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                  />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  type="submit"
                  class="w-full text-white bg-[tomato] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
              )}

              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
