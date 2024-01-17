import React from 'react';
import { StyleSheet, TouchableOpacity, Button, View, Text , Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Home({ navigation }) {
  return (
    <View>
      {/* <Text>This is Home Page</Text> */}
      <Image
        style={{ width: 350, height: 200 ,marginTop:20 , marginBottom:360}}
        source={{ uri: 'https://assets.website-files.com/5cb818e9bfadbe53aa4ed7e0/5e288d127e735f7ba2972e25_Geofencing.png' }}
      />

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
            <Icon name="home" onPress={() => navigation.navigate('Home') } size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Icon name="golf" onPress={()=> navigation.navigate("Farm")} size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="person" onPress={() => navigation.navigate('Account') } size={30} color="#000" />
          </TouchableOpacity>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
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
  