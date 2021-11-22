import React, {useState} from "react";
import { Text, StyleSheet,View} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Searchbar} from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import ContentDetail from "../components/ContentDetail";

const movieData = require('../data/seriesMoviesdata.json').entries; //getting entries from json file


const ListScreen=({navigation})=>{

  const [searchQuery,setSearchQuery]=useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('')
  const [items, setItems] = useState([
    {label: 'Yeniye Göre Sırala', value: '0'},
    {label: 'Eskiye Göre Sırala', value: '1'},
    {label: 'Puana Göre Sırala', value: '2'}, 
    {label: 'Rastgele Sırala', value: '3'},

  ]);
  

  const programType=navigation.state.params.programType; // Navigation added according to the programType selected from home page
  
  const[pType,setPType]=useState(programType);  

  const filteredData=()=>{                      
    var r=movieData.filter(function(item){   // filtering according programType
      return item.programType==pType;
    });
    
  
    if (searchQuery.length>2){       // filtering when 3 characters are entered in the search input
      r=r.filter(function(item){
        return item.title.includes(searchQuery);
      });
    }

    if (searchQuery==""){       // if not filtering display first 18 data
      r=r.slice(0,18);
    }     
    

    r.sort(function(a, b) {     //sort by selected from dropdown
      switch(value){           

          case '0':
              return a.releaseYear<b.releaseYear?1:-1;  //sort by new
          case '1':
              return a.releaseYear>b.releaseYear?1:-1;  //sort by old
          case '3':
              return Math.round(Math.random());        //sort by random
      }

    });

    return r;
}

const renderItem = ({ item }) => (
  <ContentDetail movieData={item}></ContentDetail>
);
  const data=filteredData();  //   assign filtered data to data to can display in a flat list
  


    return( 
    <View style={styles.container}>
    
    <Searchbar style={styles.SearchStyle}
        placeholder="Film / Dizi / Oyuncu ara"
        onChangeText={(value)=>{setSearchQuery(value);}}
        value={searchQuery}/>

    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Sırala"
    />
    <View style={{padding:10}}>

    </View>

     {searchQuery.length<3?<Text></Text>:<Text style={{margin:5.0}}>{data.length} {programType} kaydı bulundu</Text>}
    
    <FlatList 
      data={data}
      renderItem={renderItem}
    ></FlatList>

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