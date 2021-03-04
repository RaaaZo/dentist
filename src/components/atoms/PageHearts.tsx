import styled from 'styled-components';

const PageHearts = () => {
  return (
    <>
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
      <FourthCircle />
      <EightCircle />
    </>
  );
};

const WhiteCircle = styled.div`
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

export default PageHearts;
