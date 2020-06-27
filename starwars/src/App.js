import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';

const Headline = styled.h1`
  color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 1.1;
  font-size: 50px;

  &:hover {
    color: rgb(255, 227, 0);
  }
`;

function App() {
  
  return (
    <div>
      <div className="App">
        <Headline className="Header">Star Wars Characters</Headline>
      </div>
      <CharacterList />
    </div>
    
  );
}

export default App;
