import React from "react";
import styled from "styled-components";
import { ArtItem } from "components/ArtItem";
import { dataTrending } from "containers/Dashboard/data";

const StyledArtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Art = () => {
  // id: 1,
  // trendingAvatar: trendingimg1,
  // imgNumber: "12 : 03 : 45",
  // title: "Ape In Love",
  // like: "21,5K Likes",
  // emailAvatar: top2,
  // email: "@johnti60",
  // textBottom: "Current Bid",
  // numberETH: 9.1,
  // textETH: "ETH",

  return (
    <StyledArtWrapper>
      {dataTrending.map((item) => {
        return (
          <ArtItem
            key={item.id}
            imgNumber={item.imgNumber}
            trendingAvatar={item.trendingAvatar}
            title={item.title}
            like={item.like}
            emailAvatar={item.emailAvatar}
            email={item.email}
            textBottom={item.textBottom}
            numberETH={item.numberETH}
            textETH={item.textETH}
            avatarETH={item.avatarETH}
          />
        );
      })}

      {/* <ArtItem imgNumber="08 : 21 : 23" />
      <ArtItem imgNumber="12 : 03 : 45" />
      <ArtItem imgNumber="08 : 21 : 23" /> */}
    </StyledArtWrapper>
  );
};
