import styled from 'styled-components';

const Map = () => {
  return (
    <>
      <Iframe
        title='Google Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.31916411521456!2d18.57632215400422!3d53.01476009641709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703351e1b453f85%3A0x4261f94b9c608b17!2sVITA-DENT%20Stomatologia%20lek.stom.%20Lekarz%20Stomatologia%20Znany%20Lekarz%20Stomatolog%20Dentysta%20Toru%C5%84!5e0!3m2!1spl!2spl!4v1625736840275!5m2!1spl!2spl'
        style={{ border: 0 }}
        loading='lazy'
      ></Iframe>
    </>
  );
};

const Iframe = styled.iframe`
  display: block;
  width: 95%;
  max-width: 1024px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 3rem;
  box-shadow: 0px 0px 15px 1px rgba(255, 255, 255, 0.8);

  @media (min-width: 768px) {
    height: 400px;
  }
`;

export default Map;
