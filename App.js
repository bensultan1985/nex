/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList} from 'react-native'
import ListItem from './ListItem.js'
import AddButton from './AddButton.js'
 
 const GetRand = () => {
   return Math.floor(Math.random * 239487589);
 }
 
 const App = () => {
   const [items, setItems] = useState([
     {id: GetRand(), date: 1633095600000, title: 'Harvest Interview', details: 'Second interview'},
     {id: GetRand(), date: 1631289600000, title: 'Get Groceries', details: 'Need eggs and pizza'},
     {id: GetRand(), date: 1633201200000, title: 'Psychiatrist Appt', details: 'with doctor'}
   ])
  return (
    <SafeAreaView>
      {/* <Text style={styles.header}>CalBase</Text> */}
      <Text style={styles.header}>NEX</Text>
      <AddButton text="add event"></AddButton>
      <FlatList
      data = {RemoveItemsBeforeToday(SortItems(items))}
      renderItem = {({item}) => <ListItem item={item}/>}
      />
    </SafeAreaView>
  );
 }

 const styles = StyleSheet.create({
   header: {
     color: 'white',
     textAlign: 'center',
     backgroundColor: 'purple',
     fontSize: 24
   }
 })

 function SortItems(items) {
   items.sort(function (a, b) {
    return a.date - b.date;
    });
  return items
 }

 function RemoveItemsBeforeToday(items) {
   let now = new Date();
   now = now.getTime()
   let futureDates = [];
    for (let i = 0; i < items.length; i++) {
      console.log(now, items[i].date)
      if (now < items[i].date) futureDates.push(items[i])
    }
    return futureDates
 }
 
 export default App;
 