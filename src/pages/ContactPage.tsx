import HeaderSection from 'components/molecules/HeaderSection';
import { ReactComponent as ContactSvg } from 'assets/svg/contact.svg';

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
    </>
  );
};

export default ContactPage;
