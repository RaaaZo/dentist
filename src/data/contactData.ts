import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import { ReactComponent as Hours } from 'assets/svg/hours.svg';
import { ReactComponent as Email } from 'assets/svg/email.svg';

interface Data {
  Icon: any;
  hours?: string[];
  phone?: string;
  email?: string;
  id: number;
}

export const contactData: Data[] = [
  { id: 1, Icon: Phone, phone: '123-456-789' },
  {
    id: 2,
    Icon: Hours,
    hours: ['pn: 10-20', 'wt: 10-20', 'sr: 10-20', 'czw: 10-20', 'pt: 10-20'],
  },
  { id: 3, Icon: Email, email: 'gabinet@test.com' },
];
