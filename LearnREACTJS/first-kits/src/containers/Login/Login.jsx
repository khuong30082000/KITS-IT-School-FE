import React, { useState } from "react";
import styled from "styled-components";
import facebook from "assets/img/Facebook.svg";
import github from "assets/img/Github.svg";
import google from "assets/img/Google.svg";
import eyeHide from "assets/img/eye-hide.svg";
import eyeOpen from "assets/img/eye-openn.svg";
import bannerLogin from "assets/img/bannerLoginn.svg";
import { Logo } from "components/Logo";
import bubble from "assets/img/bubble.png";

const StyledWrapperLogin = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, #ffffff 0%, #bbaaff 66.67%);
  .container {
    margin: 0 auto;
    width: 1440px;
  }

  .content-right {
    /* width: 489px;
    height: 849px;
    background-image: url("../images/Rectangle\ 001.svg");
    margin-left: auto;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1; */
    /* margin-right: 20px; */
  }

  .content-top {
    width: 212px;
    height: 47px;
    background-color: #d9d9d9;
  }
  .content-left {
    margin-top: 100px;
    margin-left: 100px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 66px;

    /* width: 1248px; */
    /* height: 579px; */

    /* z-index: 1; */
    /* position: relative; */
  }

  .content-right img {
    height: 100vh;
  }
  .content-heading {
    font-size: 56px;
    line-height: 84px;
    font-weight: 600;
    font-family: "Poppins";
  }

  .column {
    display: flex;
    flex-direction: column;
  }
  .form-login {
    width: 478px;
  }

  input {
    height: 48px;
    z-index: 2;
    background-color: #bbaaff;
    border-radius: 4px;
    padding-left: 10px;
    border: none;
    outline: none;
  }
  .label-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
  }

  .content-password {
    margin-top: 20px;
    margin-bottom: 40px;
    position: relative;
  }

  .content-username {
    margin-top: 20px;
  }

  .content-username label {
    margin-bottom: 7px;
  }

  .btn-login {
    margin: 0 auto;
    width: 126px;
    height: 37px;
    color: #fff;
    background-color: #5429ff;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    font-feature-settings: "salt" on;
    align-items: center;
    padding: 8px 14px;

    line-height: 24px;

    border-radius: 23px;
  }

  /* .btn-login::before {
    content: "";
    background-image: url("../images/arrLogin.svg");
    position: absolute;
    width: 17.25px;
    height: 6.38px;
    right: 32.37px;
    top: 50%;
    transform: translateY(-50%);
  } */

  .content-bottom {
    width: 478px;
    margin-top: 32px;
    margin-bottom: 103px;
    text-align: center;
  }

  .content-bottom-social {
    margin-top: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    margin-bottom: 31px;
  }
  .content-social-item {
    width: 125px;
    height: 50px;
    border: 1px solid #6096b4;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-sign-up {
    color: #5429ff;
  }

  .content-bottom-footer {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .banner {
    position: absolute;
    right: 10px;
    top: 0;
    display: flex;
  }

  .forgotpassword {
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: #5429ff;

    opacity: 0.5;
  }

  .content-bottom-top {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #5429ff;
  }

  .input-icons img {
    width: 20px;
    height: 20px;
  }
  .input-icons {
    position: absolute;
    right: 15.87px;
    top: 55%;
    z-index: 99999;
  }

  .bubbles img {
    width: 50px;
    animation: bubble 7s linear infinite;
  }
  .bubbles {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
  }

  @keyframes back {
    100% {
      background-position: 200rem 0;
    }
  }

  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }

  .bubbles img:nth-child(1) {
    animation-delay: 2s;
  }
  .bubbles img:nth-child(2) {
    animation-delay: 1s;
  }
  .bubbles img:nth-child(3) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(4) {
    animation-delay: 4.5s;
  }
  .bubbles img:nth-child(5) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(6) {
    animation-delay: 6s;
  }
  .bubbles img:nth-child(7) {
    animation-delay: 7s;
  }

  @media screen and (max-width: 1023px) {
    .banner {
      display: none;
    }
    .content-right {
      display: none;
    }

    .container {
      width: 600px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 300px;
    }
    .content {
      width: 200px;
      margin-left: 3px;
    }

    input {
      width: 200px;
    }
    .content-top {
      margin-left: 7px;
    }
    .btn-login {
      margin-left: 2px;
    }

    .content-bottom-social {
      flex-direction: column;
    }
    .content-bottom {
      width: 200px;
      margin-top: 10px;
    }
    .content-top {
      height: 46px;
      margin-top: 50px;
    }
  }
`;

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClickEye = () => {
    setShow(!show);
  };

  return (
    <StyledWrapperLogin>
      <div className="container">
        {/* <div className="content-top" /> */}
        <div className="content">
          <div className="content-left">
            <Logo mb={16.5} />
            <div className="content-heading">Log in</div>
            <form className="form-login">
              <div className="content-username column">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                />
              </div>
              <div className="content-password column">
                <div className="label-password">
                  <label htmlFor="password">Password</label>
                  <label htmlFor className="forgotpassword">
                    Forgot Password?
                  </label>
                </div>
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="enter your password"
                />
                <div className="input-icons">
                  {show ? (
                    <img
                      src={eyeOpen}
                      alt=""
                      srcSet
                      id="eye-hide"
                      onClick={handleClickEye}
                    />
                  ) : (
                    <img
                      src={eyeHide}
                      alt=""
                      srcSet
                      id="eye-hide"
                      onClick={handleClickEye}
                    />
                  )}
                  {/* <img src="images/eye-open.png" alt="" srcset="" /> */}
                </div>
              </div>
              <div className="btn btn-login" id="login">
                Login In
              </div>
            </form>
            <div className="content-bottom">
              <div className="content-bottom-top">or continues with</div>
              <div className="content-bottom-social">
                <div className="content-social-item">
                  <img src={google} alt="" srcSet />
                </div>
                <div className="content-social-item">
                  <img src={github} alt="" srcSet />
                </div>
                <div className="content-social-item">
                  <img src={facebook} alt="" srcSet />
                </div>
              </div>
              <div className="content-bottom-footer">
                <div>Don't have an account yet ?</div>
                <span className="content-sign-up">Sign up for free</span>
              </div>
            </div>
          </div>
          <div className="content-right">
            <img src={bannerLogin} />
          </div>
        </div>
      </div>
      <div className="bubbles">
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
        <img src={bubble} alt="" srcSet />
      </div>
    </StyledWrapperLogin>
  );
};

export default Login;
