import React from "react";
import styled from "styled-components";
import * as Comp from "./layoutComponents";
import { theme } from "./theme";

const Footer = () => (
  <FooterContainer>
    <Comp.Container>
      <Comp.Row>
        <Comp.Column>
          <Comp.Row
            style={{
              justifyContent: "center",
              padding: "2rem"
            }}
          >
            <Comp.Column style={{ borderRight: "1px solid #222" }} padded>
              <a href="#">Aviso de privacidad</a>
            </Comp.Column>
            <Comp.Column padded>
              <a href="#">Liberación de Responsabilidad</a>
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
`;

const BodyFooter = styled(Comp.Column)`
  text-align: center;
  padding: 2rem;
  text-align: right;
  flex: 1;
`;

export default Footer;
