import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { theme } from "./theme";

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  max-width: 1600px;
  margin: 0px auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  margin: ${props => (props.padded ? "0 -1rem" : "0")};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : "initial")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? "column" : "row")};
  }
`;

export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : "initial")};
  padding: ${props => (props.padded ? "0 1rem" : "0")};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => (props.margin ? props.margin : "0")};
  width: ${props => (props.width ? props.width : "auto")};

  iframe {
    max-width: 100%;
  }
`;

const sharedButton = css`
  border: 1px solid;
  padding: ${props => (props.small ? ".5rem 1rem" : "1rem 2rem")};
  transition: all 0.15s ease-in-out;
  display: inline-block;
  font-size: ${props => (props.small ? ".8rem" : "1rem")};
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translate(0px, -2px);
  }
`;

export const ButtonPrimary = styled(Link)`
  ${sharedButton}
  border-color: ${props => props.theme.colors.whiteColor};
  background: ${props => props.theme.colors.whiteColor};
  color: ${props => props.theme.colors.primaryColor};
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Flex1 = styled.div`
  flex: 1;
`;

export const FlexCenterChild = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
`;

export const FlexAlignChild = styled(FlexContainer)`
  align-items: center;
`;

export const FlexJustifyChild = styled(FlexContainer)`
  justify-content: center;
`;

export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const TextRight = styled.div`
  text-align: center;
`;

export const sharedContainer = css`
  margin: 0px auto;
  padding: 3rem 1rem;

  @media ${theme.breakpoint.upFromMobile} {
    padding: 6rem 3rem;
  }
`;

export const Width75 = styled.div`
  ${sharedContainer}

  @media ${theme.breakpoint.upFromMobile} {
    max-width: 75%;
  }

`;

export const Width50 = styled.div`
  ${sharedContainer}
  @media ${theme.breakpoint.upFromMobile} {
    max-width: 50%;
  }
`;

export const BackgroundImageContainer = styled.div`
  ${sharedContainer}
  @media ${theme.breakpoint.upFromMobile} {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  }
  background-size: cover;
  color: #fff;
`;

const sharedSectionTitle = css`
  position: relative;
  font-size: 1.5rem;
  display: inline-flex;
  margin-bottom: 3.5rem;

  &:after {
    content: " ";
    height: 2px;
    position: absolute;
    bottom: -1rem;
    left: 1.5rem;
    right: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  ${sharedSectionTitle}
  color: ${theme.colors.primaryColor};

  &:after {
    background: ${theme.colors.primaryColor};
  }
`;

export const SectionTitleInverse = styled.h2`
  ${sharedSectionTitle};
  color: ${theme.colors.whiteColor};

  &:after {
    background: ${theme.colors.whiteColor};
  }
`;

// Margin Utilities

export const m1 = styled.div`
  margin: ${props => props.theme.space.level1};
`;

export const m2 = styled.div`
  margin: ${props => props.theme.space.level2};
`;

export const m3 = styled.div`
  margin: ${props => props.theme.space.level3};
`;

export const m4 = styled.div`
  margin: ${props => props.theme.space.level4};
`;

export const m5 = styled.div`
  margin: ${props => props.theme.space.level5};
`;

// Margin Right

export const mr1 = styled.div`
  margin-right: ${props => props.theme.space.level1};
`;

export const mr2 = styled.div`
  margin-right: ${props => props.theme.space.level2};
`;

export const mr3 = styled.div`
  margin-right: ${props => props.theme.space.level3};
`;

export const mr4 = styled.div`
  margin-right: ${props => props.theme.space.level4};
`;

export const mr5 = styled.div`
  margin-right: ${props => props.theme.space.level5};
`;

// Margin Left

export const ml1 = styled.div`
  margin-left: ${props => props.theme.space.level1};
`;

export const ml2 = styled.div`
  margin-left: ${props => props.theme.space.level2};
`;

export const ml3 = styled.div`
  margin-left: ${props => props.theme.space.level3};
`;

export const ml4 = styled.div`
  margin-left: ${props => props.theme.space.level4};
`;

export const ml5 = styled.div`
  margin-left: ${props => props.theme.space.level5};
`;

// Margin Bottom

export const mb1 = styled.div`
  margin-bottom: ${props => props.theme.space.level1};
`;

export const mb2 = styled.div`
  margin-bottom: ${props => props.theme.space.level2};
`;

export const mb3 = styled.div`
  margin-bottom: ${props => props.theme.space.level3};
`;

export const mb4 = styled.div`
  margin-bottom: ${props => props.theme.space.level4};
`;

export const mb5 = styled.div`
  margin-bottom: ${props => props.theme.space.level5};
`;

// Margin Top

export const mt1 = styled.div`
  margin-top: ${props => props.theme.space.level1};
`;

export const mt2 = styled.div`
  margin-top: ${props => props.theme.space.level2};
`;

export const mt3 = styled.div`
  margin-top: ${props => props.theme.space.level3};
`;

export const mt4 = styled.div`
  margin-top: ${props => props.theme.space.level4};
`;

export const mt5 = styled.div`
  margin-top: ${props => props.theme.space.level5};
`;

// padding Utilities

export const p1 = styled.div`
  padding: ${props => props.theme.space.level1};
`;

export const p2 = styled.div`
  padding: ${props => props.theme.space.level2};
`;

export const p3 = styled.div`
  padding: ${props => props.theme.space.level3};
`;

export const p4 = styled.div`
  padding: ${props => props.theme.space.level4};
`;

export const p5 = styled.div`
  padding: ${props => props.theme.space.level5};
`;

// padding Right

export const pr1 = styled.div`
  padding-right: ${props => props.theme.space.level1};
`;

export const pr2 = styled.div`
  padding-right: ${props => props.theme.space.level2};
`;

export const pr3 = styled.div`
  padding-right: ${props => props.theme.space.level3};
`;

export const pr4 = styled.div`
  padding-right: ${props => props.theme.space.level4};
`;

export const pr5 = styled.div`
  padding-right: ${props => props.theme.space.level5};
`;

// padding Left

export const pl1 = styled.div`
  padding-left: ${props => props.theme.space.level1};
`;

export const pl2 = styled.div`
  padding-left: ${props => props.theme.space.level2};
`;

export const pl3 = styled.div`
  padding-left: ${props => props.theme.space.level3};
`;

export const pl4 = styled.div`
  padding-left: ${props => props.theme.space.level4};
`;

export const pl5 = styled.div`
  padding-left: ${props => props.theme.space.level5};
`;

// padding Bottom

export const pb1 = styled.div`
  padding-bottom: ${props => props.theme.space.level1};
`;

export const pb2 = styled.div`
  padding-bottom: ${props => props.theme.space.level2};
`;

export const pb3 = styled.div`
  padding-bottom: ${props => props.theme.space.level3};
`;

export const pb4 = styled.div`
  padding-bottom: ${props => props.theme.space.level4};
`;

export const pb5 = styled.div`
  padding-bottom: ${props => props.theme.space.level5};
`;

// padding Top

export const pt1 = styled.div`
  padding-top: ${props => props.theme.space.level1};
`;

export const pt2 = styled.div`
  padding-top: ${props => props.theme.space.level2};
`;

export const pt3 = styled.div`
  padding-top: ${props => props.theme.space.level3};
`;

export const pt4 = styled.div`
  padding-top: ${props => props.theme.space.level4};
`;

export const pt5 = styled.div`
  padding-top: ${props => props.theme.space.level5};
`;
