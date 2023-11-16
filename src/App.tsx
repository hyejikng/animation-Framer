import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 200vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(45deg, rgb(254, 211, 48), rgb(165, 94, 234)); */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {};

function App() {
  const xMotion = useMotionValue<number>(0);
  const rotateZ = useTransform(xMotion, [-800, 800], [360, -360]);

  const gradient = useTransform(
    x,
    [-800, 800],
    [
      'linear-gradient(45deg, rgb(254, 211, 48), rgb(52, 58, 226))',
      'linear-gradient(45deg, rgb(4, 145, 77), rgb(121, 114, 127))',
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  // useEffect(() => {
  //   // x.on('change', () => console.log(x.get()));
  //   rotateZ.on('change', () => console.log(rotateZ.get()));
  // }, [xMotion]);

  // useEffect(() => {
  //   scrollYProgress.on('change', () => console.log(scrollYProgress.get()));
  // }, [scrollYProgress]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x: xMotion, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
