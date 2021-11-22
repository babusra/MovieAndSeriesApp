import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar,Card, Paragraph } from 'react-native-paper';

const ContentDetail =({movieData})=>{

   
    return <Card style={{margin:5.0}}>
        <Card.Title
            title={movieData.title}
            subtitle={movieData.releaseYear}
            left={(props) => <Avatar.Icon {...props} icon={movieData.programType=='series'?'movie':'movie-roll'} />}
           
        />

        <Card.Content>
        <Card.Cover source={{ uri: `${Object.values(movieData.images)[0].url}`}} />

        <Paragraph style={{textAlign:'center'}}>{movieData.description}</Paragraph>
        </Card.Content>
    </Card>
}

const style=StyleSheet.create({});

export default ContentDetail;

