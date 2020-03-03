import { AppContext } from "context";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather";
import React, { useContext, useState, ChangeEvent } from "react";
import { Container, Inner } from "./style";
import { IHeader } from "./types";
import { callApi } from "./../../helper/callApi/callApi";
export const Header = (props: IHeader) => {
  const [searchValue, setSearchValue] = useState();
  const { actions } = useContext(AppContext.Context);
  const loadRepos = async () => {
    const user = await callApi("GET", `users/${searchValue}`);
    const repo = await callApi("GET", `users/${searchValue}/repos`);
    actions.userAction.setInfo({ user, repo });
  };
  return (
    <Container>
      <Inner>
        <input
          type="text"
          placeholder="usuario"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
        <button onClick={loadRepos}>
          <div>
            <Icon icon={search} size={30} />
          </div>
        </button>
      </Inner>
    </Container>
  );
};
