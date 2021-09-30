

import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { DeleteOutlined } from 'ant-design/icons'
 
 const DelEvent = ({text, func, mainText}) => {
  return (
    <TouchableOpacity onPress={func}>
        <View style={styles.listItem}>
            <Text style={styles.header}><DeleteOutlined /></Text><Text> {text}</Text>
        </View>
    </TouchableOpacity>
  );
 }

 const styles = StyleSheet.create({
     header: {
       borderRadius: 21,
       borderWidth: 2,
       fontSize: 14,
       alignSelf: 'flex-start',
       alignSelf: 'flex-end',
       padding: 0,
       paddingLeft: 4,
       paddingRight: 4,
       margin: 4
   }
 })
 
 export default DelEvent;
 