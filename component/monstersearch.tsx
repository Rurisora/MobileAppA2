import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function MonsterSearch() {
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Text style={styles.icon}>🔍</Text>
                <Text style={styles.text}>Large Monster</Text>
                <TouchableOpacity style={styles.clearBtn}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>  
            </View>       
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            marginTop: 40,
        },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 5,
            minWidth:300,
        },
        icon: {
            flex: 1,
            color: '#f1c40f',
            fontSize: 18,
            textAlign: 'left',
        },
        text: {
            fontSize: 16,
            flex: 3,
            color: '#fff',
            textAlign: "left",
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#555',
        },
        clearBtn: {
            alignItems: 'center',
            backgroundColor: '#ffffff',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 3,
            justifyContent: 'center',
        },
        clearText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#000',
        }
}
);