import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function PickQuest() {
    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={require('../assets/images/mhwQicon.png')} style={styles.icon}/>
                <Text style={styles.text}>Quest</Text>
                <TouchableOpacity style={styles.clearBtn}>
                    <Text style={styles.clearText}>Options</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.clearBtn1}>
                    <Text style={styles.clearText}>📷</Text>
                </TouchableOpacity> 
            </View>       
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'flex-start',
            marginTop: 30,
            marginLeft: 15,
        },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 8,
            borderRadius: 5,
            minWidth:300,
        },
        icon: {
            width: 40,
            height: 40,
            resizeMode: 'contain',
            marginRight: 10,
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
            backgroundColor: '#e9bd2c',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 3,
            justifyContent: 'center',
            marginLeft: 5, 
        },

        clearBtn1: {
            alignItems: 'center',
            backgroundColor: '#77dd62',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 3,
            justifyContent: 'center',
            marginLeft: 5, 
        },
        clearText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#000',
        }
}
);