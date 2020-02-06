import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import { theme } from "../components/theme";

import HeroImage from "../images/hero-placeholder.png";
import NosotrosImage from "../images/nosotros.jpg";
import ServiciosImage from "../images/satelite.png";
import TraductoresImage from "../images/buques.png";
import MiguelImage from "../images/miguel.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero style={{ backgroundImage: `${HeroImage}` }}>
      <Comp.Container>
        <HeroContent>
          <h1 style={{ color: "#fff" }}>
            Traducciones de carácter técnico para empresas
          </h1>
          <p style={{ color: "#fff" }}>
            Nos enfocamos en traducciones de documentos de carácter técnico
            utilizando tecnología lingüística e involucrando a expertos en cada
            materia con el objetivo de garantizar un resultado óptimo.
          </p>
        </HeroContent>
      </Comp.Container>
    </Hero>

    <div style={{ background: "#fff" }}>
      <Comp.Width75>
        <p style={{ textAlign: "center", fontSize: "28px" }}>
          Nuestra intención es ser un aliado de su organización proporcionándole
          un servicio de traducción profesional, ágil y confiable.
        </p>
      </Comp.Width75>
    </div>

    <Nosotros>
      <Comp.Container>
        <Comp.Width75 style={{ padding: "0" }}>
          <Comp.TextCenter>
            <Comp.SectionTitleInverse>Nosotros</Comp.SectionTitleInverse>
            <p>
              Indigo Translations fue fundado en Mayo de 2019 en la Ciudad de
              México por el Lic. Miguel Burle. Miguel funda Indigo Translations
              al percatarse de que la accesibilidad a un contenido en diversos
              idiomas se ha convertido primordial para la industria
              internacional.{" "}
            </p>
          </Comp.TextCenter>
          <MiguelSection>
            <Comp.Column style={{ paddingRight: "3rem" }}>
              <img src={MiguelImage} width="230px" />
              <p
                style={{
                  marginTop: "2rem",
                  fontSize: "1rem",
                  textAlign: "center"
                }}
              >
                <strong>Miguel Burle</strong> - Director
              </p>
            </Comp.Column>
            <Comp.Column style={{ flex: "1" }}>
              <p>
                <strong>
                  Las raíces de Indigo Translations se encuentran profundamente
                  en la investigación académica y la industria legal.{" "}
                </strong>
                <br />
                <br />
                Previamente a fundar Indigo Translations, Miguel laboró
                aproximadamente 8 años en una prestigiosa firma legal en la
                Ciudad de México en donde participó en la negociación y asesoría
                en fusiones, adquisiciones, joint ventures, escisiones y
                liquidaciones representando a empresas nacionales,
                internacionales, fondos de capital privado y fondos de capital
                de riesgo así como en la preparación de documentación
                transaccional para diversas industrias.
              </p>
            </Comp.Column>
          </MiguelSection>
        </Comp.Width75>
      </Comp.Container>
    </Nosotros>
    <Servicios>
      <Comp.Row>
        <Comp.Column style={{ flex: "1" }}>
          <ServiciosContent>
            <p>
              <strong>
                Indigo Translations ofrece servicios de idiomas y soluciones
                técnicas de calidad en México.
              </strong>
              <br />
              <br />
              Si es que usted se puso en contacto con nosotros para enfrentar la
              internacionalización, la comunicación efectiva entre los miembros
              su organización o la comprensión de contenido nuestro equipo podrá
              adaptarse a sus necesidades, tiempos de entrega y demás
              particularidades que le puedan surgir en el día a día. <br />
              <br />
              Indigo Translations ofrece servicios de traducción de alta calidad
              con el objetivo de ser su aliado en esta era digital y apoyarlo en
              crecer el capital lingüístico de su organización.
            </p>
          </ServiciosContent>
        </Comp.Column>
        <ServiciosImageContainer>
          <img src={ServiciosImage} />
        </ServiciosImageContainer>
      </Comp.Row>
    </Servicios>

    <Comp.Row>
      <Comp.Column style={{ flex: "1" }}>
        <img src={TraductoresImage} />
      </Comp.Column>
      <Comp.Column style={{ flex: "1" }}>
        <GridContent>
          <p>
            Nuestros traductores están graduados de las más prestigiosas
            Universidades de México y cuentan con años de especialización y
            experiencia en su respectiva materia. Asimismo, nuestro equipo
            incluye peritos traductores autorizados por el Tribunal Superior de
            Justicia de la Ciudad de México y el resto de las entidades
            federativas del país.
          </p>
        </GridContent>
      </Comp.Column>
    </Comp.Row>

    <div>
      <Comp.Row></Comp.Row>
    </div>

    <div>
      <Comp.Row>banner de servicios</Comp.Row>
    </div>

    <div>
      <Comp.Container>
        <h4 className="uppercase-title">Proceso</h4>
        <p>
          Indigo Translations utiliza análisis de lenguaje, tecnología
          lingüística avanzada y expertos en cada materia con el objetivo de
          brindar un servicio de traducción ágil y confiable.
        </p>
        <div>Evaluación y linea del tiempo</div>
        otros here
      </Comp.Container>
      <Comp.Row>banner de servicios</Comp.Row>
    </div>

    <div>
      <Comp.Row>
        <Comp.Column>image soumaya</Comp.Column>
        <h4 className="uppercase-title">Confidencialidad</h4>
        <Comp.Column>
          <p>
            La información proporcionada por nuestros clientes es tratada como
            estrictamente confidencial; sin embargo, y para su tranquilidad
            ofrecemos la posibilidad de firmar convenios de confidencialidad con
            el objetivo de garantizar la tranquilidad de nuestros clientes.
            <br /> No dude en contactar a cualquier miembro de nuestro equipo
            para obtener mayor información al respecto.
          </p>
        </Comp.Column>
      </Comp.Row>
    </div>

    <div>
      <Comp.Row>
        <Comp.Column>contact form</Comp.Column>
        <Comp.Column>
          <p>Póngase en contacto con nuestro equipo.</p>
          <div>
            Av. Yucatán No. 54, Int. 1350, Col. Roma Norte, Del. Cuauhtémoc,
            C.P. 06700, Ciudad de México, México
          </div>
          <div>
            <a href="mailto:info@indigo-translations.com.mx">
              info@indigo-translations.com.mx
            </a>
          </div>
        </Comp.Column>
      </Comp.Row>
    </div>
  </Layout>
);

