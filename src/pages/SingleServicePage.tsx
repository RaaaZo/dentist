import { Link, useParams } from 'react-router-dom';
import { servicesData } from 'data/servicesData';
import { ReactComponent as SingleServiceSvg } from 'assets/svg/single-service.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NotFound from './404';
import { Button } from 'components/atoms/Button';

const SingleServicePage = () => {
  const { name } = useParams<{ name: string }>();
  const services = servicesData;

  const singleService = services.find(({ link }) => link === name)!;

  if (!singleService) {
    return <NotFound />;
  }

  return (
    <PageWrapper>
      {/* <StyledSvg /> */}
      <InnerWrapper>
        <motion.h1>{singleService.title}</motion.h1>
        <motion.h3>{singleService.shortDesc}</motion.h3>
        <motion.p>{singleService.longDesc}</motion.p>

        <StyledButton as={Link} to='/uslugi'>
          Wstecz
        </StyledButton>
      </InnerWrapper>
    </PageWrapper>
  );
};

const StyledButton = styled(Button)`
  margin-top: 3rem;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSvg = styled(SingleServiceSvg)`
  width: 100%;
  margin-top: 5rem;
`;

const InnerWrapper = styled.div`
  width: 95%;
  max-width: 1280px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;

  h1 {
    margin-top: 3rem;
    font-size: 3rem;
    text-align: center;
  }

  h3 {
    margin: 3rem auto;
    font-size: 1.8rem;
  }

  p {
    margin-top: 5rem;
    font-size: 1.6rem;
    text-align: justify;
    white-space: pre-line;
    line-height: 150%;
  }

  h3,
  p {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;

    h1 {
      font-size: 3.5rem;
    }

    h3 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 8rem;
  }
`;

export default SingleServicePage;
