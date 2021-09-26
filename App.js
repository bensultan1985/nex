/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * format
 * 
flow
 * strict-local
 */
//to run: react-native run-ios

import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList} from 'react-native'
import ListItem from './ListItem.js'
import AddButton from './AddButton.js'
import AddForm from './AddForm.js'
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const GetRand = () => {
   let num =  Math.floor(Math.random * 239487589);
   return num;
 }

 
 const App = () => {

  const SetData = async () => {
    let jsonStr = JSON.stringify({items});
    console.log(jsonStr, 'string')
    try {
      await AsyncStorage.setItem(
        'nexItems',
        jsonStr
      );
      GetData()
    } catch (error) {
      // Error saving datacn
      console.log(error)

    }
  };


  const GetData = async () => {
    try {
      const value = await AsyncStorage.getItem('nexItems');
      if (typeof value != null && value != '') {
        parVal = JSON.parse(value)
        console.log('parVal', parVal.items.items)
        SetItemsArr(parVal.items.items)
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };

  const DataReturned = (str) => {
console.log('returned', str)
  }

  const SetItemsArr =(value) => {
    console.log('current store:', value)
    if (value != null) {
      parsedVal = JSON.parse(value)
      setItems(parsedVal)
      console.log(parsedVal, 'val')
    }
  }


  const [items, setItems] = useState(
    [
     {key: 230874309, date: 1633095600000, title: 'Harvest Interview', details: 'Second interview'},
     {key: 345867024, date: 1631289600000, title: 'Get Groceries', details: 'Need eggs and pizza'},
     {key: 348506850, date: 1633201200000, title: 'Psychiatrist Appt', details: 'with doctor'}
   ]
   )
  //  SetData()
  GetData()
   const [addForm, setForm] = useState({
     title: '',
     details: '',
     date: '',
     key: null
   })

  const [_openAddForm, setOpenAddForm] = useState(false)

  const toggleForm = () => {
    setOpenAddForm(!_openAddForm);
  }
  
   function toSetForm(text, type) {
    //  console.log(type)
    switch(type) {
      case 'title': {
        setForm({...addForm, title: text});
        return
      }
      case 'details': {
        setForm({...addForm, details: text});
        return
      }
      case 'date': {
        var date = new Date(text).getTime();
        setForm({...addForm, date: date});
        return
      }
      case 'id': {
        let text = GetRand();
        setForm({...addForm, id: text});
        return;
      }
    }
   }

   let formView = <Text></Text>;
   if (_openAddForm == true) {
     formView = <View>
   <AddForm setForm={setForm} toSetForm={toSetForm} addForm={addForm} setItems={setItems} items={items} SetData={SetData}></AddForm>
  </View>
   }


  return (
    <SafeAreaView style={styles.safe}>
      {/* <Text style={styles.header}>CalBase</Text> */}
      <Text style={styles.header}>NEX</Text>
      <AddButton text="add event" func={toggleForm}></AddButton>
      {formView}
      <FlatList style={styles.eventList}
      data = {RemoveItemsBeforeToday(SortItems(items))}
      renderItem = {({item, data}) =>
      <ListItem item={item} data={data}/>}
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
   },
   eventList: {
    flexGrow: 0,
    height: '100%'
   },
   safe: {
    //  backgroundColor: 'orange',
     height: '100%'
   }
 })

 function SortItems(items) {
   console.log('sorting...', items)
   items.sort(function (a, b) {
    return a.date - b.date;
    });
  return items
 }

 function RemoveItemsBeforeToday(items) {
   let now = new Date().getTime();
   let futureDates = [];
    for (let i = 0; i < items.length; i++) {
      if (now < items[i].date) {
        futureDates.push(items[i]);
      }
    }
    return futureDates
 }
 
 export default App;
 