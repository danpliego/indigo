import React from "react";
import * as Layout from "./layoutComponents";

import BoletinImage from "../images/boletin.jpg";

const BoletinBanner = () => (
  <Layout.BannerContainer>
    <Layout.BannerImage>
      <img src={BoletinImage} />
    </Layout.BannerImage>
    <Layout.BannerContent>
      <h1 className="extended-medium">
        Suscríbete a nuestro boletín y recibe promociones, tips para tu negocio
        e información especial.
      </h1>
      <div
        className="ctct-inline-form"
        data-form-id="d7c928e7-cc80-46d4-962a-2cf6ffa91dc6"
      ></div>
    </Layout.BannerContent>
  </Layout.BannerContainer>
);

export default BoletinBanner;
