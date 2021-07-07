import HeaderSection from 'components/molecules/HeaderSection';
import HomeList from 'components/organisms/HomeList';
import { ReactComponent as DoctorSvg } from 'assets/svg/doctor.svg';

interface HeaderSectionData {
  title: string;
  header: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam delectus veniam ea dignissimos cumque esse asperiores eos beatae qui!',
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
    </>
  );
};

export default HomePage;
