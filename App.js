import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navbar from './components/navbar';
import BrandScreen from './screens/BrandScreen';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Brand: BrandScreen,
  Nav: Navbar
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Cars'
  }
});

export default createAppContainer(navigator);