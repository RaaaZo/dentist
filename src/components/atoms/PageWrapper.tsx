import styled from 'styled-components';

const PageWrapper: React.FC = ({ children }) => {
  return <PageWrapperComponent>{children}</PageWrapperComponent>;
};

const PageWrapperComponent = styled.div`
  width: 95%;
  min-height: 90vh;
  background: rgba(255, 255, 255, 0.8);
  margin: 3rem auto;
  border-radius: 15px;
  z-index: 2;
  backdrop-filter: blur(0.5rem);
`;

export default PageWrapper;
