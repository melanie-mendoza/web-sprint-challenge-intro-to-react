import React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  color: white;
  font-size: 32px;

  &:hover {
    color: rgb(255, 227, 0);
  }
`;

const EyeColor = styled.h3`
  color: white;

  &:hover {
    color: blue;
  }
`;

function CharacterCard(props) {
  return (
  <ul className="character-card">
    <Name>Name: {props.name}</Name>
    <EyeColor>Eye Color: {props.eye_color}</EyeColor>
  </ul>
  );
};

export default CharacterCard;