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
    Alert,
    
} from 'react-native';
import { dynamicSize } from '../utils/responsive';
const { height, width } = Dimensions.get('window');
// import { Container } from './styles';
import TextinputComponent from '../Component/TextInput'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
const EmployeeDetails = ({navigation},props) => {
    const[firstText,setFirstText]=useState('')
    const[lastText,setLastText]=useState('')
    const[jobText,setJobText]=useState('')
    const[salaryText,setSalaryText]=useState('')
    return (<View style={styles.container}>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        {/* <View style={styles.header}></View> */}
        <View style={styles.content}>
            <View><Text
                style={{
                    color: 'rgb(99,184,54)',
                    fontSize: dynamicSize(18),
                    fontWeight: 'bold'
                }}>Enter employee details</Text></View>
            <View>
                <TextinputComponent 
                name='First Name' 
                _onChangeText={(firstText)=>setFirstText(firstText)}
                value={firstText}
                />
                <View style={{height:dynamicSize(30)}}/>
                <TextinputComponent 
                name='Last Name' 
                _onChangeText={(lastText)=>setLastText(lastText)}
                value={lastText}
                />
                 <View style={{height:dynamicSize(30)}}/>
                <TextinputComponent
                 name='Job Title'
                 _onChangeText={(jobText)=>setJobText(jobText)}
                 value={jobText}
                 />
                  <View style={{height:dynamicSize(30)}}/>
                <TextinputComponent 
                name='Salary'
                _onChangeText={(salaryText)=>setSalaryText(salaryText)}
                value={salaryText}
                />
            </View>
            <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('InboxScreen')}
            style={{
                height: dynamicSize(50),
                width: width / 1.2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'rgb(99,184,54)'
            }}>
                <Text style={{
                    color: "#FFFFFF",
                    fontSize: dynamicSize(20),
                    fontWeight: 'bold'
                }}>Save</Text>
            </TouchableOpacity>
            </View>
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
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-evenly',
        alignItems: "center",

    },
});
export default EmployeeDetails;