import styled, { css } from 'styled-components';
import { ReactComponent as BulbSvg } from 'assets/svg/bulb.svg';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  inverted: boolean;
  description: string;
  link: string;
  Icon: any;
  id: string;
}

interface CardWrapperInterface {
  inverted: boolean;
}

const HoverAnimations = {
  ButtonHover: {
    backgroundColor: '#40A3F8',
    rotateY: 180,
    transition: { duration: 0.4, ease: 'linear' },
  },
  CardHover: {
    rotate: [0, 1, 0, -1, 2, -2, 2, 0],
    transition: { duration: 0.3 },
  },
};

const HomeCard: React.FC<Props> = ({ inverted, description, link, Icon }) => {
  return (
    <CardWrapper whileHover={HoverAnimations.CardHover} inverted={inverted}>
      <StyledBulbSvg inverted={inverted} />
      <InnerWrapper>
        <Icon />
        <p>{description}</p>
        <ButtonWrapper whileHover={HoverAnimations.ButtonHover}>
          <Button as={Link} to={link}>
            Więcej...
          </Button>
        </ButtonWrapper>
      </InnerWrapper>
    </CardWrapper>
  );
};

const ButtonWrapper = styled(motion.div)`
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 15px;
`;

const CardWrapper = styled(motion.div)<CardWrapperInterface>`
  position: relative;
  width: 100%;
  height: 500px;
  margin: 0 1rem;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 550px;
    height: 400px;
    order: ${({ inverted }) => (inverted ? 1 : 2)};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2rem);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 2rem;
  border: 3px solid ${({ theme }) => theme.blue};
  border-radius: 15px;

  p {
    text-align: justify;
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledBulbSvg = styled(BulbSvg)<{ inverted: boolean }>`
  width: 80px;
  height: 120px;
  position: absolute;
  top: -110px;
  right: 0;
  z-index: -1;

  ${({ inverted }) =>
    inverted &&
    css`
      right: auto;
      left: 0;
    `}

  @media (min-width: 768px) {
    width: 110px;
    height: 160px;
    top: -145px;
  }
`;

export default HomeCard;
