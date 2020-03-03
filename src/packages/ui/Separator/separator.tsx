import React from "react";
import { Container } from "./style";
import { ISeparator } from "./types";

export const Separator = (props: ISeparator) => {
  const { glutter } = props;
  return <Container glutter={glutter ? glutter : 10} />;
};
