import React from 'react';
import { View, Text, ScrollView } from 'react-native';
// icons
import F5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';

const spacing = 20;
const opacity = 0.6;

export default () => {
    return <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
        <View
            style={{
                height: 200,
                backgroundColor: 'rgba(0,0,0,0.3)'
            }} />

        <View
            style={{
                top: -20,
            }}>
            <View
                style={{
                    height: 80,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    paddingHorizontal: spacing,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: 'white',
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
                            opacity
                        }}>5th main road, XYZ Street, Landmark: sample landmark, BTM Layout, Banglore 560063</Text>

                </View>
            </View>

            <View
                style={{
                    height: 60,
                    borderTopWidth: 1,
                    borderTopColor: '#07A6E7',
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    flexDirection: 'row'
                }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 4,
                        borderBottomColor: '#07A6E7',
                        marginHorizontal: spacing * 2,
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: '#D78D5E'
                        }}>Customers</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 4,
                        borderBottomColor: 'rgba(0,0,0,0.2)',
                        marginHorizontal: spacing * 2
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            opacity
                        }}>Cleaners</Text>
                </View>
            </View>

            <View
                style={{
                    height: 80,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    paddingHorizontal: spacing,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: 'white',
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
                        }}>Manoj Kumar</Text>
                    <Text
                        style={{
                            color: "#07A6E7"
                        }}>GOMOMKR342</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingHorizontal: spacing,
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}>Exterior + Interior</Text>
                    <Text
                        style={{
                            opacity
                        }}>6:00 AM - 9:00 AM</Text>
                </View>
            </View>

            <View
                style={{
                    height: 80,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    paddingHorizontal: spacing,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: 'white',
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
                        }}>Manoj Kumar</Text>
                    <Text
                        style={{
                            color: "#07A6E7"
                        }}>GOMOMKR342</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingHorizontal: spacing,
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}>Interior</Text>
                    <Text
                        style={{
                            opacity
                        }}>6:00 AM - 9:00 AM</Text>
                </View>
            </View>

            <View
                style={{
                    height: 80,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'rgba(0,0,0,0.2)',
                    paddingHorizontal: spacing,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: 'white',
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
                        }}>Manoj Kumar</Text>
                    <Text
                        style={{
                            color: "#07A6E7"
                        }}>GOMOMKR342</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingHorizontal: spacing,
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold'
                        }}>Exterior</Text>
                    <Text
                        style={{
                            opacity
                        }}>6:00 AM - 9:00 AM</Text>
                </View>
            </View>
        
        </View>

    </ScrollView>
}