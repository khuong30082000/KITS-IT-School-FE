import { MainHeader } from "components/MainHeader";
import { Sidebar } from "components/Sidebar";
import React from "react";
import styled from "styled-components";

const StyledMainLayout = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto; */

  background: ${(props) => props.theme.body};

  .container {
    display: flex;
    margin: 0 auto;

    max-width: 1440px;
  }
`;

const StyledAsideLayout = styled.aside`
  background-color: white;
  width: 292px;
  padding: 32px;
`;

const StyledContentLayout = styled.main`
  padding: 32px;
  width: 1148px;
  background-color: #caeae6;
`;

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout className="wrapper">
      <div className="container">
        <StyledAsideLayout>
          <Sidebar />
        </StyledAsideLayout>
        <StyledContentLayout>
          <MainHeader />

          {children}
        </StyledContentLayout>
      </div>
    </StyledMainLayout>
  );
};

export default MainLayout;
