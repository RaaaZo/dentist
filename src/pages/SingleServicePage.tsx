import { servicesData } from 'data/servicesData';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import largeImage from 'assets/images/2-large-min.webp';
import mediumImage from 'assets/images/2-medium-min.webp';
import smallImage from 'assets/images/2-small-min.webp';

import NotFound from './404';
import { Button } from 'components/atoms/Button';

const SingleServicePage = () => {
  const { push } = useHistory();
  const { name } = useParams<{ name: string }>();
  const services = servicesData;

  const singleService = services.find(({ link }) => link === name)!;

  if (!singleService) {
    return <NotFound />;
  }

  return (
    <PageWrapper>
      <ImageWrapper>
        <Image
          srcSet={`${smallImage} 800w, ${mediumImage} 1920w, ${largeImage} 3024w`}
          sizes='(max-width: 780px) 780px,
                (max-width: 1600px) 1920px,
                3024px'
          src={largeImage}
          alt='Doctors office'
        />
      </ImageWrapper>
      <InnerWrapper>
        <h1>{singleService.title}</h1>
        <h3>{singleService.shortDesc}</h3>
        <p>{singleService.longDesc}</p>
      </InnerWrapper>
      <StyledButton onClick={() => push('/uslugi')}>Wróć do usług</StyledButton>
    </PageWrapper>
  );
};

const StyledButton = styled(Button)`
  margin: 2rem auto 3rem auto;
  width: 175px;
  height: 60px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.grey};

  @media (min-width: 780px) {
    height: 350px;
  }

  @media (min-width: 1360px) {
    height: 450px;
  }

  @media (min-width: 1680px) {
    height: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
