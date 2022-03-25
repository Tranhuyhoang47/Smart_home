import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputt from '../inputt/inputt';
import ClickButton1 from '../buttons/Clickbutton1';
import TextButton from '../buttons/text-button';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button_white, Background} from '../../../asset/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const phoneERR =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signInErr = Yup.object({
  phoneNumber: Yup.string()
    .required('Please enter phone number!')
    .min(9, 'Phone number must have at least 9 digits.')
    .max(12, 'Phone number must have at least 12 digits.')
    .matches(phoneERR, 'invalid phone number!'),
  userName: Yup.string()
    .min(2, 'Name must have at least 2 characters')
    .max(100, 'Name must be up to 100 characters')
    .required('Please enter your name!'),
});

const SignUp: React.FC = (props: any) => {
  const {navigation} = props;
  const [Reader, setReader] = useState(false);

  const AllTrue = (Readd: boolean, formikValid: boolean) => {
    if (Readd === true || formikValid === true) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.fullScreenContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.textTitle}>{'Smart Home'}</Text>
        </View>
        <View style={styles.functionContainer}>
          <Text style={styles.textFunction}>{'Sign Up'}</Text>
          <Formik
            initialValues={{phoneNumber: '', userName: ''}}
            validationSchema={signInErr}
            onSubmit={values => {
              // Alert.alert(
              //   `You signed up with information: ${values.phoneNumber} and ${values.userName}`,
              // );
              navigation.navigate('');
            }}>
            {formik => (
              <KeyboardAwareScrollView>
                <TextInputt
                  errorLabel={formik.errors.phoneNumber}
                  placeholder="Enter your phone number"
                  numKeyboard={true}
                  inputProps={{
                    value: formik.values.phoneNumber,
                    onChangeText: (value: string) => {
                      formik.setFieldValue('phoneNumber', value, true);
                    },
                  }}
                />
                <TextInputt
                  errorLabel={formik.errors.userName}
                  placeholder="Enter your name"
                  inputProps={{
                    value: formik.values.userName,
                    onChangeText: (value: string) => {
                      formik.setFieldValue('userName', value, true);
                    },
                  }}
                />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={Reader}
                    onValueChange={() => setReader(!Reader)}
                    boxType={'square'}
                    onFillColor={'white'}
                  />
                  <Text style={styles.checkboxText}>
                    {'I have read and agree to the '}
                  </Text>
                  <TextButton
                    title="terms"
                    onPress={() => navigation.navigate('')}
                  />
                </View>
                <View style={styles.btnsgup}>
                  <ImageBackground source={Button_white}
                    style={styles.btnsgup}
                  >
                <ClickButton1
                  title="Sign Up"
                  titleStyle={styles.titleSignUp}
                  activeStyle={styles.buttonSignUp}
                  disabled={AllTrue(!Reader, !formik.isValid)}
                />
                </ImageBackground>
                </View>
                <Text style={styles.textOr}>{'Hoặc'}</Text>
                <View style={styles.btnsgup}>
                  <ImageBackground source={Button_white}
                    style={styles.btnsgup}
                  >
                <ClickButton1
                  title="Sign In"
                  titleStyle={styles.titleSignUp}
                  activeStyle={styles.buttonSignUp}
                  onPress={() => navigation.navigate('Sign_in')}
                />
                </ImageBackground>
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    // backgroundColor: '#035efc',
    borderRadius: 20,
    flexDirection: 'column',
  },
  greetingContainer: {
    flex: 25,
    // backgroundColor: '#035efc',
    paddingTop: windowHeight * 0.1,
    alignItems: 'center',
  },
  functionContainer: {
    flex: 75,
    // backgroundColor: '#035efc',
    paddingHorizontal: windowWidth * 0.05,
  },
  textWelcome: {
    top:16,
    fontSize: 25,
    fontWeight: '400',
    color: '#3F8EF0',
  },
  textTitle: {
    fontSize: 40,
    top:50,
    fontWeight: '400',
    color: '#000000',
  },
  textFunction: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    alignSelf: 'center',
  },
  textOr: {
    color: '#3F8EF0',
    alignSelf: 'center',
  },
  buttonSignUp: {
    width: '70%',
    height: windowHeight * 0.09,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
  },
  titleSignUp: {
    color: '#3486eb',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    top:8,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: 12,
    color: 'white',
  },
  btnsgup2: {
    flex:1,
    alignSelf: 'center',
    height: 73,
    width:305,
  },
  btnsgup: {
    flex:1,
    alignSelf: 'center',
    height: 60,
    width:265,
  }
});

export default SignUp;
