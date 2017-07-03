import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

export default class App  {
    static start () {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'MyApp5.FirstScreen', // unique ID registered with Navigation.registerScreen
                title: 'Navigation', // title of the screen as appears in the nav bar (optional)
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            },
            // drawer: { // optional, add this if you want a side menu drawer in your app
            //     left: { // optional, define if you want a drawer from the left
            //     screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
            //     passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            //     },
            //     right: { // optional, define if you want a drawer from the right
            //     screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
            //     passProps: {} // simple serializable object that will pass as props to all top screens (optional)
            //     },
            //     disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
            // },
            passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            animationType: 'slide-up' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
        });
    }

}