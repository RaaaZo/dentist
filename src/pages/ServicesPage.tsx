import HeaderSection from 'components/molecules/HeaderSection';
import { ReactComponent as ServicesSvg } from 'assets/svg/services.svg';
import ServiceCard from 'components/molecules/ServiceCard';
import ServiceCardList from 'components/molecules/ServiceCardList';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam delectus veniam ea dignissimos cumque esse asperiores eos beatae qui!',
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
