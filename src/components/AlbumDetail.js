import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  const { album } = props;
  console.log(album);

  return (
    <Card>
      <CardSection>
        {console.log('dasd', album)}

        <Text>{album.title}</Text>
      </CardSection>
    </Card>
    // <View>
    //   <Text>{album.title}</Text>
    // </View>
  );
};

export default AlbumDetail;
