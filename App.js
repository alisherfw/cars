import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Cars'
  }
});

export default createAppContainer(navigator);