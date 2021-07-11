import { ReactComponent as ContactSvg } from 'assets/svg/contact.svg';
import { ContactDataWrapper } from 'components/atoms/ContactDataWrapper';
import Map from 'components/atoms/Map';
import ContactCard from 'components/molecules/ContactCard';
import HeaderSection from 'components/molecules/HeaderSection';
import { contactData } from 'data/contactData';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Aby sprostać Państwa oczekiwaniom, proponujemy zarówno poranne jak i wieczorne godziny przyjęć.',
  title: 'Kontakt',
  Svg: ContactSvg,
};

const ContactPage = () => {
  return (
    <>
      <HeaderSection
        description={headerSectionData.description}
        title={headerSectionData.title}
        Svg={headerSectionData.Svg}
      />

      <ContactDataWrapper>
        {contactData.map(({ id, Icon, email, hours, phone }) => (
          <ContactCard
            key={id}
            Icon={Icon}
            email={email}
            hours={hours}
            phone={phone}
          />
        ))}
      </ContactDataWrapper>

      <Map />
    </>
  );
};

export default ContactPage;
