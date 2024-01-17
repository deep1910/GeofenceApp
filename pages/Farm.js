import React from 'react';


import { StatusBar } from 'expo-status-bar';

import {  StyleSheet,Text, TouchableOpacity,Button,  View } from 'react-native';
import MapView, {Marker , PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Farm({ navigation }) {
  return (
   
       <View style={{ flex: 1 }}> 
       {/* <Text>Farm Page</Text> */}
      
      <MapView
        style={{ flex: 1, 
            height:80,
        }}
        
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 20.77940,
          longitude: 76.67873,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
        coordinate={{ latitude: 20.77940, longitude:76.67873 }}
        title="My Marker"
        description="Some description"
      />
      </MapView>
   
       <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
            <Icon name="home" onPress={() => navigation.navigate('Home') } size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Icon name="golf" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="person" onPress={() => navigation.navigate('Account')} size={30} color="#000" />
          </TouchableOpacity>
        </View>
      {/* <StatusBar style="auto" /> */}
    
     
    </View> 
   
  );
}




const styles = StyleSheet.create({
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5,
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
  