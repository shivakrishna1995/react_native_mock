import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// icons
import F5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';
import ZI from 'react-native-vector-icons/Zocial';
// picker
import { Picker } from '@react-native-picker/picker';

const spacing = 20;
const opacity = 0.6;

export default () => {
    return <ScrollView>
        <View
            style={{
                height: 80,
                borderBottomWidth: 0.5,
                borderBottomColor: 'rgba(0,0,0,0.2)',
                paddingHorizontal: spacing,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <F5 name="user-circle" size={30} />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacing,
                }}>
                <Text
                    style={{
                        fontWeight: 'bold'
                    }}>Nayam Raj</Text>
                <Text
                    style={{
                        color: "#07A6E7"
                    }}>GOMOMKR342</Text>
            </View>
            <View
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#26C24C',
                    borderRadius: 20,
                    borderWidth: 3,
                    borderColor: 'white',
                    shadowColor: 'grey',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ZI name="call" size={20} color="white" />
            </View>
        </View>

        <View
            style={{
                height: 80,
                borderBottomWidth: 0.5,
                borderBottomColor: 'rgba(0,0,0,0.2)',
                paddingHorizontal: spacing,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <FA name="building-o" size={30} />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacing,
                }}>
                <Text
                    style={{
                        fontWeight: 'bold'
                    }}>RARA Apartments</Text>
                <Text
                    style={{
                        opacity
                    }}>5th main road, BTM Layout, Banglore 560063</Text>
            </View>
        </View>

        <Text
            style={{
                color: '#D89694',
                margin: spacing
            }}>
            Report an issue
        </Text>

        <Text
            style={{
                opacity,
                marginLeft: spacing,
                marginBottom: spacing
            }}>
            Car front glass is broken needs to check
        </Text>

        <Text
            style={{
                color: '#D89694',
                marginLeft: spacing,
                marginBottom: spacing
            }}>
            Upload an images
        </Text>

        <ScrollView
            horizontal={true}
            style={{
                height: 80,
                paddingLeft: spacing,
                marginBottom: spacing
            }}>
            {[...new Array(20).keys()].map(val => <View style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.2)',
                marginRight: spacing
            }}>

            </View>)}
        </ScrollView>

        <Text
            style={{
                color: '#26C24C',
                marginLeft: spacing,
                marginBottom: spacing
            }}>
            Report an issue status and comment
        </Text>

        <View
            style={{
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1,
                marginHorizontal: spacing,
                marginBottom: spacing,
                borderRadius: 6
            }}>
            <Picker>
                <Picker.Item label="Checked" value="Checked" />
            </Picker>
        </View>

        <View
            style={{
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1,
                marginHorizontal: spacing,
                marginBottom: spacing,
                borderRadius: 6,
                height: 120,
                paddingHorizontal: 6
            }}>
            <TextInput
                placeholder="Comment from supervisor"
                multiline />
        </View>

        <TouchableOpacity
            style={{
                backgroundColor: '#07A6E7',
                marginHorizontal: spacing,
                marginBottom: spacing,
                paddingVertical: spacing / 1.5,
                borderRadius: 6
            }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>SUBMIT</Text>
        </TouchableOpacity>

    </ScrollView>
}