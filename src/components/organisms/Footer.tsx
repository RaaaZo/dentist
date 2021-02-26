import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>
        Made with 💙 by <a href='https://github.com/RaaaZo'>RaaaZo</a>
      </h3>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.8);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;

  h3 {
    text-align: center;
    font-size: 1.7rem;
  }

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }
`;

export default Footer;
