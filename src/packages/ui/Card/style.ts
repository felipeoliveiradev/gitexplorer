import { pxToRem } from "helper";
import styled from "styled-components";
import { ICard } from "./types";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  padding: ${pxToRem(10)};
  box-shadow: 0px 5px 43px -9px rgba(181, 221, 235, 0.68);
  flex: ${(props: ICard) => !props.flex ? "1" : "unset"};
`;
