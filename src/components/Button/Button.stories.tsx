import Button from './Button';

//storiesOf('Components/Button', module).add('default', () => <Button variant='primary' />);
export default {
  title: 'Button',
};

const Template  = (args) => <Button {...args}>Hello</Button>;
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};
