import Card from 'components/molecules/Card';
import { ReactComponent as Icon } from 'assets/svg/office-vector.svg';
import styled from 'styled-components';

interface CardWrapperInterface {
  inverted: boolean;
}

interface Props {
  inverted: boolean;
  image: string;
  text: string;
}

const OfficeCardWithImage: React.FC<Props> = ({ inverted, image, text }) => {
  return (
    <CardWrapper>
      <ImageWrapper inverted={inverted}>
        <Image src={image} alt='' />
      </ImageWrapper>

      <Card Icon={Icon} description={text} id='1' inverted={true} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 95%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin: 10rem auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const ImageWrapper = styled.div<CardWrapperInterface>`
  width: 100%;
  height: 400px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.grey};

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 50%;
    max-width: 550px;
    height: 400px;
    order: ${({ inverted }) => (inverted ? 2 : 1)};
  }

  @media (min-width: 1360px) {
    max-width: 650px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default OfficeCardWithImage;
