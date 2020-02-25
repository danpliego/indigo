import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import { theme } from "../components/theme";

import Logo from "../images/logo.png";

import NosotrosImage from "../images/nosotros.jpg";
import ServiciosImage from "../images/satelite.jpeg";
import TraductoresImage from "../images/buques.jpeg";
import MiguelImage from "../images/miguel.png";
import ConfidencialidadImage from "../images/soumaya.jpeg";

import BursatilImage from "../images/servicios/bursatil.jpg";
import LegalImage from "../images/servicios/legal.jpg";
import FinancieroImage from "../images/servicios/financiero.jpg";
import FiscalImage from "../images/servicios/fiscal.jpg";
import InmobiliarioImage from "../images/servicios/inmobiliario.jpg";
import OilGasImage from "../images/servicios/oilgas.jpg";
import MedicoImage from "../images/servicios/medico.jpg";
import TelecomImage from "../images/servicios/telecom.jpg";
import InformaticaImage from "../images/servicios/informatica.jpg";
import PatentesImage from "../images/servicios/patentes.jpg";
import LaboralImage from "../images/servicios/laboral.jpg";
import ContableImage from "../images/servicios/contable.jpg";

import CarteraImage from "../images/cartera.jpeg";

import IconLocation from "../images/icons/location.svg";
import IconEmail from "../images/icons/email.svg";

import ProcesoBG from "../images/textura-proceso.png";

