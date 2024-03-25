import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Chores from '../screens/Chores';
import Ranking from '../screens/Ranking';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabsNav(){
    return(
        StatusBar.setBarStyle('dark-content'),
        <Tab.Navigator
        screenOptions={{ headerShown: false }}
        >
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel: 'Casa',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen 
            name='Chores' 
            component={Chores}
            options={{
                tabBarLabel: 'Tarefas',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="checkmark-circle" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen 
            name='Ranking' 
            component={Ranking}
            options={{
                tabBarLabel: 'Ranking',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="trophy" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen 
            name='Settings' 
            component={Settings}
            options={{
                tabBarLabel: 'Configurações',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" color={color} size={size} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default function MainNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name='Home' component={TabsNav}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

