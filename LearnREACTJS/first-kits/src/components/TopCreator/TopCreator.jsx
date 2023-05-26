import React from "react";
import styled from "styled-components";
import { TopCreatorItem } from "./TopCreatorItem";
import { dataTopCreator } from "./dataTopCreator";

const StyledTopCreator = styled.div`
  padding: 24px;
  width: 348px;
  height: 478px;
  background-color: #ffffff;
  border-radius: 16px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-left {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;
    /* Text/color1 */
    color: #27262e;
  }
  .header-right {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    font-feature-settings: "salt" on;

    /* Text/color2 */
    color: #747475;
  }
`;

export const TopCreator = () => {
  return (
    <StyledTopCreator>
      <div className="header">
        <div className="header-left">Top Creator</div>
        <div className="header-right">See All</div>
      </div>
      <div className="topcreator-list">
        {dataTopCreator.map((item) => {
          return (
            <TopCreatorItem
              key={item.number}
              number={item.number}
              heading={item.heading}
              email={item.email}
              src={item.src}
              btnText={item.text}
              bgColor={item.bgColor ? item.bgColor : null}
              textColor={item.textColor && item.textColor}
            />
          );
        })}
      </div>
    </StyledTopCreator>
  );
};
