import {View, Text, StyleSheet} from "react-native";

export default function PlayerScale() {
    return (
    <View style={styles.selectheader}>
        <Text style={styles.h3}>Player Scale</Text>
        <View style={styles.container}>
            <View style={styles.underlineBox}>
                <Text style={styles.selectText}>Base Values</Text>
            </View>
            <Text style={styles.symbol}>📄</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        selectheader: {
            marginTop: 20,
            alignItems: 'flex-start',
            marginLeft: 20,
            color: '#ffffff'
        },
        h3: {
            fontSize: 12,
            color: '#ffffff',
            paddingBottom: 10,
        },
        container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
        underlineBox: {
            borderBottomWidth: 1,
            borderBottomColor: '#ffffff',
            paddingBottom: 4,
            marginRight: 12,
        },
        selectText: {
            fontSize: 16,
            color: '#ffffff',
            paddingBottom: 12,
            width: 200,
        },
        symbol: {
            fontSize: 40,
            color: '#ffffff',
            lineHeight: 44,
        }
    }
)