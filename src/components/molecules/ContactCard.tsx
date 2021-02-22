import styled from 'styled-components';

import { motion } from 'framer-motion';

interface Props {
  Icon: any;
  hours?: string[];
  phone?: string;
  email?: string;
}

const ContactCard: React.FC<Props> = ({ Icon, email, hours, phone }) => {
  return (
    <CardWrapper>
      <Icon />
      {phone && (
        <motion.h3 whileHover={{ color: '#40A3F8' }}>{phone}</motion.h3>
      )}
      {email && (
        <motion.a whileHover={{ color: '#40A3F8' }} href={`mailto: ${email}`}>
          {email}
        </motion.a>
      )}
      {hours && (
        <motion.ul>
          {hours.map((day) => (
            <motion.li whileHover={{ color: '#40A3F8' }}>{day}</motion.li>
          ))}
        </motion.ul>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 95%;
  max-width: 350px;
  height: 400px;
  background-color: rgba(255, 255, 255, 255, 0.8);
  backdrop-filter: blur(2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem auto;
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 15px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    font-weight: bold;
    text-decoration: none;
  }

  h3 {
    font-size: 1.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default ContactCard;
