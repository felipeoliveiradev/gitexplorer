import { IType } from "helper/types/types";
import React from "react";
import { Container } from "./style";
import { ILine } from "./types";

export const Line = (props: ILine & IType) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
