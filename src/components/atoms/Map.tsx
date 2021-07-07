import styled from 'styled-components';

const Map = () => {
  return (
    <>
      <Iframe
        title='Google Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.2707460386835!2d18.53720062477622!3d54.50631111218833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda0ccd591abaf%3A0x4bd1c49fcfab5710!2sBiblioteka%20Wiedzy!5e0!3m2!1spl!2spl!4v1613988365244!5m2!1spl!2spl'
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
