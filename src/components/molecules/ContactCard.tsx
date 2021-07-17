import styled from 'styled-components';

interface Props {
  Icon: any;
  hours?: string;
  phone?: string[];
  email?: string;
}

const ContactCard: React.FC<Props> = ({ Icon, email, hours, phone }) => {
  return (
    <CardWrapper>
      <Icon />
      {phone && (
        <ul>
          {phone.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
      {email && <a href={`mailto: ${email}`}>{email}</a>}
      {hours && <h3>{hours}</h3>}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  height: 400px;
  background-color: rgba(255, 255, 255, 255, 0.8);
  backdrop-filter: blur(2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem auto;
  border: 2px solid ${({ theme }) => theme.darkBlue};
  font-family: ${({ theme }) => theme.lato};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    list-style: none;
    font-weight: 700;
  }

  a {
    font-size: 1.7rem;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.4s linear;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  & a:hover {
    color: ${({ theme }) => theme.darkBlue};
  }

  h3 {
    font-size: 1.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: text;
  }
`;

export default ContactCard;
