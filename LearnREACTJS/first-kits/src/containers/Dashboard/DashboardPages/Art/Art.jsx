import React from "react";
import styled from "styled-components";
import { ArtItem } from "components/ArtItem/ArtItem";

const StyledArtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Art = () => {
  return (
    <StyledArtWrapper>
      <ArtItem imgNumber="12 : 03 : 45" />
      <ArtItem imgNumber="08 : 21 : 23" />
      <ArtItem imgNumber="12 : 03 : 45" />
      <ArtItem imgNumber="08 : 21 : 23" />
    </StyledArtWrapper>
  );
};
