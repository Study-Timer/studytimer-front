import React from "react";
import { StyledInput } from "./styles";

function TextInput({ type, name, id, placeholder }) {
    return (
        <StyledInput
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
        />
    )
}

export default TextInput;