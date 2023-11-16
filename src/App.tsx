import styled from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
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
  const x = useMotionValue(0);
  useEffect(() => {
    x.on('change', () => console.log(x.get()));
  }, [x]);
  console.log(x);
  return (
    <Wrapper>
      <Box style={{ x: x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
