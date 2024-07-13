import React from "react";
import {Button as MuiButton, type ButtonProps as MuiButtonProps} from "@mui/material";


export const ButtonWrapped = ({children, ...rest}: MuiButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
);

ButtonWrapped.displayName = 'ButtonWrapped'