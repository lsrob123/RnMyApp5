import { Navigation } from 'react-native-navigation';

import MyApp5 from './MyApp5'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('MyApp5.FirstScreen', () => MyApp5);
}