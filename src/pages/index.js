import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import { theme } from "../components/theme";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Comp.Row mobile>
          <HeroContent>
            <h1 className="extended">
              Traducciones de carácter técnico para empresas
            </h1>
            <p className="body-l" style={{ marginBottom: "2rem" }}>
              Nos enfocamos en traducciones de documentos técnicos en Inglés,
              Español, Italiano, Francés y Alemán involucrando a expertos en
              cada materia para garantizar el mejor resultado.
            </p>
          </HeroContent>
        </Comp.Row>
      </Hero>
    </Comp.Container>

    <Comp.Container>
      <p className="font-xl">
        Nuestra intención es ser un aliado de su organización proporcionándole
        un servicio de traducción profesional, ágil y confiable.{" "}
      </p>
    </Comp.Container>

    <Comp.Container>
      <h4 className="uppercase-title">Nosotros</h4>
      <p>
        Indigo Translations fue fundado en Mayo de 2019 en la Ciudad de México
        por el Lic. Miguel Burle. Miguel funda Indigo Translations al percatarse
        que la accesibilidad a un contenido en diversos idiomas se ha convertido
        primordial para la industria internacional.{" "}
      </p>

      <Comp.Row>
        <Comp.Column>foto miguel Miguel Burle - Director</Comp.Column>
        <Comp.Column style={{ flex: "1" }}>
          <p>
            <strong>
              Las raíces de Indigo Translations se encuentran profundamente en
              la investigación académica y la industria legal.{" "}
            </strong>
            <br />
            <br />
            Previamente a fundar Indigo Translations, Miguel laboró
            aproximadamente 8 años en una prestigiosa firma legal en la Ciudad
            de México en donde participó en la negociación y asesoría en
            fusiones, adquisiciones, joint ventures, escisiones y liquidaciones
            representando a empresas nacionales, internacionales, fondos de
            capital privado y fondos de capital de riesgo así como en la
            preparación de documentación transaccional para diversas industrias.
          </p>
        </Comp.Column>
      </Comp.Row>
    </Comp.Container>

    <div>
      <Comp.Row>
        <Comp.Column>
          <p>
            <strong>
              Indigo Translations ofrece servicios de idiomas y soluciones
              técnicas de calidad en México.
            </strong>
            <br />
            Si es que usted se puso en contacto con nosotros para enfrentar la
            internacionalización, la comunicación efectiva entre los miembros su
            organización o la comprensión de contenido nuestro equipo podrá
            adaptarse a sus necesidades, tiempos de entrega y demás
            particularidades que le puedan surgir en el día a día. Indigo
            Translations ofrece servicios de traducción de alta calidad con el
            objetivo de ser su aliado en esta era digital y apoyarlo en crecer
            el capital lingüístico de su organización.
          </p>
        </Comp.Column>
        <Comp.Column>image sattelite</Comp.Column>
      </Comp.Row>
    </div>

    <div>
      <Comp.Row>
        <Comp.Column>image buques</Comp.Column>
        <Comp.Column>
          <p>
            Nuestros traductores están graduados de las más prestigiosas
            Universidades de México y cuentan con años de especialización y
            experiencia en su respectiva materia. Asimismo, nuestro equipo
            incluye peritos traductores autorizados por el Tribunal Superior de
            Justicia de la Ciudad de México y el resto de las entidades
            federativas del país.
          </p>
        </Comp.Column>
      </Comp.Row>
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

export const Hero = styled.div``;

export const HeroContent = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    width: 45%;
    padding-right: 3rem;
    padding-top: 4rem;

    h1 {
      margin: 2rem 0;
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
