import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const boxVariants = {
  hover: { scale: 2, rotate: 90 },
  click: { borderRadius: '100%', scale: 1 },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileTap="click" whileHover="hover"></Box>
    </Wrapper>
  );
}

export default App;
