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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  top: 100px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayVar = {
  initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  animate: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  console.log(id);

  return (
    <Wrapper>
      <Grid>
        {['1', '2', '3', '4'].map((n) => (
          <Box
            onClick={() => {
              setId(n);
            }}
            key={n}
            layoutId={n}
          />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={OverlayVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
            {/* layoutId를 같게 해줌으로써 서로 다른 components를 연결해줄 수 있다. */}
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
