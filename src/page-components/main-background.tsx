import styled from 'styled-components';
import { motion } from 'framer-motion';
import layer1 from '../assets/layer-1.svg';
import layer2 from '../assets/layer-2.svg';
import layer3 from '../assets/layer-3.svg';
import layer4 from '../assets/layer-4.svg';
import bird1 from '../assets/bird-1.svg';
import bird2 from '../assets/bird-2.svg';
import bird3 from '../assets/bird-3.svg';
import bird4 from '../assets/bird-4.svg';
import birdSmall from '../assets/bird-small.svg';

const MainBackgroundContainer = styled.div`
  height: calc(100vh + 200px);
  max-height: 1350px;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  position: absolute;
  top: 0px;
  background: ${({ theme }) => theme.colors.background};
  left: 0px;
`;

const Sun = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  width: 440px;
  height: 440px;
  position: absolute;
  top: -220px;
  left: -100px;
  filter: blur(50px);
`;

const Layers = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  max-width: 100vw;
  height: 500px;
  overflow: hidden;
  opacity: 0.1;

  .layer {
    position: absolute;
    left: 0;
  }

  .layer-1 {
    bottom: 0px;
    z-index: 4;
  }
  .layer-2 {
    bottom: 0px;
    z-index: 3;
  }
  .layer-3 {
    bottom: 0px;
    z-index: 2;
  }
  .layer-4 {
    bottom: 0px;
    z-index: 1;
  }
`;

const BirdsLower = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100vw;

  .bird {
    position: absolute;
    z-index: 5;
  }

  .bird-1 {
    bottom: 100px;
    left: 20%;
  }
  .bird-2 {
    bottom: 150px;
    left: 40%;
  }
  .bird-3 {
    bottom: 80px;
    left: 60%;
  }
  .bird-4 {
    bottom: 160px;
    left: 80%;
  }
`;

const BirdsUpper = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100vw;

  .bird {
    position: absolute;
    z-index: 5;
  }
  .bird-1 {
    top: 100px;
    left: 13%;
  }
  .bird-2 {
    top: 150px;
    left: 25%;
  }
  .bird-3 {
    top: 120px;
    right: 25%;
  }
  .bird-4 {
    right: 20%;
    top: 250px;
  }
`;

const BirdsCross = styled.div`
  .bird {
    position: absolute;
  }
  .bird-1 {
    transform: rotateY(180deg);
    left: -150px;
    bottom: 40vh;
  }
  .bird-2 {
    right: -150px;
    bottom: 40vh;
  }
`;

export function MainBackground() {
  return (
    <MainBackgroundContainer>
      <Sun />
      <BirdsCross>
        <motion.img
          className="bird bird-1"
          src={bird3}
          initial={{ x: 0, y: 0 }}
          animate={{ x: '120vw', y: '-60vh' }}
          transition={{ duration: 2, ease: 'linear', delay: 2 }}
        />
        <motion.img
          className="bird bird-2"
          src={bird3}
          initial={{ x: 0, y: 0 }}
          animate={{ x: '-120vw', y: '-60vh' }}
          transition={{ duration: 2, ease: 'linear', delay: 2 }}
        />
      </BirdsCross>
      <BirdsUpper>
        <motion.img
          className="bird bird-1"
          src={birdSmall}
          alt="Bird 1"
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
        <motion.img
          className="bird bird-2"
          src={birdSmall}
          alt="Bird 1"
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
        <motion.img
          className="bird bird-3"
          src={birdSmall}
          alt="Bird 1"
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
        <motion.img
          className="bird bird-4"
          src={birdSmall}
          alt="Bird 1"
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
      </BirdsUpper>
      <BirdsLower>
        <motion.img
          className="bird bird-1"
          src={bird1}
          alt="Bird 1"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
        <motion.img
          className="bird bird-2"
          src={bird2}
          alt="Bird 2"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
        <motion.img
          className="bird bird-3"
          src={bird3}
          alt="Bird 3"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
        <motion.img
          className="bird bird-4"
          src={bird4}
          alt="Bird 4"
          initial={{ y: 400 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        />
      </BirdsLower>
      <Layers>
        <motion.img
          className="layer layer-1"
          src={layer1}
          alt="Layer 1"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        />
        <motion.img
          className="layer layer-2"
          src={layer2}
          alt="Layer 2"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        />
        <motion.img
          className="layer layer-3"
          src={layer3}
          alt="Layer 3"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        />
        <motion.img
          className="layer layer-4"
          src={layer4}
          alt="Layer 4"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        />
      </Layers>
    </MainBackgroundContainer>
  );
}