import CorporativosForm from "../components/corporativos_form.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <Comp.Container>
        <HeroContent>
          <h1>Traducciones de carácter técnico para empresas</h1>
          <p>
            Nos enfocamos en traducciones de documentos de carácter técnico
            utilizando tecnología lingüística e involucrando a expertos en cada
            materia con el objetivo de garantizar un resultado óptimo.
          </p>
        </HeroContent>
      </Comp.Container>
    </Hero>

    <div style={{ background: "#fff" }}>
      <Comp.Width75>
        <p
          style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" }}
          className="playfair-display"
        >
          Nuestra intención es ser un aliado de su organización proporcionándole
          un servicio de traducción profesional, ágil y confiable.
        </p>
      </Comp.Width75>
    </div>

    <Nosotros id="nosotros">
      <Comp.Container>
        <Comp.Width75 style={{ padding: "0" }}>
          <Comp.TextCenter>
            <Comp.SectionTitleInverse>Nosotros</Comp.SectionTitleInverse>
            <p>
              Indigo Translations fue fundado en Mayo de 2019 en la Ciudad de
              México por el Lic. Miguel Burle. Miguel fundó Indigo Translations
              al percatarse que la accesibilidad a un contenido en diversos
              idiomas se ha convertido en un elemento esencial para la industria
              internacional.
            </p>
          </Comp.TextCenter>
          <MiguelSection mobile>
            <MiguelPhoto>
              <img src={MiguelImage} width="230px" />
              <p
                style={{
                  marginTop: "2rem",
                  fontSize: "1rem",
                  textAlign: "center"
                }}
                className="playfair-display"
              >
                <strong>Miguel Burle</strong>
                <br />
                Director General
              </p>
            </MiguelPhoto>
            <Comp.Column style={{ flex: "1" }}>
              <p className="playfair-display">
                Previo a fundar Indigo Translations Miguel laboró
                aproximadamente 8 años en una prestigiosa firma legal en la
                Ciudad de México en donde participó en la negociación y asesoría
                en fusiones, adquisiciones, joint ventures, escisiones y
                liquidaciones, representando a empresas nacionales,
                internacionales, fondos de capital privado y fondos de capital
                de riesgo así como en la preparación de documentación
                transaccional para diversas industrias.
                <br />
                <br />
                <strong>
                  Las raíces de Indigo Translations se encuentran profundamente
                  en la investigación académica y la industria legal.
                </strong>
              </p>
            </Comp.Column>
          </MiguelSection>
        </Comp.Width75>
      </Comp.Container>
    </Nosotros>
    <Servicios>
      <Comp.Row mobile>
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
              de su organización o la comprensión de contenido, nuestro equipo
              podrá adaptarse a sus necesidades, tiempos de entrega y demás
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

    <Comp.Row mobile>
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

    <BannerCartera id="servicios">
      <Comp.Width75>
        <p
          style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" }}
          className="playfair-display"
        >
          Nuestra cartera de clientes está formada por instituciones
          financieras, firmas legales internacionales con presencia en México,
          empresas <i>Oil & Gas</i>, entre otros.
        </p>
      </Comp.Width75>
    </BannerCartera>

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
        <p>
          <i>Oil & Gas</i>
        </p>
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

    <Proceso>
      <Comp.Width75 style={{ paddingBottom: "0" }}>
        <Comp.TextCenter>
          <Comp.SectionTitle>Proceso</Comp.SectionTitle>
          <p>
            Indigo Translations utiliza análisis de lenguaje y tecnología
            lingüística avanzada mejor conocida como CAT (Computer-assisted
            translation) e involucra a expertos en cada materia con el objetivo
            de brindar un servicio de traducción ágil y confiable.
          </p>
          <Comp.Width75 style={{ paddingTop: "2rem" }}>
            <ProcessStep>
              <Comp.Column>
                <CircleImage>
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3516 6.00781C16.7839 7.64844 17.5 9.5625 17.5 11.75C17.5 14.1719 16.6406 16.2422 14.9219 17.9609C13.2292 19.6536 11.1719 20.5 8.75 20.5C6.32812 20.5 4.25781 19.6536 2.53906 17.9609C0.846354 16.2422 0 14.1719 0 11.75C0 9.45833 0.78125 7.47917 2.34375 5.8125C3.90625 4.11979 5.82031 3.19531 8.08594 3.03906V1.75H7.1875C7.05729 1.75 6.9401 1.71094 6.83594 1.63281C6.75781 1.52865 6.71875 1.41146 6.71875 1.28125V0.96875C6.71875 0.838542 6.75781 0.734375 6.83594 0.65625C6.9401 0.552083 7.05729 0.5 7.1875 0.5H10.3125C10.4427 0.5 10.5469 0.552083 10.625 0.65625C10.7292 0.734375 10.7812 0.838542 10.7812 0.96875V1.28125C10.7812 1.41146 10.7292 1.52865 10.625 1.63281C10.5469 1.71094 10.4427 1.75 10.3125 1.75H9.33594V3C11.2891 3.13021 13.0078 3.84635 14.4922 5.14844L15.1562 4.44531C15.3906 4.23698 15.612 4.23698 15.8203 4.44531L16.0547 4.67969C16.263 4.88802 16.263 5.10938 16.0547 5.34375L15.3516 6.00781ZM3.4375 17.0625C4.89583 18.5208 6.66667 19.25 8.75 19.25C10.8333 19.25 12.6042 18.5208 14.0625 17.0625C15.5208 15.6042 16.25 13.8333 16.25 11.75C16.25 9.66667 15.5208 7.89583 14.0625 6.4375C12.6042 4.97917 10.8333 4.25 8.75 4.25C6.66667 4.25 4.89583 4.97917 3.4375 6.4375C1.97917 7.89583 1.25 9.66667 1.25 11.75C1.25 13.8333 1.97917 15.6042 3.4375 17.0625ZM8.90625 14.25H8.59375C8.28125 14.25 8.125 14.0938 8.125 13.7812V7.21875C8.125 6.90625 8.28125 6.75 8.59375 6.75H8.90625C9.21875 6.75 9.375 6.90625 9.375 7.21875V13.7812C9.375 14.0938 9.21875 14.25 8.90625 14.25Z"
                      fill="white"
                    />
                  </svg>
                </CircleImage>
              </Comp.Column>
              <h5>Evaluación y linea del tiempo</h5>
            </ProcessStep>
            <ProcessStep>
              <Comp.Column>
                <CircleImage>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1172 0.75C20.7682 0.75 21.3281 0.984375 21.7969 1.45312C22.2656 1.89583 22.5 2.42969 22.5 3.05469V14.6562C22.5 15.2552 22.2786 15.776 21.8359 16.2188C21.3932 16.6615 20.8594 16.9089 20.2344 16.9609C17.2396 17.0911 14.8698 17.4818 13.125 18.1328C12.9167 18.2109 12.7083 18.25 12.5 18.25H10C9.79167 18.25 9.58333 18.2109 9.375 18.1328C7.63021 17.4818 5.26042 17.0911 2.26562 16.9609C1.64062 16.9089 1.10677 16.6615 0.664062 16.2188C0.221354 15.776 0 15.2552 0 14.6562V3.05469C0 2.42969 0.234375 1.89583 0.703125 1.45312C1.17188 0.984375 1.73177 0.75 2.38281 0.75C3.32031 0.75 4.67448 0.90625 6.44531 1.21875C8.21615 1.50521 9.72656 1.97396 10.9766 2.625C11.1589 2.72917 11.3411 2.72917 11.5234 2.625C12.7734 1.97396 14.2839 1.50521 16.0547 1.21875C17.8255 0.90625 19.1797 0.75 20.1172 0.75ZM10.625 16.4141V8.48438V4.57812C10.625 4.08333 10.3776 3.71875 9.88281 3.48438C8.71094 2.96354 7.35677 2.58594 5.82031 2.35156C4.28385 2.11719 3.13802 2 2.38281 2C2.2526 2 2.1224 2.02604 1.99219 2.07812C1.88802 2.10417 1.78385 2.15625 1.67969 2.23438C1.60156 2.28646 1.52344 2.35156 1.44531 2.42969C1.39323 2.50781 1.34115 2.61198 1.28906 2.74219C1.26302 2.84635 1.25 2.95052 1.25 3.05469V14.6562C1.25 14.9167 1.35417 15.151 1.5625 15.3594C1.77083 15.5677 2.01823 15.6849 2.30469 15.7109C5.45573 15.8672 7.95573 16.2839 9.80469 16.9609C9.88281 16.987 9.96094 17 10.0391 17C10.1953 17 10.3255 16.9479 10.4297 16.8438C10.5599 16.7135 10.625 16.5703 10.625 16.4141ZM21.25 14.6562V3.05469C21.25 2.76823 21.1328 2.52083 20.8984 2.3125C20.6901 2.10417 20.4297 2 20.1172 2C19.362 2 18.2161 2.11719 16.6797 2.35156C15.1432 2.58594 13.7891 2.96354 12.6172 3.48438C12.1224 3.71875 11.875 4.08333 11.875 4.57812V8.48438V16.4141C11.875 16.5703 11.9271 16.7135 12.0312 16.8438C12.1615 16.9479 12.3047 17 12.4609 17C12.5391 17 12.6172 16.987 12.6953 16.9609C14.5443 16.2839 17.0443 15.8672 20.1953 15.7109C20.4818 15.6849 20.7292 15.5677 20.9375 15.3594C21.1458 15.151 21.25 14.9167 21.25 14.6562Z"
                      fill="white"
                    />
                  </svg>
                </CircleImage>
              </Comp.Column>
              <h5>Glosario y terminología</h5>
            </ProcessStep>
            <ProcessStep>
              <Comp.Column>
                <CircleImage>
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2656 9.05469C11.3021 10.0182 10.1302 10.5 8.75 10.5C7.36979 10.5 6.1849 10.0182 5.19531 9.05469C4.23177 8.0651 3.75 6.88021 3.75 5.5C3.75 4.11979 4.23177 2.94792 5.19531 1.98438C6.1849 0.994792 7.36979 0.5 8.75 0.5C10.1302 0.5 11.3021 0.994792 12.2656 1.98438C13.2552 2.94792 13.75 4.11979 13.75 5.5C13.75 6.88021 13.2552 8.0651 12.2656 9.05469ZM11.4062 2.84375C10.6771 2.11458 9.79167 1.75 8.75 1.75C7.70833 1.75 6.82292 2.11458 6.09375 2.84375C5.36458 3.57292 5 4.45833 5 5.5C5 6.54167 5.36458 7.42708 6.09375 8.15625C6.82292 8.88542 7.70833 9.25 8.75 9.25C9.79167 9.25 10.6771 8.88542 11.4062 8.15625C12.1354 7.42708 12.5 6.54167 12.5 5.5C12.5 4.45833 12.1354 3.57292 11.4062 2.84375ZM12.3438 12.375C13.776 12.401 14.987 12.9219 15.9766 13.9375C16.9922 14.9531 17.5 16.1771 17.5 17.6094V18.625C17.5 19.1458 17.3177 19.5885 16.9531 19.9531C16.5885 20.3177 16.1458 20.5 15.625 20.5H1.875C1.35417 20.5 0.911458 20.3177 0.546875 19.9531C0.182292 19.5885 0 19.1458 0 18.625V17.6094C0 16.1771 0.494792 14.9531 1.48438 13.9375C2.5 12.9219 3.72396 12.401 5.15625 12.375L6.71875 17.7656L8.04688 13.7812L7.07031 12.8047C6.86198 12.6224 6.8099 12.401 6.91406 12.1406C7.01823 11.8802 7.21354 11.75 7.5 11.75H10C10.2865 11.75 10.4818 11.8802 10.5859 12.1406C10.6901 12.401 10.638 12.6224 10.4297 12.8047L9.45312 13.7812L10.7812 17.7656L12.3438 12.375ZM1.875 19.25H5.85938L4.25781 13.7812C3.6849 13.9115 3.16406 14.1719 2.69531 14.5625C2.2526 14.9271 1.90104 15.3828 1.64062 15.9297C1.38021 16.4505 1.25 17.0104 1.25 17.6094V18.625C1.25 18.8073 1.30208 18.9505 1.40625 19.0547C1.53646 19.1849 1.69271 19.25 1.875 19.25ZM7.53906 19.25H9.96094L8.75 15.6172L7.53906 19.25ZM16.25 18.625V17.6094C16.25 16.6979 15.9635 15.8906 15.3906 15.1875C14.8177 14.4583 14.1016 13.9896 13.2422 13.7812L11.6406 19.25H15.625C15.8073 19.25 15.9505 19.1849 16.0547 19.0547C16.1849 18.9505 16.25 18.8073 16.25 18.625Z"
                      fill="white"
                    />
                  </svg>
                </CircleImage>
              </Comp.Column>
              <h5>Traducción por una especialista</h5>
            </ProcessStep>
            <ProcessStep>
              <Comp.Column>
                <CircleImage>
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2109 1.09375C16.4193 0.859375 16.6276 0.859375 16.8359 1.09375L17.3047 1.52344C17.513 1.75781 17.513 1.97917 17.3047 2.1875L5.58594 13.9062C5.35156 14.1406 5.13021 14.1406 4.92188 13.9062L0.273438 9.25781C0.0651042 9.04948 0.0651042 8.82812 0.273438 8.59375L0.742188 8.16406C0.820312 8.0599 0.924479 8.00781 1.05469 8.00781C1.1849 8.00781 1.28906 8.0599 1.36719 8.16406L5.23438 12.0312L16.2109 1.09375Z"
                      fill="white"
                    />
                  </svg>
                </CircleImage>
              </Comp.Column>
              <h5>Control de calidad</h5>
            </ProcessStep>
            <ProcessStep>
              <Comp.Column>
                <CircleImage>
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5156 5.98438L13.9844 6.45312C14.1146 6.58333 14.1146 6.72656 13.9844 6.88281L9.10156 11.7656C9.04948 11.8177 8.97135 11.8438 8.86719 11.8438C8.78906 11.8438 8.72396 11.8177 8.67188 11.7656L6.09375 9.1875C5.96354 9.03125 5.96354 8.88802 6.09375 8.75781L6.5625 8.28906C6.61458 8.23698 6.67969 8.21094 6.75781 8.21094C6.86198 8.21094 6.9401 8.23698 6.99219 8.28906L8.86719 10.2031L13.0859 5.98438C13.138 5.93229 13.2031 5.90625 13.2812 5.90625C13.3854 5.90625 13.4635 5.93229 13.5156 5.98438ZM2.96875 3.13281C4.92188 1.54427 7.27865 0.75 10.0391 0.75C12.7995 0.75 15.1562 1.54427 17.1094 3.13281C19.0625 4.72135 20.0391 6.63542 20.0391 8.875C20.0391 11.1146 19.0625 13.0286 17.1094 14.6172C15.1562 16.2057 12.7995 17 10.0391 17C8.8151 17 7.60417 16.8177 6.40625 16.4531C4.71354 17.651 2.90365 18.25 0.976562 18.25C0.559896 18.25 0.273438 18.0547 0.117188 17.6641C-0.0390625 17.2995 0.0130208 16.974 0.273438 16.6875C0.325521 16.6354 0.442708 16.5052 0.625 16.2969C0.833333 16.0625 1.08073 15.7109 1.36719 15.2422C1.67969 14.7474 1.92708 14.2656 2.10938 13.7969C0.729167 12.3385 0.0390625 10.6979 0.0390625 8.875C0.0390625 6.63542 1.01562 4.72135 2.96875 3.13281ZM10.0391 15.75C12.4609 15.75 14.5182 15.0859 16.2109 13.7578C17.9297 12.4036 18.7891 10.776 18.7891 8.875C18.7891 6.97396 17.9297 5.35938 16.2109 4.03125C14.5182 2.67708 12.4609 2 10.0391 2C7.61719 2 5.54688 2.67708 3.82812 4.03125C2.13542 5.35938 1.28906 6.97396 1.28906 8.875C1.28906 10.3854 1.86198 11.7396 3.00781 12.9375L3.55469 13.5234L3.28125 14.2656C2.94271 15.151 2.40885 16.0495 1.67969 16.9609C3.08594 16.8307 4.42708 16.3229 5.70312 15.4375L6.21094 15.0469L6.79688 15.2422C7.83854 15.5807 8.91927 15.75 10.0391 15.75Z"
                      fill="white"
                    />
                  </svg>
                </CircleImage>
              </Comp.Column>
              <h5>Entrega al cliente y retroalimentación</h5>
            </ProcessStep>
          </Comp.Width75>
        </Comp.TextCenter>
      </Comp.Width75>
    </Proceso>

    <Confidencialidad mobile>
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

    <div id="contacto">
      <Comp.Row mobile>
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
                <p style={{ marginBottom: "0" }}>
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
                <p style={{ marginBottom: "0" }}>
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

