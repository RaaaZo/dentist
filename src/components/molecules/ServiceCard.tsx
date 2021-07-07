import { ReactComponent as Svg } from 'assets/svg/services-vector.svg';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  link: string;
  title: string;
}

const ServiceCard: React.FC<Props> = ({ link, title }) => {
  return (
    <ServiceWrapper>
      <Svg />
      <h3>{title}</h3>

      <Button as={Link} to={`/uslugi/${link}`}>
        Więcej...
      </Button>
    </ServiceWrapper>
  );
};

const ServiceWrapper = styled.div`
  width: 95%;
  max-width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem 2rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.darkBlue};

  h3 {
    font-size: 1.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 300px;
  }
`;

export default ServiceCard;
