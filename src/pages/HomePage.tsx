import { ReactComponent as DoctorSvg } from 'assets/svg/doctor.svg';
import HeaderSection from 'components/molecules/HeaderSection';
import HomeList from 'components/organisms/HomeList';

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
    </>
  );
};

export default HomePage;
