import React from "react";
import styled from "styled-components";
import { Button } from "components/shared/Button";
import topcreatorAvatar from "assets/img/topcreatorAvatar.svg";

const StyledTopCreatorItem = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;

  .item {
    display: flex;
    align-items: center;
    transform: translateX(-8px);
    gap: 16px;
  }

  .item img {
    width: 44px;
    height: 44px;
  }
  .item-content-heading {
    width: 119px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    /* identical to box height */
    font-feature-settings: "salt" on;

    /* Text/color1 */
    color: #27262e;
    margin-bottom: 4px;
  }
  .item-content-email {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    /* identical to box height */
    font-feature-settings: "salt" on;

    /* Text/color2 */
    color: #747475;
  }
  span {
    width: 20px;
    height: 21px;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #27262e;
  }
`;

export const TopCreatorItem = ({
  number,
  heading,
  email,
  src,
  btnText,
  ...rest
}) => {
  return (
    <StyledTopCreatorItem>
      <span>{number}.</span>
      <div className="item">
        <img src={src} />
        <div className="item-content">
          <div className="item-content-heading">{heading}</div>
          <div className="item-content-email">{email}</div>
        </div>
      </div>
      <Button
        width="77"
        height="32"
        borderRadius="20"
        bgColor="rgba(84, 41, 255, 0.1)"
        btnText={btnText}
        {...rest}
      >
        {btnText}
      </Button>
    </StyledTopCreatorItem>
  );
};
