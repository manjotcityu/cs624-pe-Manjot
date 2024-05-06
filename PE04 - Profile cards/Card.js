import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './Styles'

export const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.circle}>
                <Image source={require('./user.png')} />
            </View>

            <View style={styles.name}>
                <Text style={styles.nameText}>John Does</Text>
            </View>
            <View style={styles.role}>
                <Text style={styles.roleText}>React Native Developer</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>John is a really greate Javascript
                    developer. He loves using JS to
                    build React Native applications
                    for IOS and Android
                </Text>
            </View>
        </View>
    )
}
