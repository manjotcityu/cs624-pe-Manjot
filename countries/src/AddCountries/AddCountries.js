// Listing 6.5 Addcountry tab
// Listing 6.6 Addcountry tab
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacountry } from 'react-native'
import uuid from 'react-native-uuid'
import { colors } from '../theme'

class AddCountry extends React.Component {
    state = {
        country: '',
        dollar: ''
    }
    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }
    submit = () => {
        if (this.state.country === '' || this.state.dollar === '') alert('please complete form')
        const country = {
            country: this.state.country,
            dollar: this.state.dollar,
            id: uuid.v4(),
            locations: []
        }
        this.props.route.params.addcountry(country)
        this.setState({
            country: '',
            dollar: ''
        }, () => {
            this.props.navigation.navigate('Countries')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Countries</Text>
                <TextInput
                    placeholder='country name'
                    onChangeText={val => this.onChangeText('country', val)}
                    style={styles.input}
                    value={this.state.country}
                />
                <TextInput
                    placeholder='dollar name'
                    onChangeText={val => this.onChangeText('dollar', val)}
                    style={styles.input}
                    value={this.state.dollar}
                />
                <TouchableOpacountry onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add country</Text>
                    </View>
                </TouchableOpacountry>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    heading: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    }
})

export default AddCountry