export const Hero = styled.div`
  position: relative;
  overflow: hidden;
  background: ${theme.colors.whiteColor};

  > div {
    position: relative;
    z-index: 2;
  }
`;

export const HeroContent = styled(Comp.Column)`
  padding: 5rem 0;
  min-height: 60vh;
  display: flex;
  justify-content: center;

  @media ${theme.breakpoint.upFromMobile} {
    width: 50%;
    h1 {
      margin-bottom: 2rem;
      font-size: 54px;
      color: ${theme.colors.primaryColor};
      text-shadow: 0 4px 4px rgba(2, 77, 190, 0.1);
    }
    p {
      opacity: 0.5;
    }
  }
`;

const Nosotros = styled(Comp.BackgroundImageContainer)`
  background-image: url(${NosotrosImage});
  position: relative;

  h2,
  p {
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 2;
  }

  &:after {
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;

const MiguelSection = styled(Comp.Row)`
  background-color: #000;
  border-bottom: 7px solid ${theme.colors.primaryColor};
  margin-top: 6rem;
  padding: 3rem;
  color: #fff;
  position: relative;
  z-index: 1;

  @media ${theme.breakpoint.onlyMobile} {
    text-align: center;
  }
`;

const MiguelPhoto = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    padding-right: 3rem;
  }
`;

