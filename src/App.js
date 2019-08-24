import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { usePersistentCanvas } from './utils/canvas';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    padding: 0;
    margin: 0;
    font-family: Thonburi;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  h1 {
    font-size: 1.25rem;
    margin: 0;
  }
  h2 {
    font-size: 1.125rem;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-size: 0.875rem;
    margin: 0;
  } 
`;

function App() {
  const [canvasRef] = usePersistentCanvas();
  return (
    <React.Fragment>
      <GlobalStyle />
      <h1>test</h1>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </React.Fragment>
  );
}

export default App;
