import { IconCode, SvgProps } from './types';
import {
  Arrow,
  CirclePlus,
  Heart,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Times,
  User,
} from './Svg';

const ICON_MAP = {
  arrow: Arrow,
  circlePlus: CirclePlus,
  heart: Heart,
  minus: Minus,
  plus: Plus,
  search: Search,
  shoppingCart: ShoppingCart,
  times: Times,
  user: User,
};

interface Props extends SvgProps {
  iconCode: IconCode;
  scale?: string;
  strokeWidth?: string;
}

const Icon = ({
  iconCode,
  scale = '3.4rem',
  fill = 'none',
  stroke = 'none',
  strokeWidth,
  ...rest
}: Props) => {
  const IconSVG = ICON_MAP[iconCode];
  return (
    <div style={{ width: scale, height: scale }} {...rest}>
      <IconSVG
        stroke-width={strokeWidth}
        height={scale}
        width={scale}
        fill={fill}
        stroke={stroke}
        class="fill-blue"
      />
    </div>
  );
};

export default Icon;
