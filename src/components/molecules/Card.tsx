import styled from 'styled-components';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';

interface Props {
  inverted: boolean;
  description: string;
  link?: string;
  Icon: any;
  id: string;
  isHome?: boolean;
}

interface CardWrapperInterface {
  inverted: boolean;
  isHome?: boolean;
}

const Card: React.FC<Props> = ({
  inverted,
  description,
  link,
  Icon,
  isHome,
}) => {
  return (
    <CardWrapper isHome={isHome} inverted={inverted}>
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
  height: ${({ isHome }) => (isHome ? '500px' : '400px')};
  margin: 5rem 1rem;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 650px;
    order: ${({ inverted }) => (inverted ? 1 : 2)};
  }

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
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
