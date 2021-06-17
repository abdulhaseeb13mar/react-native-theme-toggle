/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {ToggleTheme} from '../redux/actions';
import {connect} from 'react-redux';

function Settings({ToggleTheme, currentTheme}) {
  return (
    <View style={{flex: 1}}>
      <List.Item
        title="Dark Mode"
        left={() => <List.Icon icon="brightness-4" />}
        right={() => (
          <Switch
            value={currentTheme}
            onValueChange={val => ToggleTheme(val)}
          />
        )}
      />
    </View>
  );
}
const mapStateToProps = state => ({
  currentTheme: state.themeReducer.theme,
});
export default connect(mapStateToProps, {ToggleTheme})(Settings);
