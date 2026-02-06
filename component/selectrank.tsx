import {View, Text, StyleSheet} from 'react-native'

export default function selectRank() {
    <View style={styles.header}>
        <Text style={styles.h3}>Select Rank</Text>
        <View style={styles.container}>
            <Text style={styles.text}>High Rank</Text>
        </View>
    </View>
}

const styles = StyleSheet.create(
    {
        header: {
            marginTop: 20,
            alignItems: 'center',
        },
        h3: {
            fontSize: 16,
        },
        container: {

        },
        text: {

        },
    }
)