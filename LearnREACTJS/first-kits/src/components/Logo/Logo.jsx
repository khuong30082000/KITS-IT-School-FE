import React from "react";
import styled from "styled-components";
import logo from "assets/img/logo.svg";

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 19.29px;
  margin-bottom: ${(props) => `${props.mb}px`};
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
`;

export const Logo = ({ mb }) => {
  return (
    <StyledLogoWrapper mb={mb}>
      <img src={logo} alt="logo"></img>
      <div>
        <div className="logo-text">MyNFT</div>
        <div className="logo-desc">NFT Marketplace</div>
      </div>
    </StyledLogoWrapper>
  );
};
