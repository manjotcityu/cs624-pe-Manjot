// Listing 6.5 AddCity tab
// Listing 6.6 AddCity tab
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import uuid from 'react-native-uuid'
import { colors } from '../theme'

class AddCity extends React.Component {
    state = {
        city: '',
        country: ''
    }
    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }
    submit = () => {
        if (this.state.city === '' || this.state.country === '') alert('please complete form')
        const city = {
            city: this.state.city,
            country: this.state.country,
            id: uuid.v4(),
            locations: []
        }
        this.props.route.params.addCity(city)
        this.setState({
            city: '',
            country: ''
        }, () => {
            this.props.navigation.navigate('Cities')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Countries</Text>
                <TextInput
                    placeholder='Country name'
                    onChangeText={val => this.onChangeText('city', val)}
                    style={styles.input}
                    value={this.state.city}
                />
                <TextInput
                    placeholder='Dollar'
                    onChangeText={val => this.onChangeText('country', val)}
                    style={styles.input}
                    value={this.state.country}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Country</Text>
                    </View>
                </TouchableOpacity>
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

export default AddCity