import React from 'react';

import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  background-color: red;
  .card-image {
    height: 30px;
    width: 100%;
    border-radius: 8px;
  }
`;

const TomatoButton = styled(StyledCard)`
  background-color: blue;
  height: 40px;
  width: 100%;
`;

export const Card2 = ({ className }) => {
  return (
    <>
      <StyledCard className={className}>
        <div className="card-image"></div>
      </StyledCard>
      <TomatoButton></TomatoButton>
    </>
  );
};
