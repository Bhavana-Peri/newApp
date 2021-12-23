import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import tabNav from './tabnav'
import home from '../screens/Home'
import next from '../screens/Next'

const Drawer = createDrawerNavigator();
const DrawerNav =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={home}/>
            <Drawer.Screen name = "Next" component={next}/>
            <Drawer.Screen name = "oth" component={tabNav}/>
        </Drawer.Navigator>
    )
}
export default DrawerNav;