import image from 'assets/images/building-1.jpg';
import Card from 'components/molecules/Card';
import { ReactComponent as Icon } from 'assets/svg/office-vector.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardWrapperInterface {
  inverted: boolean;
}

const OfficeCardWithImage: React.FC<{ inverted: boolean }> = ({ inverted }) => {
  return (
    <CardWrapper>
      <ImageWrapper inverted={inverted}>
        <Image src={image} alt='' />
      </ImageWrapper>

      <Card
        Icon={Icon}
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus quae eius atque beatae esse, officia at eaque corporis voluptates amet provident officiis nemo eveniet sint exercitationem consequuntur maiores soluta.'
        id='1'
        inverted={true}
      />
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin: 20rem auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const ImageWrapper = styled(motion.div)<CardWrapperInterface>`
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 15rem;
  border: 3px solid ${({ theme }) => theme.blue};
  border-radius: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 50%;
    max-width: 550px;
    height: 400px;
    order: ${({ inverted }) => (inverted ? 2 : 1)};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default OfficeCardWithImage;
