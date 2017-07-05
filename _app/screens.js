import {Navigation} from 'react-native-navigation';

import MyApp5 from './MyApp5';
//import LoginComponent from './components/LoginComponent';
//import StatusComponent from './components/StatusComponent';
import SomePageContainer from './containers/SomePageContainer';

// register all screens of the app (including internal ones)
const registerScreens = (store, Provider) => {
  Navigation.registerComponent('MyApp5.FirstScreen', () => MyApp5, store, Provider);
  //Navigation.registerComponent('Login.LoginComponent', () => LoginComponent, store, Provider);
  //Navigation.registerComponent('Status.StatusComponent', () => StatusComponent, store, Provider);
  Navigation.registerComponent('SomePage.SomePageContainer', () => SomePageContainer, store, Provider);
};

export default registerScreens;