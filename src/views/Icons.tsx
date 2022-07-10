import Icon from '../components/Icon/Icon';
import { IconCode } from '../components/Icon/types';
import colors from '../style/colors';

// @test: page that allows for easy testing of icons
const icons = [
  'arrow',
  'circlePlus',
  'heart',
  'minus',
  'plus',
  'search',
  'shoppingCart',
  'times',
  'user',
] as IconCode[];

export default () => (
  <>
    <div class="text-title text-xl flex flex-col justify-start p-8 w-full">
      {icons.map((ic) => (
        <>
          <div>{ic}</div>
          <div class="flex justify-between align-center p-4">
            {Object.keys(colors).map((color) => (
              <Icon iconCode={ic} fill={colors[color]} />
            ))}
            {Object.keys(colors).map((color) => (
              <Icon iconCode={ic} strokeWidth={'20'} stroke={colors[color]} />
            ))}
          </div>
        </>
      ))}
    </div>
  </>
);
