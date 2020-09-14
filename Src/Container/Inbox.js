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
    Image
} from 'react-native';
import { dynamicSize } from '../utils/responsive';
import { datas } from '../Data';
const { height, width } = Dimensions.get('window');
import { Rating, AirbnbRating } from 'react-native-ratings';
// import { Container } from './styles';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === 'ios' ? dynamicSize(100) : dynamicSize(100);

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

const InboxScreen = ({navigation},props) => {
console.log('props...',navigation)
    showInboxList = (item, index) => {
        return (
            <View style={{
                backgroundColor: '#FFFFFF',
                height: dynamicSize(70),
                width: width / 1.1,
                // borderRadius: dynamicSize(40),
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',

                ///
                borderWidth: 0.2,
                borderRadius: 5,
                borderColor: 'gray',
                // borderBottomWidth: 1,
                shadowColor: '#000000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.5,
                //shadowRadius: 1,
                elevation: 5,
                paddingLeft: 15,
                paddingRight: 15,
                //    marginLeft: 5,
                marginTop: dynamicSize(15),
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View
                        style={{
                            height: dynamicSize(40),
                            width: dynamicSize(40),
                            borderRadius: dynamicSize(20),
                            backgroundColor: "rgb(66,162,64)",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    ><Text style={{ fontWeight: 'bold' }}>{item.shortName}</Text></View>
                    <View style={{
                        // height:dynamicSize(10),
                        width: dynamicSize(15),
                        // backgroundColor:'black'
                    }} />
                    <View style={{
                        // height: dynamicSize(60),
                        //  justifyContent: 'flex-start',
                        // backgroundColor: 'red'
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                        <View style={{ height: dynamicSize(10) }} />
                        <Text style={{ color: 'gray' }}>{item.profile}</Text>
                    </View>
                </View>


                <View>
                    <Rating
                        type='star'
                        ratingCount={1}
                        imageSize={30}
                        fractions={1}
                         readonly={false}
                      //  startingValue={1}
                        //showRating
                      //  onFinishRating={this.ratingCompleted}
                    />
                </View>

            </View>
        )
    }

    return (<View style={styles.container}>
        <MyStatusBar barStyle="light-content" />
        <View style={styles.header}>
            <TouchableOpacity
            onPress={()=>navigation.openDrawer()}
            >

                <Image
                    resizeMode='contain'
                    style={{
                        height: dynamicSize(40),
                        width: dynamicSize(60),
                        // backgroundColor:'red'
                    }}
                    source={require('../Assets/list.png')}
                />
            </TouchableOpacity>
            <View><Text style={{
                fontSize: dynamicSize(25)
            }}>Inbox</Text></View>
            <TouchableOpacity
            onPress={()=>alert('No More Content')}
            >
                <Image
                    resizeMode='contain'
                    style={{
                        height: dynamicSize(30),
                        width: dynamicSize(50),
                        //  backgroundColor:'red'
                    }}
                    source={require('../Assets/menu.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <FlatList
                // showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                //onRefresh={true}
                data={datas}
                //  extraData={refreshing}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) =>
                    showInboxList(item, index)
                }
            />

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
        backgroundColor: 'rgb(66,162,64)',
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    content: {
        flex: 1,
        backgroundColor: 'rgb(240,242,245)',
        justifyContent: "center",
        alignItems: "center",

    },
});
export default InboxScreen;