import React from "react";
import { string } from "prop-types";
import { theme } from "./theme";
import * as Comp from "../components/layoutComponents";
import { Link } from "gatsby";
import styled from "styled-components";

const LinkColumn = ({ image, title, description, link, buttonText }) => (
  <Comp.Column flex={1} padded>
    <ProductColumnContainer>
      <IconLink to={link}>
        <img src={image} alt={link} />
      </IconLink>
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

LinkColumn.propTypes = {
  title: string,
  description: string,
  link: string,
  image: string,
  buttonText: string
};

export default LinkColumn;

export const ProductColumnContainer = styled.div`
  padding: 0.33rem;
  padding-bottom: 1rem;
  transition: all 0.15s ease-in-out;
  text-align: center;
  position: relative;

  @media ${theme.breakpoint.upFromMobile} {
    padding-bottom: 3rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const IconLink = styled(Link)`
  width: 5rem;
  height: 5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: inline-flex;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;

  @media ${theme.breakpoint.onlyMobile} {
    width: 3rem;
    height: 3rem;

    img {
      width: 24px;
      height: 24px;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }
`;
