import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <Comp.Row mobile>
        <Comp.Column>
          <Comp.Row
            mobile
            style={{
              justifyContent: "center",
              padding: "2rem"
            }}
          >
            <Comp.Column style={{ borderRight: "1px solid #222" }} padded>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1iy8UZO0TeTTODPzhKQfdP_kf86JyRrC0hul41roZrP0/edit?usp=sharing"
              >
                Aviso de privacidad
              </a>
            </Comp.Column>
            <Comp.Column padded>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/0B8uG5MOKcEygWXByMlVaTV94Y2hwRTExRUhtY21mR2lNRmpj/view?usp=sharing"
              >
                Liberación de Responsabilidad
              </a>
            </Comp.Column>
          </Comp.Row>
        </Comp.Column>
        <BodyFooter>
          © {new Date().getFullYear()}, © INDIGO TRANSLATIONS 2019
        </BodyFooter>
      </Comp.Row>
    </Comp.Container>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: ${theme.colors.bodyColor};
  color: ${props => props.theme.colors.whiteColor};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.7rem;
  a {
    color: #fff !important;
  }

  @media ${theme.breakpoint.onlyMobile} {
    text-align: center;

    a {
      margin-bottom: 1rem;
      display: block;
    }
  }
`;

const BodyFooter = styled(Comp.Column)`
  text-align: center;
  padding: 2rem;
  text-align: right;
  flex: 1;

  @media ${theme.breakpoint.onlyMobile} {
    text-align: center;
    padding-top: 0;
  }
`;

export default Footer;
