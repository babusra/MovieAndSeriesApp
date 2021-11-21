import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar,Card, Paragraph } from 'react-native-paper';

const ContentDetail =({serMovData})=>{

   
    return <Card style={{margin:5.0}}>
        <Card.Title
            title={serMovData.title}
            subtitle={serMovData.releaseYear}
            left={(props) => <Avatar.Icon {...props} icon={serMovData.programType=='series'?'movie':'record-roll'} />}
           
        />

        <Card.Content>
        <Card.Cover source={{ uri: `${Object.values(serMovData.images)[0].url}`}} />

        <Paragraph style={{textAlign:'center'}}>{serMovData.description}</Paragraph>
        </Card.Content>
    </Card>
}

const style=StyleSheet.create({});

export default ContentDetail;