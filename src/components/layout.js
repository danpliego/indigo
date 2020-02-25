import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GlobalStyle } from "./globalStyle";
import { MainWrapper } from "./layoutComponents";
import { Header } from "./header.tsx";
import Footer from "./footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,500&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
          </MainWrapper>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
