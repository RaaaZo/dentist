import { ReactComponent as BlueHeart } from 'assets/svg/blue-heart.svg';
import { ReactComponent as WhiteHeart } from 'assets/svg/white-heart.svg';
import styled from 'styled-components';

const PageHearts = () => {
  return (
    <>
      <FirstBlueHeart />
      <SecondBlueHeart />
      <ThirdBlueHeart />
      <FirstWhiteHeart />
      <SecondWhiteHeart />
      <FirstWhiteHeart />
    </>
  );
};

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
