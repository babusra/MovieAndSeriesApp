import React, {useState} from "react";
import { Text, StyleSheet,View} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Searchbar} from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import ContentDetail from "../components/ContentDetail";
const serMovData = require('../data/seriesMoviesdata.json').entries;


const ListScreen=(props)=>{

  const [searchQuery,setSearchQuery]=useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Yeniye Göre Sırala', value: '0'},
    {label: 'Eskiye Göre Sırala', value: '1'},
    {label: 'Puana Göre Sırala', value: '2'},
    {label: 'Rastgele Sırala', value: '3'},

  ]);

  const programType=props.navigation.state.params.programType;
  
  const[pType,setPType]=useState(programType);

  const filteredData=()=>{
    var r=serMovData.filter(function(item){
      return item.programType==pType;
    });

    if (searchQuery.length>2){
      r=r.filter(function(item){
        return item.title.includes(searchQuery);
      });
    }

    r.sort(function(a, b) {
      switch(value){

          case '0':
              return a.releaseYear<b.releaseYear?1:-1;
          case '1':
              return a.releaseYear>b.releaseYear?1:-1;
          case '3':
              return Math.round(Math.random());
      }

    });

    return r;
}

const renderItem = ({ item }) => (
  <ContentDetail serMovData={item}></ContentDetail>
);
  const data=filteredData();
  

    return( 
    <View style={styles.container}>

    <Searchbar 
        placeholder="Film / Dizi / Oyuncu ara"
        onChangeText={(value)=>{setSearchQuery(value);}}
        value={searchQuery}/>


    <Text style={{margin:5.0}}>{data.length} {programType} kaydı bulundu</Text>
    <FlatList 
      data={data}
      renderItem={renderItem}
    ></FlatList>
  


  
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Sırala"
    />
    </View>



 
  );};

const styles=StyleSheet.create({
  SearchStyle:{
    width:290,
    marginTop:20,
    marginBottom:10
  },
  container:{
    marginBottom:200
  } 
});

export default ListScreen;