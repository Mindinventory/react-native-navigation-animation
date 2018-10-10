/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeTransitions from './HomeSreen'


const ExampleNavigator = createStackNavigator({
    home: {
        screen: HomeTransitions,
        navigationOptions: {
            header: null
        }
    },
});

class MyApp extends React.Component<any> {
    render() {
        return (
            <ExampleNavigator />
        );
    }
}

export default MyApp;
