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
    min-width: 200px;
    margin: 1rem 1.5%;
    cursor: pointer;
  }
`;

export default PageLogo;
