import { pxToRem } from "helper";
import styled from "styled-components";
import { ISeparator } from "./types";

export const Container = styled.div`
  width: ${(props: ISeparator) => {
    return pxToRem((props.glutter && props.glutter) || 0);
  }};
  height: ${(props: ISeparator) => {
    return pxToRem((props.glutter && props.glutter) || 0);
  }};
`;
