import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import * as Layout from "./layoutComponents";
import { theme } from "./theme";

const banner = ({ title }) => (
  <SectionTitleContainer>
    <Layout.Container>
      <h2 className="extended-medium">{name}</h2>
    </Layout.Container>
  </SectionTitleContainer>
);

SectionTitle.propTypes = {
  name: PropTypes.string
};

SectionTitle.defaultProps = {
  name: ``
};

export default SectionTitle;

const SectionTitleContainer = styled.div`
  background: ${theme.colors.bodyColor};
  padding: 2rem 0;

  h2 {
    color: #fff;
    margin: 0;
  }
`;
