import firstImage from 'assets/images/1-small.webp';
import secondImage from 'assets/images/2-small.webp';
import thirdImage from 'assets/images/3-small.webp';
import fourthImage from 'assets/images/4-small.webp';

interface OfficeDataInterface {
  text: string;
  image: string;
  inverted: boolean;
}

export const officeData: OfficeDataInterface[] = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus quae eius atque beatae esse, officia at eaque corporis voluptates amet provident officiis nemo eveniet sint exercitationem consequuntur maiores soluta.',
    image: firstImage,
    inverted: false,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus quae eius atque beatae esse, officia at eaque corporis voluptates amet provident officiis nemo eveniet sint exercitationem consequuntur maiores soluta.',
    image: secondImage,
    inverted: true,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus quae eius atque beatae esse, officia at eaque corporis voluptates amet provident officiis nemo eveniet sint exercitationem consequuntur maiores soluta.',
    image: thirdImage,
    inverted: false,
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus quae eius atque beatae esse, officia at eaque corporis voluptates amet provident officiis nemo eveniet sint exercitationem consequuntur maiores soluta.',
    image: fourthImage,
    inverted: true,
  },
];
