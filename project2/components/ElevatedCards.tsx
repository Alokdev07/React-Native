import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>

        <View style = {[styles.card,styles.cardElevated]}>
            <Text  style = {styles.text}>Tap</Text>
        </View>

        <View style = {[styles.card,styles.cardElevated]}>
            <Text  style = {styles.text}>me</Text>
        </View>

        <View style = {[styles.card,styles.cardElevated]}>
            <Text  style = {styles.text}>to</Text>
        </View>

        <View  style = {[styles.card,styles.cardElevated]}>
            <Text style = {styles.text}>scroll more...</Text>
        </View>

        <View  style = {[styles.card,styles.cardElevated]}>
            <Text style = {styles.text}>hii</Text>
        </View>

        </ScrollView>
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
        padding : 8,
      },
      card : {
        height : 100,
        width : 100,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 3,
        borderRadius : 5
      },
      cardElevated : {
        backgroundColor : '#CAD5E2',
        shadowOffset : {
            height : 16,
            width : 16
        },
        shadowColor : '#CAD5E2'
      },
      text : {
        fontSize : 8,
        padding : 6
        }
})