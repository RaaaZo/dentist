import styled from 'styled-components';

interface Props {
  title: string;
  header?: string;
  description: string;
  home?: boolean;
  Svg: any;
}

const HeaderSection: React.FC<Props> = ({
  description,
  title,
  header,
  Svg,
  home,
}) => {
  const StyledSvg = styled(Svg)<Props>`
    display: block;
    width: ${(props) => (props.home ? '150px' : '95%')};
    height: 300px;
    position: ${(props) => (props.home ? 'absolute' : 'relative')};
    margin: 2rem auto;
    top: 2rem;

    @media (min-width: 736px) {
      width: ${(props) => (props.home ? '200px' : '100%')};
      height: 400px;
      left: 5%;
    }

    @media (min-width: 1024px) {
      position: absolute;
      width: ${(props) => (props.home ? '250px' : '40%')};
      height: 500px;
      top: ${(props) => (props.home ? '2rem' : '0')};
      left: auto;
      right: ${(props) => (props.home ? '15%' : '2rem')};
    }

    @media (min-width: 1360px) {
      right: ${(props) => (props.home ? '20%' : '5rem')};
    }
  `;

  return (
    <StyledHeader>
      <StyledSvg home={home} />

      <StyledHeaderWrapper home={home}>
        <h1>{title}</h1>
        {header && <h2>{header}</h2>}
        <p>{description}</p>
      </StyledHeaderWrapper>

      <StyledParagraph>{description}</StyledParagraph>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding-bottom: 2rem;

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const StyledHeaderWrapper = styled.div<{ home?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.black};
  margin-left: ${(props) => (props.home ? '150px' : '0px')};
  height: ${(props) => (props.home ? '300px' : '100%')};

  h1,
  h2 {
    margin-top: ${(props) => (props.home ? '2rem' : 0)};
    font-size: ${(props) => (props.home ? '2.5rem' : '3rem')};
  }

  p {
    display: none;
  }

  @media (min-width: 736px) {
    height: ${(props) => (props.home ? '400px' : '100%')};

    h1,
    h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 0;
    width: 60%;
    height: 100%;
    padding: 3rem 5rem;

    h1,
    h2 {
      font-size: 4rem;
      margin: 1rem auto;
    }

    p {
      display: block;
      max-width: 500px;
      text-align: justify;
      font-size: 1.8rem;
      margin-top: 2rem;
    }
  }
`;

const StyledParagraph = styled.p`
  text-align: justify;

  font-size: 1.8rem;
  margin-top: 8rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align-last: center;

  @media (min-width: 736px) {
    margin-top: 12rem;
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default HeaderSection;
