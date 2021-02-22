import HeaderSection from 'components/molecules/HeaderSection';
import { ReactComponent as ContactSvg } from 'assets/svg/contact.svg';
import ContactCard from 'components/molecules/ContactCard';
import { contactData } from 'data/contactData';
import { ContactDataWrapper } from 'components/atoms/ContactDataWrapper';
import Map from 'components/atoms/Map';

interface HeaderSectionData {
  title: string;
  description: string;
  Svg: any;
}

const headerSectionData: HeaderSectionData = {
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam delectus veniam ea dignissimos cumque esse asperiores eos beatae qui!',
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
        {contactData.map(({ Icon, email, hours, phone }) => (
          <ContactCard Icon={Icon} email={email} hours={hours} phone={phone} />
        ))}
      </ContactDataWrapper>

      <Map />
    </>
  );
};

export default ContactPage;
