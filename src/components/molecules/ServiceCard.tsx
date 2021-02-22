import { ReactComponent as Svg } from 'assets/svg/services-vector.svg';
import { Button } from 'components/atoms/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  link: string;
  title: string;
}

const HoverAnimations = {
  ButtonHover: {
    backgroundColor: '#40A3F8',
    rotateX: 360,
    transition: {
      duration: 0.5,
    },
  },
  ButtonTap: {
    scale: 0.8,
  },
  CardHover: {
    scale: 1.2,
  },
};

const ServiceCard: React.FC<Props> = ({ link, title }) => {
  return (
    <ServiceWrapper whileHover={HoverAnimations.CardHover}>
      <Svg />
      <h3>{title}</h3>
      <ButtonWrapper
        whileTap={HoverAnimations.ButtonTap}
        whileHover={HoverAnimations.ButtonHover}
      >
        <Button as={Link} to={`/uslugi/${link}`}>
          Więcej...
        </Button>
      </ButtonWrapper>
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled(motion.div)`
  width: 95%;
  max-width: 300px;
  height: 250px;
  background-color: rgba(255, 255, 255, 255, 0.8);
  backdrop-filter: blur(2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem auto;
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 15px;

  h3 {
    font-size: 1.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;

const ButtonWrapper = styled(motion.div)`
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 15px;

  a {
    font-size: 1.8rem;
  }
`;

export default ServiceCard;
