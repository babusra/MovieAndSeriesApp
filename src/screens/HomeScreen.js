import React from "react";
import { Text,StyleSheet,View, Image} from "react-native";
import { Button,Provider as PaperProvider} from "react-native-paper";

const HomeScreen=()=>{
  return(
 <PaperProvider>
   <View style={{ flexDirection:"row" }}>
   <View>
    <View>
      <Button mode="contained" onPress={() =>console.log('Pressed')}>
        <Image source={require('../../assets/witcher.jpg')} />
      </Button>
    </View>

    <View>
      <Button mode="contained" onPress={() =>console.log('Pressed')}>
        <Image source={require('../../assets/jum.jpg')} />
      </Button>
    </View>
    </View> 
    </View>
    </PaperProvider> 
  )};

const styles=StyleSheet.create({});

export default HomeScreen;
