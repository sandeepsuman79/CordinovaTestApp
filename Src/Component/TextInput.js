import React from 'react';
import { View, Dimensions ,TextInput ,Text} from 'react-native';
import { dynamicSize } from '../utils/responsive';
const{height,width}=Dimensions.get('window');
// import { Container } from './styles';

const TextinputComponent = (props) => {
  return (<View style={{
borderBottomWidth:2,
borderBottomColor:'rgb(99,184,54)'
  }}>
      <Text style={{
          color:"#868686",
          fontWeight:'bold',
          fontSize:dynamicSize(14)
      }}>{props.name}</Text>
       <TextInput
            //  secureTextEntry={this.props.secureTextEntry}
             // placeholder='Your Name'
              placeholderTextColor="#868686"
              maxLength={100}
              value={props.value}
             //onSubmitEditing={()=>_onSubmitEditing()}
             // ref={this.props.reference}
            //  keyboardType={this.props.keyboardType}
              returnKeyType='go'
              style={{
                height: dynamicSize(30),
                width: width / 1.2,
                borderRadius: dynamicSize(20),
                //   borderWidth: 1,
                //   borderColor: 'red',
                color: '#999999',
                //fontSize: dynamicSize(10),
              }}
              onChangeText={()=>props._onChangeText()}
            />
  </View>);
}

export default TextinputComponent;