
import React, {useState} from "react";
import { Text, StyleSheet, View} from "react-native";
import { Searchbar} from "react-native-paper";

const ListScreen=()=>{

  const [searchQuery,setSearchQuery]=useState("");
  const onChangeSearch = query => setSearchQuery(query);

    return( 
    <View>
    <Searchbar style={styles.SearchStyle} placeholder="Film / Dizi / Oyuncu ara" onChangeText={onChangeSearch} value={searchQuery}/>
    </View>
 
  )};

const styles=StyleSheet.create({
  SearchStyle:{
    width:290
  } 
});

export default ListScreen;