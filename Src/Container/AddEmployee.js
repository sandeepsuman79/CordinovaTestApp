import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Alert
} from 'react-native';
import { dynamicSize } from '../utils/responsive';
const{height,width}=Dimensions.get('window');
// import { Container } from './styles';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
const AddEmployee = ({navigation}) => {
  return (<View style={styles.container}>
    <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
    {/* <View style={styles.header}></View> */}
    <View style={styles.content}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('EmployeeDetails')}
        style={{
            height:dynamicSize(60),
            width:width/1.2,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:'rgb(52,126,47)'
        }}>
        <Text style={{
            color:"#FFFFFF",
            fontSize:dynamicSize(22),
            fontWeight:'bold'
        }}> ADD EMPLOYEE</Text>
        </TouchableOpacity>
    </View>
    </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    header: {
        backgroundColor: '#79B45D',
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    content: {
        flex: 1,
        backgroundColor: 'rgb(66,162,64)',
        justifyContent:"center",
        alignItems:"center",
    
    },
});
export default AddEmployee;