import {View, Text, StyleSheet} from "react-native";

// export default function Header() {
//   return (
//   <View className="bg-[#ccc0b0] border border-black p-10 m-10">
//     <Text className="text-center text-red-300" >Monster Hunter Wilds Monster Data</Text>
//   </View>
//   );
// }

export default function Header() {
  return (
  <View style={styles.header}>
    <Text style={styles.h1} >Monster Hunter Wilds Monster Data</Text>
  </View>
  );
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: "#6d5534",
        // padding: 10,
        margin: 10,
        height: '30%',
        width: '100%',
  
    },
    h1: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 25,
    }
})

