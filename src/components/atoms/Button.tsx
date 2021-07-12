import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background: transparent;
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: all 0.5s;
  border: none;

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

  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 30px;
    height: 30px;
    border-top: 2px solid ${({ theme }) => theme.darkBlue};
    border-left: 2px solid ${({ theme }) => theme.darkBlue};
    transition: all 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 30px;
    height: 30px;
    border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
    border-right: 2px solid ${({ theme }) => theme.darkBlue};
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.white};
  }

  &:hover:before {
    width: 100%;
    height: 100%;
  }

  &:hover:after {
    width: 100%;
    height: 100%;
  }
`;
