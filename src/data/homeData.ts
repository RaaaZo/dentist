import { ReactComponent as BuildingIcon } from 'assets/svg/building-vector.svg';
import { ReactComponent as Building } from 'assets/svg/building.svg';
import { ReactComponent as Dentist } from 'assets/svg/dentist.svg';
import { ReactComponent as LocationIcon } from 'assets/svg/location-vector.svg';
import { ReactComponent as Location } from 'assets/svg/location.svg';
import { ReactComponent as Woman } from 'assets/svg/woman.svg';

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
      'Moje doświadczenie pozwoliło mi na zapewnienie swoim pacjentom szeregu usług stomatologicznych, poczynając od najbardziej popularnych, takich jak stomatologia zachowawcza czy endodoncja, aż po stomatologię protetyczną. To wszystko dlatego, że chcę pomóc każdemu pacjentowi, który się do mnie zgłosi.',
    link: '/uslugi',
    svg: Woman,
    inverted: false,
  },
  {
    id: '067544a0-714b-11eb-9439-0242ac130002',
    icon: BuildingIcon,
    description:
      'Otwierając swój gabinet, miałem na uwadze dobro swoich Pacjentów. Dlatego też wyposażyłem go w najwyższej klasy sprzęt, dzięki któremu jestem w stanie zapewnić państwu najlepszą opiekę i szeroki zakres usług stomatologicznych.',
    link: '/gabinet',
    svg: Building,
    inverted: true,
  },
  {
    id: '06755e5e-714b-11eb-9439-0242ac130002',
    icon: LocationIcon,
    description:
      'Jesteśmy dla państwa otwarci zarówno w godzinach porannych jak i wieczornych, aby dopasować się nawet do najbardziej wymagających klientów.',
    link: '/kontakt',
    svg: Location,
    inverted: false,
  },
];
