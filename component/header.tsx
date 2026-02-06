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
    <Text style={styles.h1} numberOfLines={2}>Monster Hunter Wilds Monster Data</Text>
  </View>
  );
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: "#503815",
        height: '30%',
        width: '100%',
        paddingTop: 8,
  
    },
    h1: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 25,
    }
})