const Servicios = styled.div`
  margin-top: -20rem;
  background: #fff;
  border-top: 10px solid #fff;
  position: relative;
`;

const ServiciosContent = styled.div`
  padding: 20rem 10% 6rem;
`;

const GridImage = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      height: 100%;
      width: auto;
      max-width: none;
    }
  }

  @media ${theme.breakpoint.onlyMobile} {
    order: 2;
  }
`;

const GridContent = styled.div`
  padding: 6rem 10% 6rem;
  flex: 1;
`;

const ServiciosImageContainer = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    flex: 1;
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: auto;
      max-width: none;
    }
  }

  @media ${theme.breakpoint.onlyMobile} {
    height: 300px;
    overflow: hidden;

    img {
      margin-top: -150px;
    }
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

  @media (max-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

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
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 0;
    padding: 1rem;
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

const Proceso = styled.div`
  background: url(${ProcesoBG});
`;

const BannerCartera = styled(Comp.BackgroundImageContainer)`
  background-image: url(${CarteraImage});
  padding: 0 !important;

  p {
    color: #000;
  }
`;

const ProcessStep = styled(Comp.Row)`
  background: ${theme.colors.primaryColor};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding: 1rem;
  transition: all 0.33s ease-in-out;
  margin: 0 1.5rem 1.5rem;
  z-index: 1;
  position: relative;
  border-radius: 2px;

  &:hover {
    transform: translate(0, -5px);
  }

  ${CircleImage} {
    background: #fff;

    svg path {
      fill: #000;
    }
  }

  h5 {
    margin-bottom: 0;
    color: #fff;
  }
`;

const Confidencialidad = styled(Comp.Row)`
  background: #000;

  @media ${theme.breakpoint.upMobile} {
    margin-top: -10rem;
  }

  @media ${theme.breakpoint.onlyMobile} {
    margin-top: -7rem;
  }
`;
