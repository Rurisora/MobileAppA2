import React from 'react';
import {View, Alert, Button, StyleSheet} from 'react-native';

export default function AlertMessage() {
    const messageAlert = () => {
        Alert.alert(
        "Alert",
        "Alert Button pressed",
        [{text: "OK"}],
        {cancelable: true}
        );
    };
    return (
        <View style={styles.container}>
            <Button title="Click Me" onPress={messageAlert} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: '#ffffff',
    }
})