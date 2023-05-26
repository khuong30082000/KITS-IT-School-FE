import React from "react";
import styled from "styled-components";
import iconsearch from "assets/img/icon-search.svg";
import iconbell from "assets/img/iconbell.svg";
import iconavatar from "assets/img/icon-avatar.svg";

const StyledMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  /* position: fixed; */
  .header-left {
    width: 461px;
    position: relative;
  }
  .header-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .header-left input {
    width: 100%;
    padding: 17.5px 126px 17.5px 60px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #b9b8bc;
    border-radius: 35px;
  }

  .header-right-bell {
    width: 56px;
    height: 56px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Border */
    border: 1px solid #e9e9e9;
    border-radius: 50%;
  }

  .icon-search {
    height: 19px;
    width: 19px;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }
`;

export const MainHeader = () => {
  return (
    <StyledMainHeader>
      <div className="header-left">
        <input placeholder="Search Item, Collection and Account.. " />
        <img src={iconsearch} alt="icon-search" className="icon-search" />
      </div>
      <div className="header-right">
        <div className="header-right-bell">
          <img src={iconbell} alt="icon-search" className="icon-bell" />
        </div>
        <img src={iconavatar} alt="icon-search" className="icon-avatar" />
      </div>
    </StyledMainHeader>
  );
};
