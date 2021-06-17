import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home';
import SettingScreen from '../screens/settings';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {connect} from 'react-redux';

function Navigation({currentTheme}) {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer theme={currentTheme ? DarkTheme : DefaultTheme}>
      <PaperProvider theme={currentTheme ? PaperDarkTheme : PaperDefaultTheme}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused
                  ? 'account-settings'
                  : 'account-settings-outline';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  currentTheme: state.themeReducer.theme,
});

export default connect(mapStateToProps, {})(Navigation);
