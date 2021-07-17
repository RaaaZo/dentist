import { ReactComponent as OfficeSvg } from 'assets/svg/office.svg';
import HeaderSection from 'components/molecules/HeaderSection';
import OfficeCardWithImage from 'components/organisms/OfficeCardWithImage';
import { officeData } from 'data/officeData';
import styled from 'styled-components';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Otwierając swój gabinet, miałem na uwadze dobro swoich Pacjentów. Dlatego też wyposażyłem go w najwyższej klasy sprzęt, dzięki któremu jestem w stanie zapewnić państwu najlepszą opiekę i szeroki zakres usług stomatologicznych.',
  title: 'Gabinet',
  Svg: OfficeSvg,
};

const OfficePage = () => {
  return (
    <>
      <HeaderSection
        description={headerSectionData.description}
        title={headerSectionData.title}
        Svg={headerSectionData.Svg}
      />
      <Wrapper>
        {officeData.map(({ image }, index) => (
          <OfficeCardWithImage key={index} image={image} />
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 3rem 0;
  }

  @media (min-width: 1360px) {
    margin: 7rem 0;
  }
`;

export default OfficePage;
