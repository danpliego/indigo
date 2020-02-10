import PropTypes from "prop-types";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as Layout from "./layoutComponents";
import { Link } from "gatsby";
import { theme } from "./theme";

import Logo from "../images/logo.png";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContainer>
      <Layout.Container>
        <Layout.Row style={{ alignItems: "center" }}>
          <LogoContainer>
            <a href="/">
              <img src={Logo} width="160" />
            </a>
          </LogoContainer>
          <MobileMenu onClick={() => setOpenMenu(!openMenu)}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="17.4545" height="1.45455" fill="#141943" />
              <rect
                y="7.27271"
                width="17.4545"
                height="1.45455"
                fill="#141943"
              />
              <rect
                y="14.5454"
                width="17.4545"
                height="1.45455"
                fill="#141943"
              />
            </svg>
          </MobileMenu>
          <CollapsableMenu flex={1} isOpen={openMenu}>
            <Menu>
              <MenuItem>
                <a href="/">Inicio</a>
              </MenuItem>
              <MenuItem>
                <a href="#nosotros">Nosotros</a>
              </MenuItem>
              <MenuItem>
                <a href="#servicios">Servicios</a>
              </MenuItem>
              <MenuItem>
                <a href="#contacto">Contacto</a>
              </MenuItem>
            </Menu>
          </CollapsableMenu>
        </Layout.Row>
      </Layout.Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 1.5rem 0;
  z-index: 1000;
  position: relative;
  background: #fff;
`;

export const Menu = styled.div`
  display: flex;
  padding-left: 3rem;
`;

export const MenuItem = styled.div`
  transition: all 0.3s ease-in-out;
  font-size: 0.9rem;

  a {
    padding: 1rem 1.5rem;
    display: block;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: ${theme.colors.primaryColor};

    &:hover {
      text-decoration: none;
    }

    &:after {
      content: " ";
      height: 1px;
      background: ${theme.colors.primaryColor};
      position: absolute;
      bottom: 0;
      left: 1.5rem;
      right: 1.5rem;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    &:hover:after {
      opacity: 1;
    }
  }
`;

export const CollapsableMenu = styled(Layout.Column)<{
  isOpen: boolean;
}>`
  @media ${theme.breakpoint.onlyMobile} {
    display: none;
  }

  ${props =>
    props.isOpen &&
    css`
      @media ${theme.breakpoint.onlyMobile} {
        display: block !important;
        position: absolute;
        top: 5.5rem;
        width: 100%;
        left: 0;
        background: ${theme.colors.primaryColor};
        padding: 0;
        z-index: 1000;

        > div {
          flex-direction: column;
          padding-left: 0;
        }

        a {
          color: #fff;
          padding: 1.5rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    `}
`;

export const MobileMenu = styled.button`
  border: 0;
  background: none;
  padding: 1rem;
  cursor: pointer;
  @media ${theme.breakpoint.upFromMobile} {
    display: none;
  }
`;

export const LogoContainer = styled(Layout.Column)`
  @media ${theme.breakpoint.onlyMobile} {
    flex: 1;
  }
`;

export const MobileLink = styled(Link)`
  @media ${theme.breakpoint.upFromMobile} {
    display: none !important;
  }
`;
