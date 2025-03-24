import { View, Text ,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';

import React from 'react';

const vehicle1 = [
    {
        id: 1,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 2,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    { 
        id: 3,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 4,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 5,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 6,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 7,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 8,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 9,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },
    {
        id: 10,
        name:"vehicle1",
        'vehicle number':'',
        variant:'',
        fuelType:'',
        registrationYear:'',
    },

];

const vehicle1Tiles = ({navigation}) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {vehicle1.map((vehicle1) => (
                <TouchableOpacity  key={vehicle1.id} style={styles.title} onPress={() =>alert(`${vehicle1.name} clicked!`)}>
                 <Text style={styles.title}>{vehicle1.name}</Text>
                 <Text style={styles.description}>{vehicle1.variant}</Text>
                </TouchableOpacity>}
                ))}
                </ScrollView>
    );
};



export default vehicle1;