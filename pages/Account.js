import React, { useState } from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { signUp, signIn } from '../auth';
import Icon from 'react-native-vector-icons/Ionicons';

const Account = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    signUp(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  };

  const handleSignIn = () => {
    signIn(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  };

  return (
<View>
{/* <Text>This is Accounts Page</Text> */}
<View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>

<View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} >
      <Icon name="home" onPress={() => navigation.navigate('Home') } size={30} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} >
      <Icon name="golf" onPress={()=> navigation.navigate("Farm")} size={30} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Icon name="person" size={30} color="#000" />
    </TouchableOpacity>
  </View>
  </View>

  );
};

export default Account;


// export default function Account({ navigation }) {
//   return (
//     <View>
//       <Text>This is Accounts Page</Text>


//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} >
//           <Icon name="home" onPress={() => navigation.navigate('Home')} size={30} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} >
//           <Icon name="golf" onPress={() => navigation.navigate("Farm")} size={30} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Icon name="person" size={30} color="#000" />
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }


const styles = StyleSheet.create({
  container:{
    padding:40,
    // paddingVertical: 20,
    // height:80,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    //  position: 'relative',
    //  bottom:-600,
    //  width: '100%',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
