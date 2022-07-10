import Button from '../components/Button/Button';
import Icon from '../components/Icon/Icon';
import Input from '../components/Input/Input';
import colors from '../style/colors';

const LandingPage = () => {
  return (
    <>
      <Input placeholder="usenrame@emaill.cim" />
      <Button variant="primary">hello</Button>
      <Icon fill={colors.amaryllisRed} iconCode="heart" />
    </>
  );
};

export default LandingPage;
