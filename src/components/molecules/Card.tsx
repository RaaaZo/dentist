import styled from 'styled-components';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';

interface Props {
  inverted: boolean;
  description: string;
  link?: string;
  Icon: any;
  id: string;
}

interface CardWrapperInterface {
  inverted: boolean;
}

const Card: React.FC<Props> = ({ inverted, description, link, Icon }) => {
  return (
    <CardWrapper inverted={inverted}>
      <InnerWrapper>
        <Icon />
        <p>{description}</p>

        {link && (
          <Button as={Link} to={link}>
            Więcej...
          </Button>
        )}
      </InnerWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<CardWrapperInterface>`
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
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.darkBlue};

  p {
    text-align: justify;
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default Card;
