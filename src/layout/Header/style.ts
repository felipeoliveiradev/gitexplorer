import { grid, pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  height: ${pxToRem(90)};
  position: relative;
  top:0;
  z-index: 2;
  width: 100%;
  box-shadow: 0px 9px 29px -5px rgba(219,219,219,1);
`;

export const Inner = styled.div`
  /* ${grid()}; */
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  > div {
    padding-left: 20px;
    padding-right: 0px;
    color:  #caccd1 !important;
  }
  input{
      width: 100%;
      border: none;
      outline: none;
      font-size: 30px;
      font-weight: 300;
      padding: 0 0.905625rem;
      font-family: 'Nunito', sans-serif !important;
      color:  #caccd1;
      height: 100%;
      &::placeholder{
        font-weight: 300;
        color:  #caccd1;
      }
    }
    button{
      background: transparent;
      border:none;
      outline: none;
      cursor: pointer;
      margin-right: 10px;
    }
  div {
    display: flex;
    justify-content: center;
    flex:1;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: ${ pxToRem(24)};
    font-weight: 700;
  }
`;
