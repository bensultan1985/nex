

import React from 'react';
 import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
  
  const ListItem = ({item}) => {
      console.log(item)
   return (
     <TouchableOpacity>
         <View style={styles.listItem}>
           <ItemHead item={item}>
             </ItemHead>
             <Text style={styles.body}>{item.details}</Text>
         </View>
     </TouchableOpacity>
   );
  }
 
  const styles = StyleSheet.create({
      listItem: {
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'gray',
        borderRadius: 18,
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4

      },
      time: {
        // marginTop: 10,
      color: 'purple',
      // backgroundColor: 'lightgray',
      fontSize: 18
  },
  head: {
    marginTop: 4,
  color: 'black',
  backgroundColor: 'white',
  borderColor: 'purple',
  borderWidth: 2,
  borderRadius: 18,
  fontSize: 20,
    padding: 4,
  paddingLeft: 10
},
      header: {
          // marginTop: 10,
        color: 'purple',
        fontWeight: "900",
        // backgroundColor: 'lightgray',
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

  function FormatDate(timestamp) {
    let dt = new Date(timestamp)
    return `${
      (dt.getMonth()+1).toString().padStart(2, '0')}/${
      dt.getDate().toString().padStart(2, '0')}/${
      dt.getFullYear().toString().padStart(4, '0')} ${
      dt.getHours().toString().padStart(2, '0')}:${
      dt.getMinutes().toString().padStart(2, '0')}`
  }

  const ItemHead = ({item}) => {
 return (
   <View style={styles.head}>
      <Text style={styles.time}>{FormatDate(item.date)}</Text>
      <Text style={styles.header}>{item.title}</Text>
   </View>
 );
}
  
  export default ListItem;
  