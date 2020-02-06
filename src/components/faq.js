import propTypes, { string } from "prop-types";
import React from "react";
import styled from "styled-components";

const FrequentQuestion = ({ question, children }) => (
  <QuestionContainer>
    <h6>{question}</h6>
    {children}
  </QuestionContainer>
);

FrequentQuestion.propTypes = {
  question: string,
  children: propTypes.node.isRequired
};

export default FrequentQuestion;

const QuestionContainer = styled.div`
  padding: 1rem 0 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f4f4f4;
  font-size: 0.9rem;
`;
