import styled from "styled-components";
import { pxToRem } from "helper";
import { IColumn } from './types';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: ${(props: IColumn) => props.maxWidth ? `${pxToRem(props.maxWidth)}` : "auto"};
  @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
    max-width: 100%
  }
`;
