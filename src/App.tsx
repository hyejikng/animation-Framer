import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(225, 225, 225, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const boxVariants = {};

function App() {
  const x = useMotionValue<number>(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]); // motionValue는 x값, x값에 따라서 scale이 달라질 것이므로.
  useEffect(() => {
    // x.on('change', () => console.log(x.get()));
    scale.on('change', () => console.log(scale.get()));
  }, [x]);
  console.log(x);
  return (
    <Wrapper>
      <Box style={{ x: x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