export default IndexPage;

export const Hero = styled(Comp.BackgroundImageContainer)`
  border-bottom: 10px solid ${theme.colors.primaryColor};
  background-image: url(${HeroImage});
`;

export const HeroContent = styled(Comp.Column)`
  padding: 3rem 0 5rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  justify-content: center;

  @media ${theme.breakpoint.upFromMobile} {
    width: 75%;
    margin: 0px auto;

    h1 {
      margin-bottom: 2rem;
      font-size: 54px;
    }
  }

  @media ${theme.breakpoint.onlyMobile} {
    margin-bottom: 2rem;
    order: 2;

    h1 {
      margin: -1rem 0 1rem;
    }
  }
`;

const Nosotros = styled(Comp.BackgroundImageContainer)`
  background-image: url(${NosotrosImage});
`;

// const Servicios = styled(Comp.BackgroundImageContainer)`
//   background-image: url(${NosotrosImage});
// `;

const MiguelSection = styled(Comp.Row)`
  background-color: #000;
  border-bottom: 7px solid ${theme.colors.primaryColor};
  margin-top: 6rem;
  padding: 3rem;
  color: #fff;
  position: relative;
  z-index: 1;
`;

const Servicios = styled.div`
  margin-top: -20rem;
  background: #fff;
  border-top: 10px solid #fff;
`;

const ServiciosContent = styled.div`
  padding: 20rem 7% 0;
`;

const GridContent = styled.div`
  padding: 6rem 7% 0;
  flex: 1;
`;

const ServiciosImageContainer = styled(Comp.Column)`
  flex: 1;
  overflow: hidden;
  height: 100%;
`;

// const Section = styled.div`
//   padding: 5rem 0;
// `;
