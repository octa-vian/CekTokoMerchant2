import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../../Utils'

const ListPreviewStruk = ({nama, satuan, status}) => {
    return (
    
        <View>
        <View style={styles.page2}>
        <View style={styles.tab1}>
            <Text style={{fontSize:12,
              color:'black',
              fontWeight:'normal',
              textTransform:'capitalize'}} >{nama}</Text>
        </View>
        <View style={styles.tab2}>
            <Text style={{fontSize:12, }} > {satuan} </Text>
        </View>
        <View style={styles.tab3}>
            <Text style={{fontSize:12, color:colors.btnredcolor, textTransform:'capitalize'}}>{status}</Text>
        </View>
        </View>
        </View>
        
    )
}

export default ListPreviewStruk

const styles = StyleSheet.create({
    page: {
      paddingHorizontal: 21,
      paddingVertical: 13,
      marginBottom: 10,
      flex: 1,
    },
    page2:{
      flexDirection:'row',
      justifyContent:'center',
      width:307,
      paddingTop:4
      //height:22
    },
    title: {
      fontSize: 12,
      color: 'black',
      fontWeight:'bold'
    },
    title1:{
      height:48,
      width:71
    },
    title2:{
      height:48,
      width:220,
    },
    rating: {
      fontSize: 17,
      color: 'black',
    },
    poster: {
      width: 30,
      height: 30,
    },
    tab1:{
      flex:1,
      marginLeft:10,
      
      //alignItems:'center'
  },
  tab2:{
      flex:1,
      alignItems:'center'
  },
  tab3:{
      flex:1,
      alignItems:'flex-start'
  }
  });
