import { ReactComponent as BuildingIcon } from 'assets/svg/building-vector.svg';
import { ReactComponent as Building } from 'assets/svg/building.svg';
import { ReactComponent as Woman } from 'assets/svg/woman.svg';
import { ReactComponent as Dentist } from 'assets/svg/dentist.svg';
import { ReactComponent as LocationIcon } from 'assets/svg/location-vector.svg';
import { ReactComponent as Location } from 'assets/svg/location.svg';

interface ListOfTopics {
  id: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  description: string;
  link: string;
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  inverted: boolean;
}
export const listOfTopics: ListOfTopics[] = [
  {
    id: '0675420c-714b-11eb-9439-0242ac130002',
    icon: Dentist,
    description:
      'Moje doświadczenie pozwoliło mi na zapewnienie swoim Pacjentom szeregu usług stomatologicznych, poczynając od najbardziej popularnych- stomatologii zachowawczej czy endodoncji, aż po stomatologię protetyczną. Chcę pomóc każdemu pacjentowi, który się do mnie zgłosi.',
    link: '/uslugi',
    svg: Woman,
    inverted: false,
  },
  {
    id: '067544a0-714b-11eb-9439-0242ac130002',
    icon: BuildingIcon,
    description:
      'Otwierając swój gabinet, miałem na uwadze dobro swoich Pacjentów, dlatego też wyposażyłem go w różnorodne materiały, zarówno pochodzące z Polski jak i spoza granic kraju. Dzięki temu jestem w stanie zapewnić Państwu jak najlepszą opiekę. Nieustannie stawiam na jakość sprzętu medycznego.',
    link: '/gabinet',
    svg: Building,
    inverted: true,
  },
  {
    id: '06755e5e-714b-11eb-9439-0242ac130002',
    icon: LocationIcon,
    description:
      'Aby sprostać Państwa oczekiwaniom, proponujemy zarówno poranne jak i wieczorne godziny przyjęć.',
    link: '/kontakt',
    svg: Location,
    inverted: false,
  },
];
