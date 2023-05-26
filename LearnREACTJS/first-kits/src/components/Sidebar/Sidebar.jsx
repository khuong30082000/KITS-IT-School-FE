import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import icon1 from "assets/img/sidebaricon1.svg";
import icon2 from "assets/img/sidebaricon2.svg";
import icon3 from "assets/img/sidebaricon3.svg";
import icon4 from "assets/img/sidebaricon4.svg";
import icon5 from "assets/img/sidebaricon5.svg";
import icon6 from "assets/img/sidebaricon6.svg";
import icon7 from "assets/img/sidebaricon7.svg";
import icon8 from "assets/img/sibaricon8.svg";
import icon9 from "assets/img/sibaricon9.svg";
import urlImgBalance from "assets/img/arrow-right-balance.svg";
import iconTopUp from "assets/img/icontopup1.svg";
import ethbalance from "assets/img/ETH balance.svg";
import moon from "assets/img/moon.svg";
import light from "assets/img/light.svg";
import { Button } from "components/shared/Button";
import { Logo } from "components/Logo";
import { ThemeContextC } from "context/ThemeContext";

const StyledAsideWrapper = styled.div`
  /* .logo {
    display: flex;
    align-items: center;
    gap: 19.29px;
    margin-bottom: 54px;
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
  } */
  .nav {
    /* margin-bottom: 41.5px; */
  }
  .nav-second-heading {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-top: 41.5px;

    /* Text/color1 */

    color: #27262e;
    margin-bottom: 26px;
  }
  .nav-third {
    margin-bottom: 110px;
  }

  .nav-four {
    width: 228px;
    height: 220px;
    background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
    border-radius: 16px;
    text-align: center;
    padding-top: 32px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
  }

  .eth-balance {
    position: absolute;
    left: 13.33px;
    top: 41px;
  }

  .nav-four-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #e0dee6;
    margin-bottom: 8px;
  }
  .nav-four-heading {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: #e0dee6;
    margin-bottom: 18px;
  }

  .eth-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    /* Color/white */

    color: #ffffff;
  }
  .eth {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 26px;
  }

  .nav-four button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    z-index: 1;

    /* identical to box height, or 21px */

    /* Text/color1 */
    color: #27262e;
    /* gap: 12px; */
    position: relative;
  }

  .nav-four button::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    background-image: ${(props) => `url(${props.urlImgBalance})`};
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
  }

  .nav-four button img {
    width: 20px;
    height: 20px;
    transform: translateX(-14px);
  }
  .nav-third-group {
    display: flex;
    align-items: center;

    gap: 51px;
  }
  .nav-third-group .third-btn {
    width: 56px;
    height: 30px;
    border-radius: 20px;

    background: #f0f0f0;
  }
  .nav-third-group .icon-div {
    margin-bottom: 0px;
  }

  .btn-light {
    width: 22px;
    height: 22px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .btn-dark {
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
  }

  .btn-light img {
    filter: brightness(0) saturate(100%) invert(17%) sepia(80%) saturate(7271%)
      hue-rotate(255deg) brightness(102%) contrast(102%);
  }

  .btn-dark img {
    filter: brightness(0) saturate(100%) invert(62%) sepia(9%) saturate(181%)
      hue-rotate(214deg) brightness(100%) contrast(90%);
  }

  .third-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .light-mode {
    pointer-events: none;
  }
`;

const StyledNavItem = styled.div`
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    display: flex;
    align-items: center;
    gap: 21px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: #7a797d;
  }
  .active {
    color: #5429ff;
    font-weight: 700;
  }
  .active img {
    filter: brightness(0) saturate(100%) invert(16%) sepia(100%) saturate(3432%)
      hue-rotate(251deg) brightness(100%) contrast(113%);
  }

  img {
    filter: brightness(0) saturate(100%) invert(54%) sepia(10%) saturate(102%)
      hue-rotate(214deg) brightness(86%) contrast(84%);
  }
`;

const NavItem = ({ text, path, src, className }) => {
  return (
    <StyledNavItem className="icon-div">
      <NavLink to={path} className={className}>
        <img src={src} alt="nav-icon"></img>
        {text}
      </NavLink>
    </StyledNavItem>
  );
};
const lightTheme = {
  body: "red",
};

const darkTheme = {
  body: "black",
};

export const Sidebar = () => {
  // const isDarkTheme = theme === "dark";

  const context = useContext(ThemeContextC);
  console.log(context.theme);

  const classNameLight = context.theme === "light" ? "btn-light" : "btn-dark";
  const classNameDark = context.theme === "light" ? "btn-dark" : "btn-light";

  return (
    // <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <StyledAsideWrapper urlImgBalance={urlImgBalance}>
      <Logo mb={54} />
      <div className="nav">
        <NavItem text="Dashboard" path="/dashboard" src={icon1}></NavItem>
        <NavItem text="Market" path="/about" src={icon2}></NavItem>
        <NavItem text="Active Bids" path="/login" src={icon3}></NavItem>
      </div>
      <div className="nav-second">
        <div className="nav-second-heading">PROFILE</div>
        <NavItem text="My Portfolio" path="/" src={icon4}></NavItem>
        <NavItem text="Wallet" path="/" src={icon5}></NavItem>
        <NavItem text="Favourites" path="/" src={icon6}></NavItem>
        <NavItem text=" History" path="/" src={icon8}></NavItem>
        <NavItem text="Settings" path="/" src={icon7}></NavItem>
      </div>
      <div className="nav-third">
        <div className="nav-second-heading">ORTHER</div>
        <div className="nav-third-group">
          <NavItem
            text="Light Mode"
            className="light-mode"
            path="/"
            src={icon9}
          ></NavItem>
          <div className="third-btn">
            <div
              className={classNameLight}
              onClick={() => context.setTheme("light")}
            >
              <img src={light} />
            </div>
            <div
              className={classNameDark}
              onClick={() => context.setTheme("dark")}
            >
              <img src={moon} />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-four">
        <div className="nav-four-title">Your Balance</div>
        <div className="nav-four-heading">1,034.02</div>
        <div className="eth">
          <img src={iconTopUp} alt="ehtr" />
          <div className="eth-text">ETH</div>
        </div>
        <Button
          width="196"
          height="49"
          bgColor="white"
          borderRadius="12"
          btnText
          iconTopUp
        >
          Top Up Balance
        </Button>
        <img src={ethbalance} className="eth-balance" />
      </div>
    </StyledAsideWrapper>
    // </ThemeProvider>
  );
};
