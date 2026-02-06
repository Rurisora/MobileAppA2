import Header from "@/component/header";
import MonsterSearch from "@/component/monstersearch";
import {View, Text, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return(
    <SafeAreaView style={styles.body}>
      <Header/>
      <MonsterSearch></MonsterSearch>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    body: {
      backgroundColor: '#2b2503',
    }
  }
)
