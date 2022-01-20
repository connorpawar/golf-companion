import * as React from 'react';
import { View } from 'react-native';
import { Card } from "../components/Card";
import { Center, NativeBaseProvider } from 'native-base';

export const Courses = ({ navigation }) => {
  return (
    <NativeBaseProvider>
    <Center
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
    px={4}
    flex={1}
    >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Card 
        imageUrl='https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'
        title='Bangalore'
        tag='Photos'
        subTitle=''
        text="Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife."
        date='6 mins ago'
      />
    </View>
    </Center>
    </NativeBaseProvider>
  );
}