import HeaderSection from 'components/molecules/HeaderSection';
import HomeList from 'components/organisms/HomeList';

import { ReactComponent as DoctorSvg } from 'assets/svg/doctor.svg';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import styled from 'styled-components';

interface HeaderSectionData {
  title: string;
  header: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'W oparciu o swoje wieloletnie doświadczenie, chciałem stworzyć gabinet, który jest przede wszystkim przyjazny dla moich pacjentów. W swojej pracy zwracam uwagę przede wszystkim na rzetelność. Nie pracuję ,, na czas’’. Chcę, aby każdy po wizycie w moim gabinecie, wyszedł z uśmiechem na twarzy. To sprawia mi największą satysfakcję.',
  title: 'Lekarz Stomatologii',
  header: 'Witold Kozanecki',
  Svg: DoctorSvg,
};

const HomePage = () => {
  return (
    <>
      <HeaderSection
        description={headerSectionData.description}
        header={headerSectionData.header}
        title={headerSectionData.title}
        Svg={headerSectionData.Svg}
        home={true}
      />

      <HomeList />

      <SocialMediaWrapper>
        <a href=''>
          <h4>Odwiedź nas również na</h4>
          <Facebook />
          <h4>i zobacz co u nas słychać!</h4>
        </a>
      </SocialMediaWrapper>
    </>
  );
};

export const SocialMediaWrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  svg {
    margin: 2rem;
  }
  h4 {
    transition: all 0.8s;
  }
  &:hover h4 {
    color: ${({ theme }) => theme.darkBlue};
  }

  @media (min-width: 600px) {
    a {
      flex-flow: row wrap;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 2.2rem;
    svg {
      width: 50px;
      height: 50px;
      background: ${({ theme }) => theme.white};
    }
  }
`;

export default HomePage;
