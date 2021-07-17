import styled from 'styled-components';

interface Props {
  image: string;
}

const OfficeCardWithImage: React.FC<Props> = ({ image }) => {
  return (
    <ImageWrapper>
      <Image
        src={image}
        alt='Gabinet Stomatologiczny VitaDent'
        loading='lazy'
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  width: 95%;
  height: 300px;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.grey};

  @media (min-width: 768px) {
    width: 40%;
    max-width: 550px;
    height: unset;
    min-height: 300px;
    max-height: 500px;
    margin: 2rem;
  }

  @media (min-width: 1360px) {
    width: 30%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default OfficeCardWithImage;
