import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, ImageBackground,StatusBar,Dimensions} from 'react-native';
import {Button_white, Background, led} from '../../../asset/index';
import ClickButton1 from '../buttons/Clickbutton1';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bed_room: React.FC = (props: any) => {
    const {navigation} = props;

    return (
    <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.imgbg}
    >
    <View style={styles.viewled}>
        <ImageBackground
        style={styles.led}
        source={led}/>
    </View>
        
   <View style={styles.Btn1}>
     <ImageBackground
       source={Button_white}
       style={styles.btnsgup}
     >
     <ClickButton1
       title="On"
       titleStyle={styles.titleSignUp}
       onPress={() => navigation.navigate('')}
             />
     </ImageBackground>
   </View>
   <View style={styles.Btn2}>
     <ImageBackground
       source={Button_white}
       style={styles.Btn2}
     >
     <ClickButton1
       title="Off"
       titleStyle={styles.titleSignUp}
       onPress={() => navigation.navigate('')}
             />
     </ImageBackground>
   </View>
 </ImageBackground>
);
};
    
const styles = StyleSheet.create({
    fullScreenContainer: {
    flex: 1,
      // backgroundColor: '#035efc',
    borderRadius: 20,
    flexDirection: 'column',
    },
    imgbg: {
        flex:1
      },
    viewled: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'center',
        width: 300,
        height: 300,
        top: 50,
    },
    led: {
        flex:1,
        alignSelf: 'center',
        height: 300,
        width:300,
    },
    Btn1: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'center',
        width: 365,
        height: 60,
        top: 480,
      },
    Btn2: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'center',
        width: 265,
        height: 60,
        top: 290,
      }, 
    btnsgup: {
        flex:1,
        alignSelf: 'center',
        height: 60,
        width:265,
    },
    titleSignUp: {
        color: '#3486eb',
        fontSize: 25,
        top:8,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});
  
    
export default Bed_room;