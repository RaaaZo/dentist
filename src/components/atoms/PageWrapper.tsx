import styled from 'styled-components';

const PageWrapper: React.FC = ({ children }) => {
  return <PageWrapperComponent>{children}</PageWrapperComponent>;
};

const PageWrapperComponent = styled.div`
  width: 100%;
  max-width: 2000px;
  min-height: 90vh;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.7);
  margin: auto;
  border-radius: 5px;
  z-index: 2;
  backdrop-filter: blur(2rem);
  overflow: hidden;

  @media (min-width: 540px) {
    margin: 2rem auto;
    width: 97%;
    position: relative;
  }
`;

export default PageWrapper;
