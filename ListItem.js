

import React from 'react';
 import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
  
  
  const ListItem = ({item}) => {
      console.log(item)
   return (
     <TouchableOpacity>
         <View style={styles.listItem}>
            <Text style={styles.header}>{item.date}</Text>
             <Text style={styles.header}>{item.title}</Text>
             <Text style={styles.body}>{item.details}</Text>
         </View>
     </TouchableOpacity>
   );
  }
 
  const styles = StyleSheet.create({
      listItem: {
        borderColor: 'gray',
        borderWidth: 1,

      },
      header: {
          marginTop: 10,
        color: 'black',
        backgroundColor: 'lightgray',
        fontSize: 20
    },
    body: {
        padding: 4,
        paddingLeft: 40,
        color: 'black',
        backgroundColor: 'white',
        margin: 10,
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 20
    }
  })
  
  export default ListItem;
  