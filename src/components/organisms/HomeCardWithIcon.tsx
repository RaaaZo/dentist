import styled from 'styled-components';
import Card from '../molecules/Card';

interface Props {
  inverted: boolean;
  description: string;
  link: string;
  icon: any;
  id: string;
  Svg: any;
}

interface SvgProps {
  inverted: boolean;
}

const HomeCardWithIcon: React.FC<Props> = ({
  description,
  icon,
  inverted,
  link,
  id,
  Svg,
}) => {
  return (
    <CardWrapper>
      <SvgWrapper inverted={inverted}>
        <Svg />
      </SvgWrapper>

      <Card
        isHome={true}
        key={id}
        description={description}
        id={id}
        Icon={icon}
        inverted={inverted}
        link={link}
      />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    margin: 10rem auto;
  }
`;

const SvgWrapper = styled.div<SvgProps>`
  display: none;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    order: ${({ inverted }) => (inverted ? 2 : 1)};
  }
`;

export default HomeCardWithIcon;
