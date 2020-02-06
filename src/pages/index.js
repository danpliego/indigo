import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import styled from "styled-components";
import ProductColumn from "../components/ProductColumn";
import { theme } from "../components/theme";

import HeroImage from "../images/home/hero-image.png";
import BannerImage from "../images/home/banner-image.png";

import PosTools from "../images/pos-tools/home-image.jpg";
import Servicios from "../images/servicios-en-la-nube/home-image.jpg";
import BillPocket from "../images/bill-pocket/home-image.jpg";
import Desarrollo from "../images/desarrollo-a-la-medida/home-image.jpg";
import TiempoAire from "../images/tiempo-aire/home-image.jpg";
import Corporativos from "../images/corporativos/home-image.jpg";
import Facturacion from "../images/facturacion/home-image.jpg";

const IndexPage = () => (
  <Layout>
    <Comp.Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <Comp.Row mobile>
          <HeroContent>
            <h1 className="extended">
              La forma simple de administrar tu negocio.{" "}
            </h1>
            <p className="body-l" style={{ marginBottom: "2rem" }}>
              MyBusiness POS es el sistema de punto de venta que hará tu vida
              más sencilla, con su gran precio, su facilidad de uso y su
              experiencia en el mercado. Da clic y compruébalo tu mismo.
            </p>
            <Comp.ButtonContainer>
              <Comp.ButtonPrimary to="/productos/my-business">
                Pruébalo gratis
              </Comp.ButtonPrimary>
            </Comp.ButtonContainer>
          </HeroContent>
          <Comp.Column flex={1} style={{ marginTop: "-2rem" }}>
            <img
              src={HeroImage}
              style={{ width: "620px" }}
              alt="MyBusiness POS sistema de punto de venta gratis"
            />
          </Comp.Column>
        </Comp.Row>
      </Hero>
    </Comp.Container>
    <BlueArea>
      <RowButtons>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Venta de Tiempo Aire"
            description="Aumenta tus ganancias ofreciendo recargas y pago de servicios. "
            link="/productos/tiempo-aire"
            image={TiempoAire}
            buttonText="Más información"
          />
          <ProductColumn
            title="Facturación Electrónica"
            description="Adquiere paquetes de timbres y otorga facturas electrónicas en tu negocio."
            link="/productos/facturacion-electronica"
            image={Facturacion}
            buttonText="Más información"
            secondaryLink="/facturacion-electronica-comprar"
          />
          <ProductColumn
            title="Corporativos"
            description="Controla tus sucursales o franquicias con un sistema adaptado a la medida."
            link="/corporativos"
            image={Corporativos}
            buttonText="Más información"
          />
          <ProductColumn
            title="Servicios en la nube"
            description="Respalda toda tu información y accede a ella en el momento que lo necesites."
            link="/productos/servicios-en-la-nube"
            image={Servicios}
            buttonText="Más información"
          />
        </Comp.Row>
      </RowButtons>
      <HomeBannerContainer>
        <Comp.BannerImage>
          <img
            src={BannerImage}
            alt="MyBusiness POS sistema de punto de venta gratis"
          />
        </Comp.BannerImage>
      </HomeBannerContainer>
      <Comp.Container style={{ marginTop: "3rem" }}>
        <h4 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Más soluciones para tu Negocio.
        </h4>
        <Comp.Row padded mobile>
          <ProductColumn
            title="Billpocket"
            description="Incrementa las visitas a tu establecimiento recibiendo pagos con tarjeta."
            link="/productos/bill-pocket"
            image={BillPocket}
            buttonText="Más información"
          />
          <ProductColumn
            title="POS Tools"
            description="Controla el inventario, ventas y pagos de tu negocio desde tu celular."
            link="/productos/pos-tools"
            image={PosTools}
            buttonText="Más información"
          />
          <ProductColumn
            title="Desarrollo a la medida"
            description="El único sistema de punto de venta que se adecua al giro específico de tu giro comercial."
            link="/productos/desarrollo-a-la-medida"
            image={Desarrollo}
            buttonText="Más información"
          />
        </Comp.Row>
      </Comp.Container>
    </BlueArea>
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

export const BlueArea = styled.div`
  background: #f0f4f6;
  padding: 3rem 0;

  @media ${theme.breakpoint.upFromMobile} {
    margin-top: -6rem;
  }
`;

export const RowButtons = styled(Comp.Container)`
  padding: 1.5rem;
`;

const HomeBannerContainer = styled(Comp.BannerContainer)`
  min-height: 380px;

  @media ${theme.breakpoint.upFromMobile} {
    height: 600px;
  }
`;
