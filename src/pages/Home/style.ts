import { grid, pxToRem } from "helper";
import styled from "styled-components";

export const Header = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  box-shadow: 0px 0px 39px -9px rgba(196, 196, 196, 1);
  margin-bottom: ${pxToRem(30)};
  hr {
    max-width: 23px;
    margin-top: 2px;
    margin-left: 0;
    border: none;
    background: #0dd3ff;
    height: 5px;
    box-shadow: 0px 0px 10px 0px rgba(13, 211, 255, 1);
  }
  .profileText {
    font-size: 17px;
    text-align: left;
    flex: 1;
    width: 100%;
    color: #0dd3ff;
    font-weight: 600;
    display: block;
    padding-left: 0;
    hr {
      margin-bottom: 0;
      max-width: 100%;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Inner = styled.div`
  ${grid()};
  padding: 0;
  margin: 0;
  margin-top: ${pxToRem(20)};
  display: flex;
  text-align: center;
  z-index: 1;
  align-items: center;
  font-size: ${pxToRem(50)};
  justify-content: center;
  flex: 1;
  flex-direction: column;

  h1 {
    border-bottom: ${pxToRem(2)} dashed ${(props) => props.theme.colors.text};
    font-weight: 300;
    margin: -${pxToRem(20)} auto 0 auto;
    @media (max-width: 767px) {
      font-size: ${pxToRem(20)};
    }
  }
  h3 {
    font-weight: 300;
    font-size: ${pxToRem(20)};
    @media (max-width: 767px) {
      font-size: ${pxToRem(15)};
      padding: 0 ${pxToRem(10)};
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    width: 100%;
    height: 380px;
    li {
      display: block;
      justify-content: center;
      flex-direction: column;
      .cover {
        position: relative;
        flex: 1;
        background-image: url("https://picsum.photos/1280/300?grayscale");
        background-size: cover;
        background-position: center;
        height: 300px;
        border-radius: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(0)} ${pxToRem(0)};
        &:before {
          content: "";
          border-radius: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(0)}
            ${pxToRem(0)};
          display: block;
          position: absolute;
          background-color: #000;
          opacity: 0.5;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      div {
        flex: 1;
      }
      .perfil {
        transform: translateY(-50%);
        display: flex;
        margin-left: 40px;
        .photo {
          max-width: ${pxToRem(100)};
          img {
            max-width: ${pxToRem(100)};
            background: #fff;
            padding: 5px;
            border-radius: 50%;
            box-shadow: 0px 9px 33px -5px rgba(13, 211, 255, 0.57);
          }
        }
        .info {
          margin-left: 10px;
          flex: 1;
          display: flex;
          flex-direction: row;
          .colaboradores {
            flex: unset;
            align-items: center;
            display: flex;
            padding-right: 30px;

            ul {
              margin-top: 10px;
              margin-left: 10px;
              display: flex;
              li {
                margin-left: -19px;
                img {
                  max-width: ${pxToRem(40)};
                  background: #fff;
                  padding: 5px;
                  border-radius: 50%;
                  box-shadow: 0px 9px 33px -5px rgba(13, 211, 255, 0.57);
                }
              }
            }
          }
        }
        .name {
          text-align: left;
          color: #fff;
          margin-bottom: 0;
          margin-top: 7px;
          margin-left: 14px;
          font-size: 26px;
        }
      }
    }
  }
`;
export const Body = styled.section`
  width: 100%;
  padding-bottom: ${pxToRem(30)};
  h3 {
    text-align: left;
    font-weight: 700;
    hr {
      max-width: 23px;
      margin-left: 0;
      border: none;
      background: #0dd3ff;
      height: 5px;
      box-shadow: 0px 0px 10px 0px rgba(13, 211, 255, 1);
    }
  }
  .repos{
    font-size: 16px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    span{&:nth-child(2){
          text-align: right;
    }}
  }
   @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
     .repos{
     flex-wrap: wrap;
      font-size: 14px;
      flex-direction: column;
      span{
        &:nth-child(2){
          text-align: left;
          margin-top: 10px;
        }
      }
}
}
   }
`;

export const List = styled.ul`
  all: initial;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  all: initial;
  font-family: "Nunito";
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center;
  margin-bottom: 10px;

  span {
    &:nth-child(1) {
      font-size: 15px;
      font-weight: 600;
    }
    &:nth-child(2) {
      background: #caccd1;
      padding: 5px;
      color: #fff;
      border-radius: 50%;
      font-size: 15px;
      font-weight: 500;
      min-width: 20px;
      text-align: center;
    }
  }
`;

export const Error = styled.div`
${grid()};
display: flex;
flex:1;
justify-content: flex-start;
h1, h2 {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text}
    text-align: left;
}
.animation{
  flex: 1;
}
.text{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: flex-start;

}

 @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
    flex-direction: column;
    justify-content: center;
    h1, h2 {
      text-align: center;
    }
    .text{
      align-items: center;
    }
  }
`;

export const Initial = styled.div`
display: flex;
justify-content: center;
    align-items: center;
    flex: 1;
h1{
    text-align: center;
    font-family: "Roboto";
    color: ${(props) => props.theme.colors.text};
}
`;