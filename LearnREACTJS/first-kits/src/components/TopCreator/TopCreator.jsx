import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { TopCreatorItem } from "./TopCreatorItem";
import topcreatorAvatar from "assets/img/topcreatorAvatar.svg";
import top2 from "assets/img/top2.svg";
import top3 from "assets/img/top3.svg";
import top4 from "assets/img/top4.svg";
import top5 from "assets/img/top5.svg";
import top6 from "assets/img/top6.svg";

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

const ArrTopCreatorItem = [
  {
    number: 1,
    heading: "Michael Jordan",
    email: "@jotdan_",
    src: topcreatorAvatar,
    text: "Follow",
  },
  {
    number: 2,
    heading: "John Tibao",
    email: "@johnti60",
    src: top2,
    text: "Follow",
  },
  {
    number: 3,
    heading: "Michael Jordan",
    email: "@jotdan_",
    src: top3,
    text: "Following",
    textColor: "white",
    bgColor: "#5429FF",
  },
  {
    number: 4,
    heading: "Michael Jordan",
    email: "@jotdan_",
    src: topcreatorAvatar,
    text: "Follow",
  },
  {
    number: 5,
    heading: "Michael Jordan",
    email: "@jotdan_",
    src: topcreatorAvatar,
    text: "Follow",
  },
  {
    number: 6,
    heading: "Michael Jordan",
    email: "@jotdan_",
    src: topcreatorAvatar,
    text: "Follow",
  },
];

export const TopCreator = () => {
  // ArrTopCreatorItem.map((item) => {
  //   console.log(item);
  // });

  return (
    <StyledTopCreator>
      <div className="header">
        <div className="header-left">Top Creator</div>
        <div className="header-right">See All</div>
      </div>
      <div className="topcreator-list">
        {ArrTopCreatorItem.map((item) => {
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

        {/* <TopCreatorItem
          number={2}
          heading="John Tibao"
          email="@johnti60"
          src={top2}
          btnText="Follow"
        />
        <TopCreatorItem
          number={3}
          heading="Teressa"
          email="@teressa"
          src={top3}
          btnText="Following"
          textColor="white"
          bgColor="#5429FF"
        />
        <TopCreatorItem
          number={4}
          heading="Johan Hawn"
          email="@j_hawn"
          src={top4}
          btnText="Follow"
        />
        <TopCreatorItem
          number={5}
          heading="Maria Alisson"
          email="@m_alisson"
          src={top5}
          btnText="Follow"
        />
        <TopCreatorItem
          number={6}
          heading="Sam Erricson"
          email="@erricsonsam"
          src={top6}
          btnText="Follow"
        /> */}
      </div>
    </StyledTopCreator>
  );
};
