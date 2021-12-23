import React from 'react'
import {Text,View} from 'react-native'
import ionIcons from '@react-native-vector-icons/Ionicons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Next from '../screens/Next'
import Home from '../screens/Home'
const tab = createBottomTabNavigator();
const BottomTabNavigator=()=>{
    return(
    <tab.Navigator>
        screenOptions={({route})=>({
            tabBarIcon:({focusec,color,size})=>{
                let iconName;
                if(route == "Home"){
                    iconName = focused ?'home':'home-outline';
                }
                else if(route == "Next"){
                    iconName = focused? 'compass':'compass-outline';
                }
                return(<ionIcons name={iconName} size={size} color={color}></ionIcons>)
            }
        })}
        tabBarOptions={{
            activeTintColor:'indigo',
            inactiveTintColoe:'grey'
        }}
        <tab.Screen name="Home" component={Home}/>
        <tab.Screen name="Next" component={Next}/>
    </tab.Navigator>
    )
}
export default BottomTabNavigator;