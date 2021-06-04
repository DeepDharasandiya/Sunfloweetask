import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DashBoard from '../Screen/DashBoard';
import Profile from '../Screen/Profile';
import HomeWork from '../Screen/HomeWork';
import TimeTable from '../Screen/TimeTable';
import Result from '../Screen/TimeTable';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <SafeAreaView style={{alignItems: 'center'}}></SafeAreaView>;
      }}>
      <Drawer.Screen
        name="TabBar"
        component={TabBar}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      tabBarOptions={{showIcon: true}}
      tabBarPosition={'bottom'}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home Work"
        key="Home Work"
        component={HomeWork}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home"
        key="Home"
        component={DashBoard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Time Table"
        key="Time Table"
        component={TimeTable}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Results"
        key="Results"
        component={Result}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 25,
        borderColor: '#B200ED',
        borderWidth: 1,
        marginTop: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon = {
          Profile: 'user-circle-o',
          HomeWork: 'book',
          Home: 'home',
          TimeTable: 'calendar-o',
          Results: 'file-text-o',
        };
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View
              style={{
                width: 70,
                marginHorizontal: 5,
                alignItems: 'center',
              }}>
              {console.log(icon[label.replace(' ', '')])}
              <Icon
                name={icon[label.replace(' ', '')]}
                color={isFocused ? '#B200ED' : 'black'}
                size={isFocused ? 30 : 20}
              />
              <Text
                style={{
                  color: isFocused ? '#B200ED' : '#222',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
