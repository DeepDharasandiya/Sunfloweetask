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
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {BtnForOption} from '../Component/General';

function DashBoard(props) {
  const time_table = [
    {id: '1', subject: 'Maths', time: '9.30 am'},
    {id: '2', subject: 'Science', time: '10.30 am'},
    {id: '3', subject: 'English', time: '11.30 am'},
    {id: '4', subject: 'Hindi', time: '12.30 am'},
    {id: '5', subject: 'Gujarati', time: '1.30 am'},
  ];
  return (
    <View style={styles.container}>
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
      <View style={styles.topview}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon style={styles.menuicon} name="bars" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={styles.titletext}>MY DASHBOARD</Text>
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.firstview}>
          <View style={[styles.innercornerview, {bottom: 0, right: 0}]} />
          <View style={styles.centerview_firstview}>
            <View style={styles.subview}>
              <Text style={styles.subviewtext}>07</Text>
              <Text style={styles.subviewtext}>Exams</Text>
            </View>
            <View style={styles.subview}>
              <Text style={styles.subviewtext}>02</Text>
              <Text style={styles.subviewtext}>Projects</Text>
            </View>
            <View style={styles.subview}>
              <Text style={styles.subviewtext}>88</Text>
              <Text style={styles.subviewtext}>Clear</Text>
            </View>
            <Image
              style={styles.studentgif}
              source={require('../Assets/student2.png')}
            />
          </View>
        </View>
        <Text style={styles.header_timetable}>Today's Time Table</Text>
        <FlatList
          style={styles.videos_flatList}
          horizontal={true}
          data={time_table}
          renderItem={({item}) => (
            <View style={styles.timetableview}>
              <Text style={styles.timetabletext}>{item.subject}</Text>
              <Text style={styles.timetabletext}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={[styles.firstview, {marginTop: 15, flexDirection: 'row'}]}>
          <View style={styles.innercornerview2} />
          <View style={styles.lefttextattendance}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              My Attendance
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>85%</Text>
          </View>
          <View style={styles.righttextattendance}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Total : 31 Days
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Present : 22 Days
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>
              Absent : 03 Days
            </Text>
          </View>
        </View>
        <View
          style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <BtnForOption
            text="ATTENDANCE"
            icon="bars"
            color="orange"
            onpress="abc"
          />
          <BtnForOption
            text="HOME WORK"
            icon="bars"
            color="#2196F3"
            onpress="abc"
          />
          <BtnForOption
            text="SYLLABUS"
            icon="book"
            color="#710193"
            onpress="abc"
          />
        </View>
        <View
          style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <BtnForOption
            text="SUJECT"
            icon="book"
            color="#0B6623"
            onpress="abc"
          />
          <BtnForOption text="RESULT" icon="bars" color="red" onpress="abc" />
          <BtnForOption
            text="REPORTS"
            icon="book"
            color="#E11584"
            onpress="abc"
          />
        </View>
        <View
          style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <BtnForOption
            text="LEAVES"
            icon="bars"
            color="#AA00FF"
            onpress="abc"
          />
          <BtnForOption
            text="MERITLIST"
            icon="book"
            color="#E4CD05"
            onpress="abc"
          />
          <BtnForOption
            text="TIMe TABLE"
            icon="bars"
            color="pink"
            onpress="abc"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  topview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: StatusBar.currentHeight,
  },
  menuicon: {
    marginHorizontal: 20,
  },
  titletext: {
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollview: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  firstview: {
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  innercornerview: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 60,
    width: 60,
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 10,
    backgroundColor: '#FEC5E5',
  },
  innercornerview2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 60,
    width: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 10,
    backgroundColor: '#FEC5E5',
  },
  centerview_firstview: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  subview: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#81007f',
    marginHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  subviewtext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  studentgif: {
    height: 70,
    width: 70,
    marginLeft: 10,
    bottom: 8,
  },
  header_timetable: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  timetableview: {
    height: 40,
    width: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B200ED',
    shadowColor: '#B200ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  timetabletext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
  lefttextattendance: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  righttextattendance: {
    padding: 10,
    justifyContent: 'center',
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

export default DashBoard;
