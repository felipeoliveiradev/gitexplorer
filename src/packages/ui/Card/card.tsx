import { IType } from "../../../helper/types/types";
import React from "react";
import { Container } from "./style";
import { ICard } from "./types";

export const Card = (props: ICard & IType) => {
  const { children, noFlex } = props;
  return <Container flex={noFlex}>{children}</Container>;
};
