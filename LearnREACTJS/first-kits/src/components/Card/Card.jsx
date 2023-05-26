import React from "react";
import styled from "styled-components";
import Ethereum from "assets/img/Ethereum-blue.svg";
import { Button } from "../shared/Button";
const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  width: 164px;

  /* Text/color2 */
  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;
    /* Text/color1 */
    color: #27262e;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
    display: flex;
    align-items: end;

    gap: 6.5px;
  }
  .ammount-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .eth {
    margin-right: 4px;
  }
  .ethtext {
    transform: translateY(-4px);
  }
  .content-percent {
    margin-bottom: 12px;
  }
  .content-percent span {
    font-size: 24px;
    line-height: 31px;
    /* Text/color1 */
    color: #27262e;
    margin-right: 6.5px;
  }

  button {
    color: #747475;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
`;
export const Card = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ? (
        <div className="ammount-wrapper">
          <div className="ammount-left">
            <img className="eth" src={Ethereum} alt="eth-icon"></img>
            <span className="amount">{amount}</span>
          </div>
          <span className="ethtext">ETH</span>
        </div>
      ) : (
        <div className="content-percent">
          <span>{content}</span> %
        </div>
      )}
      <Button
        percent={percent}
        borderRadius="12"
        height="46"
        boderColor="#E9E9E9"
      >
        {percent}%
      </Button>
    </StyledCard>
  );
};
