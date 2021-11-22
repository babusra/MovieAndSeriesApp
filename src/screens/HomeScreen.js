import React from "react";
import { Text,StyleSheet,View, TouchableOpacity} from "react-native";
import { Button,Card,Title} from "react-native-paper";

const HomeScreen=(props)=>{
  return(
   <View style={styles.container}>
     <View style={styles.buttonStyle}>
       <Button mode='outlined' onPress={()=>console.log('Pressed')}>Giriş</Button>
       <Button mode='contained'onPress={()=>console.log('Pressed')}>Deneme Başlat</Button>
     </View>
      <Text style={styles.textStyle}>Popüler Başlıklar</Text>
        
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('List',{programType:'series'}); //  Shows the series by navigated to the list screen
          }} style={{flex:1}}>

          <Card style={{marginEnd:20}}>
            <Card.Cover source={require('../../assets/witcher.jpg')} />
            <Card.Content>
              <Title style={{textAlign:'center'}}>Diziler</Title>
            </Card.Content>
          </Card>
          </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          props.navigation.navigate('List',{programType:'movie'}); //   Shows the series by navigated to the list screen
          }} style={{flex:1}}>

          <Card style={{flex:1}}>
            <Card.Cover source={require('../../assets/jum.jpg')} />
            <Card.Content>
              <Title style={{textAlign:'center'}}>Filmler</Title>
            </Card.Content>
            </Card>
            </TouchableOpacity>
            
        </View>        
    </View>

  )};

const styles=StyleSheet.create({
  container:{
    flexDirection:'column',
    padding:10.0,
    margin:10.0
  },
  buttonStyle:{
    flexDirection:'row',
    alignSelf:'flex-end',
    marginBottom:40.0
  },
  textStyle:{
    fontSize:30,
    textAlign:'center',
    margin:10.0,
    padding:10,
    backgroundColor:'lightgrey'
  }
});

export default HomeScreen;
