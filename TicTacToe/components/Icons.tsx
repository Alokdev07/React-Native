import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({ name }: { name: string }) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle" size={38} color="#F7CD2E" />;
    case 'cross':
      return <Icon name="close" size={38} color="#38CC77" />;
    default:
      return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
};
export default Icons;
