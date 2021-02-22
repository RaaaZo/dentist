import { Link, useParams } from 'react-router-dom';
import { servicesData } from 'data/servicesData';
import { ReactComponent as SingleServiceSvg } from 'assets/svg/single-service.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NotFound from './404';
import { Button } from 'components/atoms/Button';

const hoverAnimation = {
  buttonHover: {
    backgroundColor: '#40A3F8',
    rotateZ: 360,
    scale: [1, 0.5, 1],
  },
};

const SingleServicePage = () => {
  const { name } = useParams<{ name: string }>();
  const services = servicesData;

  const singleService = services.find(({ link }) => link === name)!;

  if (!singleService) {
    return <NotFound />;
  }

  return (
    <PageWrapper>
      <StyledSvg fill='#40A3F8' />
      <InnerWrapper>
        <motion.h1>{singleService.title}</motion.h1>
        <motion.h3>
          short description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos nobis harum nesciunt numquam totam. Accusamus
          sapiente fugit voluptates praesentium minus repudiandae molestias,
          doloribus, animi eaque ea quas eveniet nobis atque?
        </motion.h3>
        <motion.p>
          long desc Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur beatae incidunt quis nulla sint quod, sequi rem dolore,
          qui quas voluptatibus impedit nemo rerum mollitia labore sunt corrupti
          et ducimus dolor magnam nam, cumque vero iusto. Voluptate explicabo
          laudantium incidunt unde recusandae? Dicta praesentium repudiandae,
          voluptatum non iusto ipsum error voluptate est perspiciatis expedita
          id. Veritatis ex ea fugiat alias iusto aperiam velit eligendi
          inventore veniam, earum reiciendis cum, blanditiis sapiente, debitis
          tenetur harum! Cupiditate voluptas ut rem eveniet similique sed
          consequuntur nam vero, dolorem perspiciatis tempore quasi nihil
          dignissimos vitae ullam necessitatibus autem molestias ipsam
          temporibus enim ipsa quis!
        </motion.p>

        <ButtonWrapper whileHover={hoverAnimation.buttonHover}>
          <Button as={Link} to='/uslugi'>
            Wstecz
          </Button>
        </ButtonWrapper>
      </InnerWrapper>
    </PageWrapper>
  );
};

const ButtonWrapper = styled(motion.div)`
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 15px;
  margin-top: 6rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSvg = styled(SingleServiceSvg)`
  width: 100%;
  margin-top: 5rem;
`;

const InnerWrapper = styled(motion.div)`
  width: 95%;
  max-width: 1280px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  text-align-last: center;

  h1 {
    margin-top: 3rem;
    font-size: 3rem;
    text-align: center;
  }

  h3 {
    margin-top: 3rem;
    font-size: 2rem;
  }

  p {
    margin-top: 5rem;
    font-size: 1.6rem;
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
      font-size: 1.8rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 8rem;
  }
`;

export default SingleServicePage;
