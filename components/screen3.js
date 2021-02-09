import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// icons
import F5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';
import AD from 'react-native-vector-icons/AntDesign';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';

const spacing = 20;
const opacity = 0.6;

export default () => {
    return <ScrollView style={{backgroundColor:'white'}}>
        <View
            style={{
                height: 170,
                backgroundColor: '#E8FBFF',
                flexDirection: 'column',
            }}>
            <View
                style={{
                    flexDirection: 'row-reverse',
                    padding: spacing,
                }}>
                <Text
                    style={{
                        marginLeft: spacing / 2,
                        fontWeight: 'bold'
                    }}>4.5</Text>
                <AD name="star" color="gold" size={20} />
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                <F5
                    name="user-circle"
                    size={60} />
                <Text
                    style={{
                        fontWeight: 'bold',
                    }}>Rabada Josh</Text>
            </View>
        </View>
        <View
            style={{
                top: -20,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#07A6E7',
                    paddingVertical: spacing / 2,
                    borderRadius: 40,
                    width: 120,
                }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Cleaner</Text>
            </TouchableOpacity>
        </View>

        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginBottom: spacing
            }}>
            <MCI name="message" size={25} />
            <MI name="call" size={25} />
            <MI name="calendar-today" size={25} />
            <FA name="whatsapp" size={25} />
        </View>

        <View
            style={{
                height: 60,
                borderTopWidth: 1,
                borderTopColor: '#07A6E7',
                borderBottomWidth: 0.5,
                borderBottomColor: 'rgba(0,0,0,0.2)',
                flexDirection: 'row',
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
                    }}>Ganesh Kumar</Text>
                <Text
                    style={{
                        color: "#07A6E7"
                    }}>Kala Apartments, HRS Layout</Text>
                <Text
                    style={{
                        color: "#D78D5E"
                    }}>KA 36 MK 789</Text>
            </View>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacing,
                }}>
                <MI name="navigate-next" size={30} />
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
                    }}>Ganesh Kumar</Text>
                <Text
                    style={{
                        color: "#07A6E7"
                    }}>Kala Apartments, HRS Layout</Text>
                <Text
                    style={{
                        color: "#D78D5E"
                    }}>KA 36 MK 789</Text>
            </View>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacing,
                }}>
                <MI name="navigate-next" size={30} />
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
                    }}>Ganesh Kumar</Text>
                <Text
                    style={{
                        color: "#07A6E7"
                    }}>Kala Apartments, HRS Layout</Text>
                <Text
                    style={{
                        color: "#D78D5E"
                    }}>KA 36 MK 789</Text>
            </View>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingHorizontal: spacing,
                }}>
                <MI name="navigate-next" size={30} />
            </View>
        </View>
    </ScrollView>
}