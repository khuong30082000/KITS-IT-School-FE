import React from "react";
import styled from "styled-components";
import imgLogin from "assets/img/img-login.svg";
import logo from "assets/img/logo.svg";
import { Input } from "components/shared/Input/Input";
import { Button } from "components/shared/Button";

const StyledWrapperLogin = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(90deg, #ffffff 0%, #bbaaff 66.67%);
  .login-container {
    width: 1280px;
    margin-left: 265px;
    display: flex;
    justify-content: space-between;
    gap: 63px;
  }
  .left {
    margin-top: 200px;
    width: 476px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 19.29px;
    margin-bottom: 18px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262e;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7a797d;
  }
  .men {
    height: 100vh;
    width: 1080px;
  }
  .left-heading {
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 84px;
    /* identical to box height */

    color: #000000;
  }
  .my-form {
    position: relative;
  }
`;

const Login = () => {
  return (
    <StyledWrapperLogin>
      <div className="login-container">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo"></img>
            <div>
              <div className="logo-text">MyNFT</div>
              <div className="logo-desc">NFT Marketplace</div>
            </div>
          </div>
          <div className="left-heading">Log In</div>
          <form className="my-form">
            <div className="left-input">
              <Input
                backGroundColor="#BBAAFF"
                height="46"
                borderRadius="4"
                labelName="Username"
                placeholder="username"
                type="text"
              />
              <Input
                backGroundColor="#BBAAFF"
                height="46"
                borderRadius="4"
                labelName="password"
                placeholder="password"
                type="password"
              />
            </div>
            <div className="left-submit">
              <Button />
            </div>
          </form>
        </div>
        <img src={imgLogin} className="men" />
      </div>
    </StyledWrapperLogin>
  );
};

export default Login;
