import React from 'react';
import { usePersistentCanvas } from '../../utils/canvas';

function Home() {
  const [canvasRef] = usePersistentCanvas();
  return (
    <React.Fragment>
      <h1>test</h1>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </React.Fragment>
  );
}

export default Home;
