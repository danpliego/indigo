import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import { theme } from "../components/theme";

import Logo from "../images/logo.png";

import HeroImage from "../images/hero-placeholder.png";
import NosotrosImage from "../images/nosotros.jpg";
import ServiciosImage from "../images/satelite.png";
import TraductoresImage from "../images/buques.png";
import MiguelImage from "../images/miguel.png";
import ConfidencialidadImage from "../images/soumaya.png";

import BursatilImage from "../images/servicios/bursatil.png";
import LegalImage from "../images/servicios/legal.png";
import FinancieroImage from "../images/servicios/financiero.png";
import FiscalImage from "../images/servicios/fiscal.png";
import InmobiliarioImage from "../images/servicios/inmobiliario.png";
import OilGasImage from "../images/servicios/oilgas.png";
import MedicoImage from "../images/servicios/medico.png";
import TelecomImage from "../images/servicios/telecom.png";
import InformaticaImage from "../images/servicios/informatica.png";
import PatentesImage from "../images/servicios/patentes.png";
import LaboralImage from "../images/servicios/laboral.png";
import ContableImage from "../images/servicios/contable.png";

import IconEvaluacion from "../images/icons/evaluacion.svg";
import IconGlosario from "../images/icons/glosario.svg";
import IconTraduccion from "../images/icons/traduccion.svg";
import IconCalidad from "../images/icons/calidad.svg";
import IconEntrega from "../images/icons/entrega.svg";
import IconLocation from "../images/icons/location.svg";
import IconEmail from "../images/icons/email.svg";

