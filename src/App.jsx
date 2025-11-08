import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalstyles";
import Tracker from "./Components/Tracker";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Tracker />
      </Main>
    </>
  );
};

export default App;
