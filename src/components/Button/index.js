import React from "react";
import {
    StyledButton
  } from "./styles";

function Button({icon, children, width}){
    return <StyledButton width={width}>{children}</StyledButton>
}

export default Button;