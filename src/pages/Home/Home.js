import React from 'react';
import { Link } from 'react-router-dom';
import { usePersistentCanvas } from '../../utils/canvas';
import Text from '../../components/UI/Text/Text';
import Button from '../../components/UI/Button/Button';

import { ContainerStyle, CanvasStyle, ContentStyle, TextStyle } from './HomeStyle';

function Home(props) {
  const [canvasRef] = usePersistentCanvas();
  const ClickHandler = () => {
    props.history.push(`/about`);
  };
  return (
    <ContainerStyle>
      <CanvasStyle>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      </CanvasStyle>
      <ContentStyle>
        <TextStyle>
          <Text type="h1" color="white">
            Hello, I'm <span>Jiraphon Neetithamrngsi</span>
          </Text>
          <Text type="h1" color="white">
            I'm a front-end web developer.
          </Text>
        </TextStyle>
        <Button onClick={ClickHandler}>View my work</Button>
      </ContentStyle>
    </ContainerStyle>
  );
}

export default Home;
