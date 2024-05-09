import { router } from 'expo-router';

import { Text, View, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      middleName: '',
      lastName: '',
      contactNo: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    try {
      //api call for sign up
      router.replace('sign-in');
      //   navigation.navigate('sign-up')
    } catch (error) {
      console.log(error);
      Alert.alert('Sign up failed.');
    }
  };

  function render({ field: { onChange, onBlur, value } }) {
    return (
      <TextInput
        style={styles.input}
        obBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.signUpContainer, styles.signUpCard]}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoName}>Shopping App</Text>
        </View>
        <Text style={[styles.headerText]}>Sign up</Text>

        <Text style={styles.paragraph}>Email*</Text>
        <CustomInput
          control={control}
          name='email'
          rules={{ required: true }}
          placeholder='Email'
          keyboardType='email-address'
        />

        <Text style={styles.paragraph}>Password*</Text>
        <CustomInput
          control={control}
          name='password'
          rules={{ required: true }}
          placeholder='Password'
          secureTextEntry={true}
        />

        <Text style={styles.paragraph}>First Name*</Text>
        <CustomInput
          control={control}
          name='firstName'
          rules={{ required: true }}
          placeholder='First Name'
        />

        <Text style={styles.paragraph}>Middle Name</Text>
        <CustomInput
          control={control}
          name='middleName'
          rules={{ required: false }}
          placeholder='Middle Name'
        />

        <Text style={styles.paragraph}>Last Name*</Text>
        <CustomInput
          control={control}
          name='lastName'
          rules={{ required: true }}
          placeholder='Last Name'
        />

        <Text style={styles.paragraph}>Contact No.*</Text>
        <CustomInput
          control={control}
          name='contactNo'
          rules={{ required: true }}
          placeholder='Contact No.'
          keyboardType='phone-pad'
        />

        <View style={[styles.signUpButtonContainer]}>
          <CustomButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            onPress={handleSubmit(onSubmit)}
          >
            Sign Up
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    padding: 30,
  },
  signUpContainer: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    marginBottom: 25,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  logoName: {
    fontSize: 40,
    fontWeight: 'bold',
    height: '100%',
    color: 'dodgerblue',
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    backgroundColor: 'white',
    marginVertical: 8,
    backgroundColor: '#d3d3d3',
  },
  signUpButtonContainer: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#6495ED',
  },
  signUpCard: {
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  signUpButton: {
    backgroundColor: 'white',
  },
  signUpButtonText: {
    color: '#ffffff',
  },
});

