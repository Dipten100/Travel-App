import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { GrPowerCycle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../Context/ContextProvider";

const Registration = () => {
  const [Show, setShow] = useState(false);
  const [Switch, setSwitch] = useState("Sign In");
  const [SignInData, setSignInData] = useState({
    email: "",
    password: "",
    isPasswordEye: false,
    isError: false,
  });
  const [ForgotPasswordData, setForgotPasswordData] = useState({
    _id: null,
    name: "",
    email: "",
    isMatched: 0,
    password: "",
    isPasswordEye: false,
    confrimPassword: "",
    isConfrimPasswordEye: false,
  });
  const [SignUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    isPasswordEye: false,
    confrimPassword: "",
    isConfrimPasswordEye: false,
    isError: null,
  });

  // Context
  const { setUser } = useContext(AllContext);

  // Navigate
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Sign in data send to backend
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(SignInData);

    // backend response
    // axios.post("",SignInData).then((res)=>{
    //   if(res.data.message==="Log in successful"){
    //     setSignInData({...SignInData,isError:false})
    //     // store in localstorage
    //     localStorage.setItem("TravelAdvisorUser",res.data.user._id)
    //     setUser(res.data.user)
    //     navigate("/")
    //   }else{
    //     setSignInData({...SignInData,isError:true})
    //   }
    // }).catch((error)=>console.log(error))
  };

  // Forgot password data send to backend
  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log(ForgotPasswordData);

    // data verify
    if (ForgotPasswordData._id === null) {
      // backend response
      // axios
      //   .post("", ForgotPasswordData)
      //   .then((res) => {
      //     if (res.data.message === "Find user data") {
      //       setForgotPasswordData({
      //         ...ForgotPasswordData,
      //         _id: res.data.user._id,
      //         isMatched: 1,
      //       });
      //     } else {
      //       setForgotPasswordData({
      //         ...ForgotPasswordData,
      //         _id: null,
      //         isMatched: -1,
      //       });
      //     }
      //   })
      //   .catch((error) => console.log(error));
    } else {
      // data verify
      if (ForgotPasswordData.password === ForgotPasswordData.confrimPassword) {
        setForgotPasswordData({ ...ForgotPasswordData, isMatched: 1 });
        // backend response
        // axios
        //   .post("", ForgotPasswordData)
        //   .then((res) => {
        //     if (res.data.message === "Password update successful") {
        //       setForgotPasswordData({
        //         ...ForgotPasswordData,
        //         password: "",
        //         confrimPassword: "",
        //         isMatched: 3,
        //       });
        //     } else {
        //       setForgotPasswordData({
        //         ...ForgotPasswordData,
        //         isMatched: 4,
        //       });
        //     }
        //   })
        //   .catch((error) => console.log(error));
      } else {
        setForgotPasswordData({ ...ForgotPasswordData, isMatched: 2 });
      }
    }
  };

  // Reset forgot page
  const handleReset = (e) => {
    e.preventDefault();
    setForgotPasswordData({
      _id: null,
      name: "",
      email: "",
      isMatched: 0,
      password: "",
      isPasswordEye: false,
      confrimPassword: "",
      isConfrimPasswordEye: false,
    });
  };

  // Sign up data send to backend
  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(SignUpData);
    const api="http://localhost:8081/auth/"

    // data verify
    if (SignUpData.password === SignUpData.confrimPassword) {
      setSignUpData({ ...SignUpData, isError: null });
      const formData={
        "name":SignUpData.name,
        "email":SignUpData.email,
        "password":SignUpData.password
      }
      // console.log(formData)

      // backend response
      try {
        const api="http://localhost:8081/auth/"
        await axios.post(`${api}addUser`,formData).then((res)=>{
          if(res.status===200){
            setUser(res.data)
          }
        }).catch((error)=>console.log(error))
        
      } catch (error) {
        console.log("Error: "+error)
      }
    } else {
      setSignUpData({ ...SignUpData, isError: "Password  didn't matched" });
    }
  };

  return (
    <>
      <button type="button" className="lab-btn" onClick={handleShow}>
        Sign In
      </button>
      <Modal
        show={Show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className={`modal-body ${Switch === "Sign In" ? "" : "d-none"}`}>
          <div className="modal-header">
            <p>Sign In</p>
          </div>
          <div className="modal-bottom">
            <form action="#" className="lab-form" onSubmit={handleSignIn}>
              <div className="form__group field">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  value={SignInData.email}
                  onChange={(e) =>
                    setSignInData({ ...SignInData, email: e.target.value })
                  }
                  required
                />
                <label for="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group field">
                <input
                  type={SignInData.isPasswordEye === true ? "text" : "password"}
                  className="form__field password__field"
                  placeholder="Password"
                  name="password"
                  value={SignInData.password}
                  onChange={(e) =>
                    setSignInData({ ...SignInData, password: e.target.value })
                  }
                  required
                />
                <label for="name" className="form__label">
                  Password
                </label>
                <div className="eyeIcons">
                  <span
                    className={`${
                      SignInData.isPasswordEye === true ? "" : "d-none"
                    }`}
                    onClick={() =>
                      setSignInData({
                        ...SignInData,
                        isPasswordEye: !SignInData.isPasswordEye,
                      })
                    }
                  >
                    <FaEye />
                  </span>
                  <span
                    className={`${
                      SignInData.isPasswordEye === true ? "d-none" : ""
                    }`}
                    onClick={() =>
                      setSignInData({
                        ...SignInData,
                        isPasswordEye: !SignInData.isPasswordEye,
                      })
                    }
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              </div>
              <div
                className={`form__group field ${
                  SignInData.isError === true ? "" : "d-none"
                }`}
              >
                <p className="errorMsg">Invaild credential</p>
              </div>
              <div className="form__group button_field">
                <button className="lab-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="forgot-password">
              <p onClick={() => setSwitch("Forgot Password")}>
                Forgot password?
              </p>
            </div>
            <div className="last-line">
              <p>
                Create new account?{" "}
                <span onClick={() => setSwitch("Sign Up")}>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`modal-body ${
            Switch === "Forgot Password" ? "" : "d-none"
          }`}
        >
          <div className="modal-header">
            <p className="roboto-serif">Forgot password</p>
          </div>
          <div className="modal-bottom">
            <form
              action="#"
              className="lab-form"
              onSubmit={handleForgotPassword}
            >
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched <= 0 ? "" : "d-none"
                }`}
              >
                <input
                  type="text"
                  className="form__field"
                  placeholder="Name"
                  name="name"
                  value={ForgotPasswordData.name}
                  onChange={(e) =>
                    setForgotPasswordData({
                      ...ForgotPasswordData,
                      name: e.target.value,
                    })
                  }
                  required
                />
                <label for="name" className="form__label">
                  Name
                </label>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched <= 0 ? "" : "d-none"
                }`}
              >
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  value={ForgotPasswordData.email}
                  onChange={(e) =>
                    setForgotPasswordData({
                      ...ForgotPasswordData,
                      email: e.target.value,
                    })
                  }
                  required
                />
                <label for="email" className="form__label">
                  Email
                </label>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched === -1 ? "" : "d-none"
                }`}
              >
                <p className="errorMsg">
                  We are not found your name and email in our database. Please
                  check name and email.
                </p>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched >= 1 ? "" : "d-none"
                }`}
              >
                <input
                  type={
                    ForgotPasswordData.isPasswordEye === true
                      ? "text"
                      : "password"
                  }
                  className="form__field password__field"
                  placeholder="Password"
                  name="password"
                  value={ForgotPasswordData.password}
                  onChange={(e) =>
                    setForgotPasswordData({
                      ...ForgotPasswordData,
                      password: e.target.value,
                    })
                  }
                />
                <label for="name" className="form__label">
                  New Password
                </label>
                <div className="eyeIcons">
                  <span
                    className={`${
                      ForgotPasswordData.isPasswordEye === true ? "" : "d-none"
                    }`}
                    onClick={() =>
                      setForgotPasswordData({
                        ...ForgotPasswordData,
                        isPasswordEye: !ForgotPasswordData.isPasswordEye,
                      })
                    }
                  >
                    <FaEye />
                  </span>
                  <span
                    className={`${
                      ForgotPasswordData.isPasswordEye === true ? "d-none" : ""
                    }`}
                    onClick={() =>
                      setForgotPasswordData({
                        ...ForgotPasswordData,
                        isPasswordEye: !ForgotPasswordData.isPasswordEye,
                      })
                    }
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched >= 1 ? "" : "d-none"
                }`}
              >
                <input
                  type={
                    ForgotPasswordData.isConfrimPasswordEye === true
                      ? "text"
                      : "password"
                  }
                  className="form__field password__field"
                  placeholder="Confrim Password"
                  name="confrim password"
                  value={ForgotPasswordData.confrimPassword}
                  onChange={(e) =>
                    setForgotPasswordData({
                      ...ForgotPasswordData,
                      confrimPassword: e.target.value,
                    })
                  }
                />
                <label for="confrim password" className="form__label">
                  Confrim Password
                </label>
                <div className="eyeIcons">
                  <span
                    className={`${
                      ForgotPasswordData.isConfrimPasswordEye === true
                        ? ""
                        : "d-none"
                    }`}
                    onClick={() =>
                      setForgotPasswordData({
                        ...ForgotPasswordData,
                        isConfrimPasswordEye:
                          !ForgotPasswordData.isConfrimPasswordEye,
                      })
                    }
                  >
                    <FaEye />
                  </span>
                  <span
                    className={`${
                      ForgotPasswordData.isConfrimPasswordEye === true
                        ? "d-none"
                        : ""
                    }`}
                    onClick={() =>
                      setForgotPasswordData({
                        ...ForgotPasswordData,
                        isConfrimPasswordEye:
                          !ForgotPasswordData.isConfrimPasswordEye,
                      })
                    }
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched === 2 ? "" : "d-none"
                }`}
              >
                <p className="errorMsg">Password not matched.</p>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched === 3 ? "" : "d-none"
                }`}
              >
                <p className="errorMsg">
                  Password update successful. Go to the sign in page
                </p>
              </div>
              <div
                className={`form__group field ${
                  ForgotPasswordData.isMatched === 4 ? "" : "d-none"
                }`}
              >
                <p className="errorMsg">
                  Password didn't update due to server problem.{" "}
                  <br />
                  <span className="cursor-pointer" onClick={handleReset}>
                    <GrPowerCycle />
                    try again
                  </span>
                </p>
              </div>
              <div className="form__group button_field">
                <button className={`lab-btn ${ForgotPasswordData.isMatched>=3 ? "d-none":""}`} type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="last-line">
              <p>
                <span onClick={() => setSwitch("Sign In")}>
                  <MdOutlineKeyboardDoubleArrowLeft />
                  Back
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={`modal-body ${Switch === "Sign Up" ? "" : "d-none"}`}>
          <div className="modal-header">
            <p className="roboto-serif">Sign Up</p>
          </div>
          <div className="modal-bottom">
            <form action="#" className="lab-form" onSubmit={handleSignUp}>
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Name"
                  name="name"
                  value={SignUpData.name}
                  onChange={(e) =>
                    setSignUpData({ ...SignUpData, name: e.target.value })
                  }
                  required
                />
                <label for="name" className="form__label">
                  Name
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  value={SignUpData.email}
                  onChange={(e) =>
                    setSignUpData({ ...SignUpData, email: e.target.value })
                  }
                  required
                />
                <label for="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group field">
                <input
                  type={SignUpData.isPasswordEye === true ? "text" : "password"}
                  className="form__field password__field"
                  placeholder="Password"
                  name="password"
                  value={SignUpData.password}
                  onChange={(e) =>
                    setSignUpData({ ...SignUpData, password: e.target.value })
                  }
                  required
                />
                <label for="password" className="form__label">
                  Password
                </label>
                <div className="eyeIcons">
                  <span
                    className={`${
                      SignUpData.isPasswordEye === true ? "" : "d-none"
                    }`}
                    onClick={() =>
                      setSignUpData({
                        ...SignUpData,
                        isPasswordEye: !SignUpData.isPasswordEye,
                      })
                    }
                  >
                    <FaEye />
                  </span>
                  <span
                    className={`${
                      SignUpData.isPasswordEye === true ? "d-none" : ""
                    }`}
                    onClick={() =>
                      setSignUpData({
                        ...SignUpData,
                        isPasswordEye: !SignUpData.isPasswordEye,
                      })
                    }
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              </div>
              <div className="form__group field">
                <input
                  type={
                    SignUpData.isConfrimPasswordEye === true
                      ? "text"
                      : "password"
                  }
                  className="form__field password__field"
                  placeholder="Confrim Password"
                  name="confrim password"
                  value={SignUpData.confrimPassword}
                  onChange={(e) =>
                    setSignUpData({
                      ...SignUpData,
                      confrimPassword: e.target.value,
                    })
                  }
                  required
                />
                <label for="confrim password" className="form__label">
                  Confrim Password
                </label>
                <div className="eyeIcons">
                  <span
                    className={`${
                      SignUpData.isConfrimPasswordEye === true ? "" : "d-none"
                    }`}
                    onClick={() =>
                      setSignUpData({
                        ...SignUpData,
                        isConfrimPasswordEye: !SignUpData.isConfrimPasswordEye,
                      })
                    }
                  >
                    <FaEye />
                  </span>
                  <span
                    className={`${
                      SignUpData.isConfrimPasswordEye === true ? "d-none" : ""
                    }`}
                    onClick={() =>
                      setSignUpData({
                        ...SignUpData,
                        isConfrimPasswordEye: !SignUpData.isConfrimPasswordEye,
                      })
                    }
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              </div>
              <div
                className={`form__group field ${
                  SignUpData.isError !== null ? "" : "d-none"
                }`}
              >
                <p className="errorMsg">
                  {SignUpData.isError}
                </p>
              </div>
              <div className="form__group button_field">
                <button className="lab-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div className="last-line">
              <p>
                If you have an account?{" "}
                <span onClick={() => setSwitch("Sign In")}>Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Registration;
