import HomeCardWithIcon from 'components/molecules/HomeCardWithIcon';
import { listOfTopics } from 'data/homeData';

const HomeList: React.FC = () => {
  return (
    <>
      {listOfTopics.map(({ description, icon, inverted, link, id, svg }) => (
        <HomeCardWithIcon
          key={id}
          description={description}
          id={id}
          icon={icon}
          inverted={inverted}
          link={link}
          Svg={svg}
        />
      ))}
    </>
  );
};

export default HomeList;
