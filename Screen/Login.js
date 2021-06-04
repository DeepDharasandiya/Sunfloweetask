import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AppbarBack, Statusbar} from '../Component/General';
import LinearGradient from 'react-native-linear-gradient';
export default function Login(props) {
  return (
    <ScrollView style={styles.container}>
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
        end={{x: 1, y: 0}}>
        <Text style={styles.titletext}>Next Gen Class</Text>
      </LinearGradient>

      <View style={styles.middle}>
        <Text style={styles.welcometext}>Welcome!</Text>
        <Text style={styles.inputtitle}>Email:</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter Your Email"
        />
        <Text style={styles.inputtitle}>Password:</Text>
        <TextInput
          style={styles.input}
          password={true}
          secureTextEntry
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter Your Password"
        />
        <TouchableOpacity>
          <Text style={styles.forgotpassword}>Forgot Password!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Loginbtn}
          onPress={() => props.navigation.navigate('AppDrawer')}>
          <LinearGradient
            style={styles.Loginbtn}
            colors={['#B200ED', '#81007f']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.textbtn}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.or}>Or</Text>
        <View style={styles.otheroption}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AppDrawer')}>
            <Image
              style={styles.otheroptionimage}
              source={require('../Assets/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AppDrawer')}>
            <Image
              style={styles.otheroptionimage}
              source={require('../Assets/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Drawer')}>
            <Image
              style={styles.otheroptionimage}
              source={require('../Assets/twitter.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.signup}>I Haven't Any Account!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: 150,
    marginTop: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 60,
  },
  titletext: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight * 2,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  welcometext: {
    fontSize: 30,
    color: '#1338BE',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputtitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 15,
    color: '#1338BE',
    padding: 10,
  },
  forgotpassword: {
    textAlign: 'right',
    marginTop: 10,
    color: '#1338BE',
    fontWeight: 'bold',
    fontSize: 15,
  },
  middle: {
    marginHorizontal: 25,
  },
  Loginbtn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  textbtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  or: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  otheroption: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  otheroptionimage: {
    marginHorizontal: 10,
    height: 45,
    width: 45,
  },
  signup: {
    textAlign: 'center',
    marginTop: 30,
    color: '#1338BE',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
