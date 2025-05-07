
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCard</Text>


      <View style = {styles.container}>

        <View style = {[styles.card,styles.cardOne]}>
          <Text style = {{padding : 2,color : 'white',fontSize : 15}}>red</Text>
        </View>

        <View style = {[styles.card,styles.cardTwo]}>
          <Text style = {{padding : 2,color : 'white',fontSize : 15}}>Blue</Text>
        </View>

        <View style = {[styles.card,styles.cardThree]}>
          <Text style = {{padding : 2,color : 'white',fontSize : 15}}>Green</Text>
        </View>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
      fontSize : 24,
      color : 'white',
      padding : 15
    },
    container : {
      flex : 1,
      flexDirection : 'row',
      padding : 8
    },
    card : {
      height : 100,
      width : 100,
      borderRadius : 4,
      margin : 12,
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    },
    cardOne : {
      backgroundColor : '#EF5354'
    },
    cardTwo : {
      backgroundColor : 'blue'
    },
    cardThree: {
      backgroundColor : 'green'
    }
})

export default FlatCard