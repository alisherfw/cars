import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navbar from './components/navbar';
import BrandScreen from './screens/BrandScreen';
import CountryScreen from './screens/CountryScreen';
import HomeScreen from './screens/HomeScreen';
import ModelScreen from './screens/ModelScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Brand: BrandScreen,
  Nav: Navbar,
  Model: ModelScreen,
  Country: CountryScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'All Airports'
  }
});

export default createAppContainer(navigator);