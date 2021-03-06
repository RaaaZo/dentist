import { ReactComponent as OfficeSvg } from 'assets/svg/office.svg';
import HeaderSection from 'components/molecules/HeaderSection';
import OfficeCardWithImage from 'components/organisms/OfficeCardWithImage';
import { officeData } from 'data/officeData';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Otwierając swój gabinet, miałem na uwadze dobro swoich Pacjentów, dlatego też wyposażyłem go w różnorodne materiały, zarówno pochodzące z Polski jak i spoza granic kraju. Dzięki temu jestem w stanie zapewnić Państwu jak najlepszą opiekę. Nieustannie stawiam na jakość sprzętu medycznego.',
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
      {officeData.map(({ image, inverted, text }, index) => (
        <OfficeCardWithImage
          key={index}
          image={image}
          inverted={inverted}
          text={text}
        />
      ))}
    </>
  );
};

export default OfficePage;
