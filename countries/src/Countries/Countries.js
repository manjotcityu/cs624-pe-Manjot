// Listing 6.7 countries route (functionality)
// Listing 6.8 countries route (styling)
import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class Countries extends React.Component {
    static navigationOptions = {
        title: 'Countries',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    }
    navigate = (item) => {
        this.props.navigation.navigate('City', { city: item })
    }
    render() {
        const { countries } = this.props.route.params;
        return (
            <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
                <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
                    {
                        !countries.length && <CenterMessage message='No saved countries!' />
                    }
                    {
                        countries.map((item, index) => (
                            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                                <View style={styles.cityContainer}>
                                    <Text style={styles.city}>{item.city}</Text>
                                    <Text style={styles.country}>{item.country}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20,
    },
    country: {
        color: 'rgba(0, 0, 0, .5)'
    },
})