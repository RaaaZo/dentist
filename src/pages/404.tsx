import { ReactComponent as PageNotFoundSvg } from 'assets/svg/404.svg';
import { Button } from 'components/atoms/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <PageWrapper>
      <StyledSvg />
      <h1>Nie znaleziono takiej strony!</h1>

      <StyledButton as={Link} to='/'>
        Strona Główna
      </StyledButton>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
      margin-top: 3rem;
    }
  }

  @media (min-width: 1360px) {
    h1 {
      font-size: 5rem;
      margin-top: 5rem;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const StyledSvg = styled(PageNotFoundSvg)`
  width: 100%;
`;

export default NotFound;
