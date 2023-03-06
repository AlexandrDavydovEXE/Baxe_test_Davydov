import {Icon} from 'native-base';
import {Path, LinearGradient, Stop, Defs} from 'react-native-svg';

const HomeIcon = () => (
  <Icon width="19" height="20" viewBox="0 0 19 20" fill="none">
    <Path
      d="M18.0071 19.0735C18.1946 18.8859 18.3 18.6316 18.3 18.3664V7.85636C18.3001 7.70397 18.2654 7.55358 18.1985 7.41666C18.1316 7.27974 18.0343 7.15993 17.914 7.06636L9.914 0.844361C9.73846 0.707806 9.5224 0.633667 9.3 0.633667C9.0776 0.633667 8.86155 0.707806 8.686 0.844361L0.686003 7.06636C0.565723 7.15993 0.468418 7.27974 0.401519 7.41666C0.33462 7.55358 0.299898 7.70397 0.300003 7.85636V18.3664C0.300003 18.6316 0.40536 18.8859 0.592896 19.0735C0.780433 19.261 1.03479 19.3664 1.3 19.3664H17.3C17.5652 19.3664 17.8196 19.261 18.0071 19.0735ZM10.3 17.3663V11.3663H8.3V17.3663H10.3Z"
      fill="url(#paint0_linear_0_500)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_0_500"
        x1="0.300003"
        y1="0.633667"
        x2="19.104"
        y2="18.9243"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF3B61" />
        <Stop offset="1" stopColor="#520D8C" />
      </LinearGradient>
    </Defs>
  </Icon>
);
export default HomeIcon;
