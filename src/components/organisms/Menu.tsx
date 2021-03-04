import { ReactComponent as MenuSvg } from 'assets/svg/menu.svg';
import { motion, useCycle } from 'framer-motion';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from 'assets/svg/menu-logo.svg';

const Menu = () => {
  const { push } = useHistory();
  const [isOpen, setIsOpen] = useCycle(false, true);

  const onClickHandler = () => {
    setIsOpen();
  };

  const sidebar = {
    open: {
      x: '0',
      transition: { duration: 0.4 },
    },
    closed: {
      x: '100%',
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <Drawer
        initial={false}
        variants={sidebar}
        animate={isOpen ? 'open' : 'closed'}
        onClick={onClickHandler}
      />
      <Nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <MenuModal variants={sidebar}>
          <LinkList>
            <li>
              <StyledLogo
                onClick={() => {
                  onClickHandler();
                  push('/');
                }}
              />
            </li>

            <li>
              <NavLink
                onClick={onClickHandler}
                exact
                activeClassName='active'
                to='/'
              >
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink onClick={onClickHandler} to='/uslugi'>
                Usługi
              </NavLink>
            </li>
            <li>
              <NavLink onClick={onClickHandler} to='/gabinet'>
                Gabinet
              </NavLink>
            </li>

            <li>
              <NavLink onClick={onClickHandler} to='/kontakt'>
                Kontakt
              </NavLink>
            </li>
          </LinkList>
        </MenuModal>
        <StyledMenuSvg onClick={onClickHandler} />
      </Nav>
    </>
  );
};

const Drawer = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 10;

  @media (min-width: 550px) {
    display: block;
  }
`;

const StyledLogo = styled(LogoSvg)`
  cursor: pointer;

  @media (orientation: landscape) and (max-width: 667px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const LinkList = styled(motion.ul)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  a {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.black};
    }

    &.active {
      color: ${({ theme }) => theme.black};
    }
  }

  @media (min-width: 550px) {
    a {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    a {
      font-size: 2.5rem;
    }
  }

  @media (orientation: landscape) and (max-width: 768px) {
    justify-content: center;

    li:nth-of-type(1) {
      margin-top: 5rem;
    }

    li {
      margin: 0.5rem;
    }
  }
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 3rem;
  right: 1rem;
  bottom: 0;
  background-color: rgb(255, 255, 255, 1);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 10;

  @media (min-width: 650px) {
    right: 2rem;
  }
  @media (min-width: 1024px) {
    right: 3rem;
  }
  @media (min-width: 1360px) {
    right: 5rem;
  }
`;

const MenuModal = styled(motion.div)`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2rem);
  display: flex;
  align-items: center;

  @media (min-width: 550px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1360px) {
    width: 500px;
  }
`;

const StyledMenuSvg = styled(MenuSvg)`
  position: fixed;
  width: 40px;
  height: 40px;
  top: 3rem;
  right: 1rem;
  cursor: pointer;
  margin: 1rem;

  @media (min-width: 650px) {
    right: 2rem;
  }
  @media (min-width: 1024px) {
    right: 3rem;
  }
  @media (min-width: 1360px) {
    right: 5rem;
  }
`;

export default Menu;
