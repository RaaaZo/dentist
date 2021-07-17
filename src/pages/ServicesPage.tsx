import { ReactComponent as ServicesSvg } from 'assets/svg/services.svg';
import HeaderSection from 'components/molecules/HeaderSection';
import ServiceCardList from 'components/molecules/ServiceCardList';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Moje doświadczenie pozwoliło mi na zapewnienie swoim pacjentom szeregu usług stomatologicznych, poczynając od najbardziej popularnych, takich jak stomatologia zachowawcza czy endodoncja, aż po stomatologię protetyczną. To wszystko dlatego, że chcę pomóc każdemu pacjentowi, który się do mnie zgłosi.',
  title: 'Usługi',
  Svg: ServicesSvg,
};

const ServicesPage = () => {
  return (
    <>
      <HeaderSection
        description={headerSectionData.description}
        title={headerSectionData.title}
        Svg={headerSectionData.Svg}
      />
      <ServiceCardList />
    </>
  );
};

export default ServicesPage;
