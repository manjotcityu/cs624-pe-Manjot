import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({


    card: {
        borderColor: "black",
        borderWidth: 3,
        width: 150,
        height: 150,
        backgroundColor: "dodgerblue",
        borderRadius: 20,
        alignItems: "center",
        padding: 20
    },
    text: {
        fontSize: 20,
        color: "dodgerblue"
    },
    circle: {
        marginTop: 20,
        backgroundColor: "#fff",
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        color: "white",
        fontWeight: "bold"
    },
    name: {
        marginTop: 20
    },
    role: {
        marginTop: 10
    },
    roleText: {
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    description: {
        marginTop: 10,
    },
    descriptionText: {
        alignContent: "center"
    }



})