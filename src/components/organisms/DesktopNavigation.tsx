import styled from 'styled-components';
import PageLogo from 'components/atoms/PageLogo';
import ListItem from 'components/atoms/ListItem';

const DesktopNavigation = () => {
  return (
    <Wrapper>
      <PageLogo />
      <List as='nav'>
        <ListItem path='/'>Strona Główna</ListItem>
        <ListItem path='/uslugi'>Usługi</ListItem>
        <ListItem path='/gabinet'>Gabinet</ListItem>

        <ListItem path='/kontakt'>Kontakt</ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  margin-left: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default DesktopNavigation;
