import React from 'react';
import { Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen  from  '../screens/bookDonateScreen'
import BookRequestScreen  from  '../screens/bookRequestScreen'

export const AppTabNavigator=createBottomTabNavigator ({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source= {require('../assets/request-list.png')} style= {{width: 20,height: 20}}/>,
            tabBarLabel: "Book donate"
        }


    },
    RequestBook: {
            screen: BookRequestScreen,
            navigationOptions: {
                tabBarIcon: <Image source= {require('../assets/request-book.png')} style= {{width: 20,height: 20}}/>,
                tabBarLabel: "Book request"
            
            }
        }
});