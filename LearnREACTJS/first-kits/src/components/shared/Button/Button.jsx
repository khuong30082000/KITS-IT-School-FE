import React from "react";
import styled from "styled-components";
import redArrow from "assets/img/arrowDown.svg";
import blueArrow from "assets/img/arrowUp.svg";
import iconToppUp from "assets/img/iconToppUp.svg";

const StyledButton = styled.button`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => `${props.borderRadius}px`};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  margin-right: ${(props) => `${props.marginRight}px`};
  font-weight: ${(props) => props.fontWeight};
  backdrop-filter: ${(props) => `blur(${props.backdropFilter}px)`};
`;
export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  borderRadius,
  backdropFilter,
  mr,
  percent,
  fontSize,
  children,
  fontWeight,
  btnText,
  iconTopUp,
  ...rest
}) => {
  return (
    <StyledButton
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      marginRight={mr}
      backdropFilter={backdropFilter}
      {...rest}
    >
      {percent && (
        <img src={percent < 0 ? redArrow : blueArrow} alt="arr"></img>
      )}
      {iconTopUp && <img src={iconToppUp} alt="arr"></img>}

      {percent && Math.abs(percent) + "%"}
      {btnText && children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: 128,
  height: 46,
  fontSize: 16,
};
