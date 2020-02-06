import { string } from "prop-types";
import React from "react";
import styled from "styled-components";
import * as Layout from "./layoutComponents";
import { theme } from "./theme";

const SectionTitle = ({ name, subtitle }) => (
  <SectionTitleContainer>
    <Layout.Container>
      <h2 className="extended-medium">{name}</h2>
      {subtitle && (
        <p style={{ margin: ".33rem 0 0", opacity: "0.7" }}>{subtitle}</p>
      )}
    </Layout.Container>
  </SectionTitleContainer>
);

SectionTitle.propTypes = {
  name: string,
  subtitle: string || null
};

export default SectionTitle;

const SectionTitleContainer = styled.div`
  background: ${theme.colors.bodyColor};
  padding: 2rem 0;
  text-align: center;

  h2 {
    color: ${theme.colors.whiteColor};
    margin: 0;
  }
`;
