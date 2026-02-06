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
        backgroundColor: "#503815",
        margin: 10,
        height: '30%',
        width: '90%',
  
    },
    h1: {
        color: "white",
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 25,
    }
})

