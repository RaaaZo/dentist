import { servicesData } from 'data/servicesData';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';

const ServiceCardList = () => {
  return (
    <CardListWrapper>
      {servicesData.map(({ id, link, title }) => (
        <ServiceCard key={id} link={link} title={title} />
      ))}
    </CardListWrapper>
  );
};

const CardListWrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  @media (min-width: 680px) {
    margin: 5rem auto;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;

export default ServiceCardList;
