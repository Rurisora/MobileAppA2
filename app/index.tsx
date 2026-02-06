import AlertMessage from "@/component/alertbutton";
import Header from "@/component/header";
import MonsterSearch from "@/component/monstersearch";
import PlayerScale from "@/component/playerscale";
import PickQuest from "@/component/quest";
import SelectRank from "@/component/selectrank";
import {View, Text, StyleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
  return(
    <SafeAreaView style={styles.body}>
      <Header/>
      <MonsterSearch></MonsterSearch>
      <SelectRank></SelectRank>
      <PlayerScale></PlayerScale>
      <PickQuest></PickQuest>
      <Image source={require('../assets/images/datadisplay.png')} style={styles.data}></Image>
      <Text style={styles.text}>Results</Text>
      <Text style={styles.reference}>Reference Website for the ScreenShot: https://robomeche.github.io/MHWilds-Database/.</Text>
      <AlertMessage></AlertMessage>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    body: {
      backgroundColor: '#2b2503',
      width: '100%',
      height: '100%',
    },
    data: {
      marginTop: 10,
      width: '95%',
      height: 100,
      resizeMode: 'cover',
      marginLeft: 10,
    },
    text: {
      borderTopColor: '#ffffff',
      borderTopWidth: 0.5,
      width: '90%',
      marginLeft: 20,
      marginTop: 15,
      paddingTop: 5,
      color: '#ffffff',
    },
    reference: {
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 40,
      paddingTop: 10,
    }
  }
)
