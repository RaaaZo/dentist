import HeaderSection from 'components/molecules/HeaderSection';
import { ReactComponent as OfficeSvg } from 'assets/svg/office.svg';
import OfficeCardWithImage from 'components/organisms/OfficeCardWithImage';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam delectus veniam ea dignissimos cumque esse asperiores eos beatae qui!',
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
      <OfficeCardWithImage inverted={false} />
      <OfficeCardWithImage inverted={true} />
      <OfficeCardWithImage inverted={false} />
    </>
  );
};

export default OfficePage;
