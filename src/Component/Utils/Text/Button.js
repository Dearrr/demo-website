import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  color: #ffff;
  border: none;
  padding: 8px 20px;
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
  padding: ${(props) => (props.$padding ? props.$padding : "8px 20px")};
  background: ${(props) => (props.$backGroundcolor ? props.$backGroundcolor : "#ff5959")};
  border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "20px")};
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffff;
  }
`;
