import { AppContext } from "context";
import Lottie from "lottie-react-web";
import { Card, Column, Line, Separator } from "packages/ui";
import React, { useContext } from "react";
import animation from "./animation.json";
import {
  Body,
  Container,
  Error,
  Header,
  Initial,
  Inner,
  Item,
  List
} from "./style";
import { IHome } from "./type";
export const Home = (props: IHome) => {
  const { state } = useContext(AppContext.Context);
  const result = state.user.info;
  const userInfo = result.user && result.user.response;
  const repoInfo = result.repo && result.repo.response;
  const error = (result.user && result.user.message) || undefined;

  if (error === undefined) {
    if (repoInfo) {
      return (
        <>
          <Container>
            <Inner>
              <Header>
                <ul>
                  <li>
                    <div className="cover" />
                    <div className="perfil">
                      <div className="photo">
                        <img src={userInfo.avatar_url} alt="" />
                      </div>
                      <div className="info">
                        <div className="name">
                          {userInfo.name} <hr />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <span className="profileText">
                  <hr />
                </span>
              </Header>
              <Body>
                <Line>
                  <Column width={300}>
                    <Card noFlex>
                      <h3>
                        Informações <hr />
                      </h3>
                      <List>
                        <Item>
                          <span>Repositorios</span>
                          <span>{userInfo.public_repos}</span>
                        </Item>
                        <Item>
                          <span>Projects</span>
                          <span>{userInfo.public_gists}</span>
                        </Item>

                        <Item>
                          <span>Followers</span>
                          <span>{userInfo.followers}</span>
                        </Item>

                        <Item>
                          <span>Following</span>
                          <span>{userInfo.following}</span>
                        </Item>
                      </List>
                    </Card>
                  </Column>
                  <Separator glutter={30} />
                  <Column>
                    <Card>
                      <h3>
                        Repositorios <hr />
                      </h3>
                    </Card>
                    <Separator />
                    {repoInfo &&
                      repoInfo
                        .sort((a: any, b: any) =>
                          a.stargazers_count < b.stargazers_count ? 1 : -1
                        )
                        .map((index: any) => (
                          <>
                            <Card key={index.name}>
                              <div className="repos">
                                <span>
                                  <b>Name</b>
                                  <br />
                                  {index.name}
                                </span>
                                <span>
                                  <b>Star</b>
                                  <br />
                                  {index.stargazers_count}
                                </span>
                              </div>
                            </Card>

                            <Separator />
                          </>
                        ))}
                  </Column>
                </Line>
              </Body>
            </Inner>
          </Container>
        </>
      );
    } else {
      return (
        <Initial>
          <h1>Digite na barra de cima para começar ;)</h1>
        </Initial>
      );
    }
  } else {
    return (
      <>
        <Error>
          <div className="animation">
            <Lottie
              options={{
                animationData: animation
              }}
              width="100%"
            />
          </div>
          <div className="text">
            <h1>Não conseguimos achar o repositorio</h1>
            <h2>Mais tente novamente </h2>
          </div>
        </Error>
      </>
    );
  }
};