import CorporativosForm from "../components/corporativos_form.js";

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
                <strong>Miguel Burle</strong>
                <br />
                Director General
              </p>
            </Comp.Column>
            <Comp.Column style={{ flex: "1" }}>
              <p>
                Previamente a fundar Indigo Translations Miguel laboró
                aproximadamente 8 años en una prestigiosa firma legal en la
                Ciudad de México en donde participó en la negociación y asesoría
                en fusiones, adquisiciones, <i>joint ventures</i>, escisiones y
                liquidaciones, representando a empresas nacionales,
                internacionales, fondos de capital privado y fondos de capital
                de riesgo así como en la preparación de documentación
                transaccional para diversas industrias.
                <br />
                <br />
                <strong>
                  Las raíces de Indigo Translations se encuentran profundamente
                  en la investigación académica y la industria legal.{" "}
                </strong>
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
      <GridImage style={{ flex: "1" }}>
        <img src={TraductoresImage} />
      </GridImage>
      <Comp.Column style={{ flex: "1" }}>
        <GridContent>
          <p>
            Nuestros traductores están graduados de las más prestigiosas
            universidades en México y cuentan con años de especialización y
            experiencia en su respectiva materia. Asimismo, nuestro equipo
            incluye peritos traductores autorizados por el Tribunal Superior de
            Justicia de la Ciudad de México y el resto de las entidades
            federativas del país.
          </p>
        </GridContent>
      </Comp.Column>
    </Comp.Row>

    <div style={{ background: "#F1F1F1" }}>
      <Comp.Width75>
        <p style={{ textAlign: "center", fontSize: "28px" }}>
          Nuestra cartera de clientes está formada por instituciones
          financieras, firmas legales internacionales con presencia en México,
          empresas Oil & Gas, entre otros.
        </p>
      </Comp.Width75>
    </div>

    <ImageRow>
      <ImageColumn>
        <img src={BursatilImage} />
        <p>Bursatil</p>
      </ImageColumn>
      <ImageColumn>
        <img src={LegalImage} />
        <p>Legal</p>
      </ImageColumn>
      <ImageColumn>
        <img src={FinancieroImage} />
        <p>Financiero</p>
      </ImageColumn>
      <ImageColumn>
        <img src={FiscalImage} />
        <p>Fiscal</p>
      </ImageColumn>
      <ImageColumn>
        <img src={InmobiliarioImage} />
        <p>Inmobiliario</p>
      </ImageColumn>
      <ImageColumn>
        <img src={OilGasImage} />
        <p>Oil & Gas</p>
      </ImageColumn>
      <ImageColumn>
        <img src={MedicoImage} />
        <p>Medico</p>
      </ImageColumn>
      <ImageColumn>
        <img src={TelecomImage} />
        <p>Telecom</p>
      </ImageColumn>
      <ImageColumn>
        <img src={InformaticaImage} />
        <p>Informatica</p>
      </ImageColumn>
      <ImageColumn>
        <img src={PatentesImage} />
        <p>Patentes y propiedad intelectual</p>
      </ImageColumn>
      <ImageColumn>
        <img src={LaboralImage} />
        <p>LABORAL Y SEGURIDAD SOCIAL</p>
      </ImageColumn>
      <ImageColumn>
        <img src={ContableImage} />
        <p>Contable</p>
      </ImageColumn>
    </ImageRow>

    <Comp.Width75 style={{ paddingBottom: "0" }}>
      <Comp.TextCenter>
        <Comp.SectionTitle>Proceso</Comp.SectionTitle>
        <p>
          Indigo Translations utiliza análisis de lenguaje y tecnología
          lingüística avanzada e involucra a expertos en cada materia con el
          objetivo de brindar un servicio de traducción ágil y confiable.
        </p>
        <Comp.Width75 style={{ paddingTop: "2rem" }}>
          <ProcessStep>
            <Comp.Column>
              <CircleImage>
                <img src={IconEvaluacion} />
              </CircleImage>
            </Comp.Column>
            <h5>Evaluación y linea del tiempo</h5>
          </ProcessStep>
          <ProcessStep>
            <Comp.Column>
              <CircleImage>
                <img src={IconGlosario} />
              </CircleImage>
            </Comp.Column>
            <h5>Glosario y terminología</h5>
          </ProcessStep>
          <ProcessStep>
            <Comp.Column>
              <CircleImage>
                <img src={IconTraduccion} />
              </CircleImage>
            </Comp.Column>
            <h5>Traducción por una especialista</h5>
          </ProcessStep>
          <ProcessStep>
            <Comp.Column>
              <CircleImage>
                <img src={IconCalidad} />
              </CircleImage>
            </Comp.Column>
            <h5>Control de calidad</h5>
          </ProcessStep>
          <ProcessStep>
            <Comp.Column>
              <CircleImage>
                <img src={IconEntrega} />
              </CircleImage>
            </Comp.Column>
            <h5>Entrega al cliente y retroalimentación</h5>
          </ProcessStep>
        </Comp.Width75>
      </Comp.TextCenter>
    </Comp.Width75>

    <Confidencialidad>
      <GridImage style={{ flex: "1" }}>
        <img src={ConfidencialidadImage} />
      </GridImage>
      <Comp.Column style={{ flex: "1" }}>
        <GridContent>
          <Comp.TextCenter style={{ paddingTop: "3rem" }}>
            <Comp.SectionTitleInverse>
              Confidencialidad
            </Comp.SectionTitleInverse>
          </Comp.TextCenter>
          <p style={{ color: "#fff" }}>
            La información proporcionada por nuestros clientes es tratada como
            estrictamente confidencial y en cumplimiento con la normatividad
            aplicable; sin embargo, ofrecemos la posibilidad de firmar convenios
            de confidencialidad con el objetivo de garantizar la tranquilidad de
            nuestros clientes.
            <br />
            <br /> No dude en contactar a cualquier miembro de nuestro equipo
            para obtener mayor información al respecto.
          </p>
        </GridContent>
      </Comp.Column>
    </Confidencialidad>

    <div>
      <Comp.Row>
        <Comp.Column
          style={{ flex: "1", background: `${theme.colors.primaryColor}` }}
        >
          <GridContent>
            <Comp.TextCenter>
              <Comp.SectionTitleInverse>Contacto</Comp.SectionTitleInverse>
            </Comp.TextCenter>
            <CorporativosForm />
          </GridContent>
        </Comp.Column>
        <Comp.Column style={{ flex: "1" }}>
          <GridContent>
            <a href="/">
              <img src={Logo} width="160" />
            </a>
            <p style={{ margin: "2rem 0" }}>
              Póngase en contacto con nuestro equipo.
            </p>
            <Comp.Row style={{ marginBottom: "2rem", alignItems: "center" }}>
              <Comp.Column>
                <CircleImage>
                  <img src={IconEmail} />
                </CircleImage>
              </Comp.Column>
              <Comp.Column>
                <p>
                  <a href="mailto:info@indigo-translations.com.mx">
                    info@indigo-translations.com.mx
                  </a>
                </p>
              </Comp.Column>
            </Comp.Row>
            <Comp.Row style={{ marginBottom: "2rem" }}>
              <Comp.Column>
                <CircleImage>
                  <img src={IconLocation} />
                </CircleImage>
              </Comp.Column>
              <Comp.Column>
                <p>
                  Av. Yucatán No. 54, Int. 1350, Col. Roma Norte, Del.
                  Cuauhtémoc, C.P. 06700, Ciudad de México, México
                </p>
              </Comp.Column>
            </Comp.Row>
          </GridContent>
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
  padding: 20rem 10% 6rem;
`;

const GridImage = styled(Comp.Column)`
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
  }
`;

const GridContent = styled.div`
  padding: 6rem 10% 6rem;
  flex: 1;
`;

const ServiciosImageContainer = styled(Comp.Column)`
  flex: 1;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const ImageRow = styled(Comp.Row)`
  flex-wrap: wrap;
`;

const ImageColumn = styled(Comp.Column)`
  background: #000;
  display: flex;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border: 1px solid #fff;
  height: 15rem;
  flex: 0 0 16.6666667%;
  max-width: 16.6666667%;
  flex-wrap: wrap;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.5;
    }
  }

  img {
    transition: all 0.33s ease-in-out;
    position: absolute;
    opacity: 0.2;
    height: 100%;
    max-width: none;
  }

  p {
    z-index: 1;
    color: #fff;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
  }
`;

const ProcessStep = styled(Comp.Row)`
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 1rem;
  transition: all 0.33s ease-in-out;
  margin: 0 1.5rem 1.5rem;
  z-index: 1;
  position: relative;

  &:hover {
    transform: translate(0, -5px);
  }

  h5 {
    margin-bottom: 0;
  }
`;

const CircleImage = styled.div`
  width: 3rem;
  height: 3rem;
  background: #000;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

const Confidencialidad = styled(Comp.Row)`
  margin-top: -10rem;
  background: #000;
`;
