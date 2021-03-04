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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut animi id nemo obcaecati consequuntur a tempora facere quidem odit.',
    link: '/uslugi',
    svg: Woman,
    inverted: false,
  },
  {
    id: '067544a0-714b-11eb-9439-0242ac130002',
    icon: BuildingIcon,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut animi id nemo obcaecati consequuntur a tempora facere quidem odit.',
    link: '/gabinet',
    svg: Building,
    inverted: true,
  },
  {
    id: '06755e5e-714b-11eb-9439-0242ac130002',
    icon: LocationIcon,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut animi id nemo obcaecati consequuntur a tempora facere quidem odit.',
    link: '/kontakt',
    svg: Location,
    inverted: false,
  },
];
