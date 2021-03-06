import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navbar from './components/navbar';
import BrandScreen from './screens/BrandScreen';
import CountryScreen from './screens/CountryScreen';
import HomeScreen from './screens/HomeScreen';
import ModelScreen from './screens/ModelScreen';
import SearchBar from './components/serachbar';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Brand: BrandScreen,
  Nav: Navbar,
  Model: ModelScreen,
  Country: CountryScreen,
  Search: SearchBar
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'All Airports'
  }
});

export default createAppContainer(navigator);