import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  background: linear-gradient(45deg, rgb(254, 211, 48), rgb(165, 94, 234));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 150px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  color: black;
  position: absolute;
  top: 100px;
`;
const boxVariant = {
  invisible: {
    x: 300,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1.5,
    },
  },
};
function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={boxVariant}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
