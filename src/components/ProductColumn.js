import React from "react";
import { string } from "prop-types";
import { theme } from "./theme";
import * as Comp from "../components/layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

const ProductColumn = ({ image, title, description, link, buttonText }) => (
  <Comp.Column flex={1} padded>
    <ProductColumnContainer>
      <Link to={link}>
        <img src={image} alt={link} />
      </Link>
      <h6 style={{ marginTop: "1rem" }}>
        <Link to={link} style={{ color: theme.colors.bodyColor }}>
          {title}
        </Link>
      </h6>
      <p className="body-l font-xs">{description}</p>
      <Comp.ButtonSecondary small to={link}>
        {buttonText}
      </Comp.ButtonSecondary>
    </ProductColumnContainer>
  </Comp.Column>
);

ProductColumn.propTypes = {
  title: string,
  description: string,
  link: string,
  image: string,
  buttonText: string
};

export default ProductColumn;

export const ProductColumnContainer = styled.div`
  padding: 0.33rem;
  padding-bottom: 3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);

    img {
      opacity: 0.8;
    }
  }
`;
