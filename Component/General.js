import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
export function AppbarBack() {
  return (
    <View style={styles.topback}>
      <LinearGradient
        colors={['#B200ED', '#81007f']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
      <LinearGradient
        style={styles.top}
        colors={['#B200ED', '#81007f']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
    </View>
  );
}
export function BtnForOption(props) {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 90,
          width: 90,
          borderRadius: 5,
          borderColor: '#B200ED',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 7,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 30,
            width: 40,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 10,
            backgroundColor: props.color,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={props.icon} color="#fff" size={20} />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 20,
            width: 30,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 5,
            backgroundColor: '#D6CFC7',
          }}
        />
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  top: {
    height: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  topback: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
});
