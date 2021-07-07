import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';

const PageLogo = () => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push('/');
  };

  return <StyledLogo onClick={onClickHandler} />;
};

const StyledLogo = styled(Logo)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    margin: 1rem 2.5%;
    cursor: pointer;
  }
`;

export default PageLogo;
