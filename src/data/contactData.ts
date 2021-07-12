import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import { ReactComponent as Hours } from 'assets/svg/hours.svg';
import { ReactComponent as Email } from 'assets/svg/email.svg';

interface Data {
  Icon: any;
  hours?: string;
  phone?: string[];
  email?: string;
  id: number;
}

export const contactData: Data[] = [
  { id: 1, Icon: Phone, phone: ['509-949-202', '730-998-577 '] },
  {
    id: 2,
    Icon: Hours,
    hours: 'Poniedziałek-Czwartek: 10:30- 18:30',
  },
  { id: 3, Icon: Email, email: 'stomatolog@vitadent-kozanecki.pl' },
];
