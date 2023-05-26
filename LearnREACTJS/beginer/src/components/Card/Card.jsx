import React from 'react';

import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  font-size: ${(props) => props.fontSize || '18px'};
  position: relative;
  ${(props) =>
    props.secondary &&
    css`
      background-color: red;
    `};
`;

const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export default function Card(props) {
  return (
    <StyledCard secondary={props.secondary} fontSize="22px">
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/7188811/file/original-72e0f098050422f846ed37196fad349a.jpg?compress=1&resize=1504x1128"
          alt=""
        />
      </CardImage>
    </StyledCard>
  );
}
