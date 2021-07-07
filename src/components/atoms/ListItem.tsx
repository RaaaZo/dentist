import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  path: string;
  clickHandler?: () => void;
}

const ListItem: React.FC<Props> = ({ children, path, clickHandler }) => {
  return (
    <StyledListItem
      onClick={clickHandler ? () => clickHandler() : undefined}
      exact
      as={NavLink}
      to={path}
    >
      {children}
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  width: 150px;
  height: 50px;
  line-height: 50px;
  list-style: none;
  font-weight: 700;
  position: relative;
  padding: 2rem auto;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  transition: all 0.5s;

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 2rem;
    height: 2rem;
    border-top: 2px solid ${({ theme }) => theme.darkBlue};
    border-left: 2px solid ${({ theme }) => theme.darkBlue};
    transition: all 0.5s;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 2rem;
    height: 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
    border-right: 2px solid ${({ theme }) => theme.darkBlue};
    transition: all 0.5s;
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.white};

    &:before,
    &:after {
      width: 100%;
      height: 100%;
    }
  }

    &:hover {
      background-color: ${({ theme }) => theme.darkBlue};
      color: ${({ theme }) => theme.white};
    }

    &:hover:after,
    &:hover:before {
      width: 100%;
      height: 100%;
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.white};

    &:after,
    &:before {
      width: 100%;
      height: 100%;
    }
`;

export default ListItem;
