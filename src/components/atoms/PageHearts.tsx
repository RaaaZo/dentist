import { ReactComponent as BlueHeart } from 'assets/svg/blue-heart.svg';
import { ReactComponent as WhiteHeart } from 'assets/svg/white-heart.svg';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const backgroundAnimation = {
  animate: {
    scale: [1, 1.2, 0.8, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const PageHearts = () => {
  return (
    <>
      {/* <FirstBlueHeart />
      <SecondBlueHeart />
      <ThirdBlueHeart />
      <FirstWhiteHeart />
      <SecondWhiteHeart />
      <FirstWhiteHeart /> */}
      <FirstCircle animate={backgroundAnimation.animate} />
      <SecondCircle animate={backgroundAnimation.animate} />
      <ThirdCircle animate={backgroundAnimation.animate} />
      <FourthCircle animate={backgroundAnimation.animate} />
      <EightCircle animate={backgroundAnimation.animate} />
    </>
  );
};

const WhiteCircle = styled(motion.div)`
  position: fixed;
  background-color: rgb(255, 255, 255, 1);
  border-radius: 50%;
`;

const FirstCircle = styled(WhiteCircle)`
  width: 150px;
  height: 150px;
  top: 20%;
  left: 30%;
`;

const SecondCircle = styled(WhiteCircle)`
  width: 200px;
  height: 200px;
  top: 40%;
  right: 25%;
`;

const ThirdCircle = styled(WhiteCircle)`
  width: 175px;
  height: 175px;
  top: 70%;
  left: 20%;
`;

const FourthCircle = styled(WhiteCircle)`
  width: 125px;
  height: 125px;
  top: 70%;
  right: 5%;
`;

const EightCircle = styled(WhiteCircle)`
  top: 30%;
  left: 80%;
  display: none;

  @media (min-width: 734px) {
    display: block;
  }
`;

const FirstBlueHeart = styled(BlueHeart)`
  position: fixed;
  top: 1%;
  right: 2%;

  @media (min-width: 768px) {
    top: 1%;
    right: 2%;
  }
`;

const SecondBlueHeart = styled(BlueHeart)`
  position: fixed;
  top: 50%;
  left: 1%;

  @media (min-width: 768px) {
    top: 50%;
    left: 1%;
  }
`;

const ThirdBlueHeart = styled(BlueHeart)`
  position: fixed;
  bottom: 5%;
  left: 25%;

  @media (min-width: 768px) {
    bottom: 5%;
    left: 3%;
  }
`;

const FirstWhiteHeart = styled(WhiteHeart)`
  position: fixed;
  bottom: 15%;
  right: -1%;

  @media (min-width: 768px) {
    bottom: 35%;
    right: -1%;
  }
`;

const SecondWhiteHeart = styled(WhiteHeart)`
  position: fixed;
  top: 30%;
  right: 1%;

  @media (min-width: 768px) {
    top: 25%;
    right: 2%;
  }
`;

export default PageHearts;
