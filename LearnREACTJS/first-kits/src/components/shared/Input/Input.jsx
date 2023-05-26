import React from "react";
import styled from "styled-components";

const StyledWrapperInput = styled.div`
  width: 476px;
  input {
    width: 100%;
    margin-top: 7px;
    border: none;
    outline: none;
    height: ${(props) => `${props.height}px`};
    background-color: ${(props) => props.backGroundColor};
    border-radius: ${(props) => `${props.borderRadius}px`};
    padding-left: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    color: #000000;
  }
  input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    color: #000000;
  }

  label {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #000000;
  }
`;

export const Input = ({ ...rest }) => {
  return (
    <StyledWrapperInput {...rest}>
      <label for={rest.labelName}>{rest.labelName}</label>
      <input type={rest.type} placeholder={rest.placeholder} />
    </StyledWrapperInput>
  );
};
