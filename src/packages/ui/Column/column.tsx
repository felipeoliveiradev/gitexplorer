import { IType } from "helper/types/types";
import React from "react";
import { Container } from "./style";
import { IColumn } from "./types";

export const Column = (props: IColumn & IType) => {
  const { children, width } = props;
  return <Container maxWidth={width}>{children}</Container>;
};
