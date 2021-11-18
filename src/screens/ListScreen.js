import React, {useState} from "react";
import { Text, StyleSheet, View} from "react-native";
import { Searchbar,Provider as PaperProvider, Button } from "react-native-paper";

const ListScreen=()=>{

  const [searchQuery,setSearchQuery]=useState("");
  const onChangeSearch = query => setSearchQuery(query);

    return( 
    <PaperProvider>
    <View>
    <Searchbar style={styles.SearchStyle} placeholder="Film / Dizi / Oyuncu ara" onChangeText={onChangeSearch} value={searchQuery}/>
    </View>
    </PaperProvider>
 
  )};

const styles=StyleSheet.create({
  SearchStyle:{
    width:290
  } 
});

export default ListScreen;