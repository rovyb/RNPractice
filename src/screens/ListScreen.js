import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 20  },
        { name: 'Friend #3', age: 20  },
        { name: 'Friend #4', age: 20  },
        { name: 'Friend #5', age: 20  },
        { name: 'Friend #6', age: 20  },
        { name: 'Friend #7', age: 20  },
        { name: 'Friend #8', age: 20  },
        { name: 'Friend #9', age: 20  },
    ]
    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                //element === { item: {name: 'Friend #1'}, index: 0}
                //item === { name: 'Friend #1'}
                return <Text style={styles.textStyle}>{item.name}  {item.age} years old!</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;